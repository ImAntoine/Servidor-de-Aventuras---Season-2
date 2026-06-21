// 1. YOUR RITUAL RECIPE (Kept exactly as you had it)
ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar(Item.of('minecraft:diamond_sword', '{Damage:0}').strongNBT())
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"cataclysm_spellbooks:abyssal_slash",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('2x minecraft:obsidian')
        .recipeTime(100)
        .id('abyssal_scroll_ritual_0');
});

// A unique, random UUID so the game tracks this specific modifier
const ATTR_UUID = "f7c14a2b-8912-4011-bba6-781eefc53bb1"; 

// 2. RITUAL COMPLETION EVENT
SummoningRituals.complete(event => {
    if (!event.player) return;
    if (event.recipe.getId().toString() == 'abyssal_scroll_ritual_0') {
        let player = event.player;
        
        // Mark the player permanently in their persistent NBT data
        player.persistentData.putBoolean('abyssal_slash_unlocked', true);
        
        // Run the function to safely apply the attribute right now
        applyPersistentAttribute(player);
        
        player.tell("§5The Abyssal power binds to your soul permanently...");
    }
});

// 3. THE SAFETY CORE: Re-applies the modifier if the game tries to wipe it
function applyPersistentAttribute(player) {
    // Only apply if they have successfully finished the ritual data tag
    if (player.persistentData.getBoolean('abyssal_slash_unlocked')) {
        let attributes = player.minecraftEntity.getAttributes();
        let targetAttr = attributes.getInstance('ironsattributes:cataclysm_spellbooks_abyssal_slash_unlocked');
        
        if (targetAttr != null) {
            // Check if they already have it active so it doesn't duplicate stack
            if (targetAttr.getModifier(java.util.UUID.fromString(ATTR_UUID)) == null) {
                let modifier = new global.nxt.minecraft.world.entity.ai.attributes.AttributeModifier(
                    java.util.UUID.fromString(ATTR_UUID),
                    "Abyssal Ritual Unlock",
                    1.0, // This replaces your 'base set 1' behavior
                    0    // Operation 0 = ADDITION
                );
                targetAttr.addPermanentModifier(modifier);
            }
        }
    }
}

// 4. PERSISTENCE HOOKS (Catches the player when they join, die, or move worlds)
PlayerEvents.loggedIn(event => {
    applyPersistentAttribute(event.player);
});

PlayerEvents.respawned(event => {
    applyPersistentAttribute(event.player);
});