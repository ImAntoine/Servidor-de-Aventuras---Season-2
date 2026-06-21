// 1. YOUR RITUAL RECIPE (Kept exactly as you had it)
ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('minecraft:minecart')
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"cataclysm_spellbooks:gear_shift",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"cataclysm_spellbooks:laserbolt",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('2x minecraft:dispenser')
        .input('minecraft:redstone_block')
        .input('minecraft:piston')
        .recipeTime(100)
        .id('technomancy_scroll_ritual_0');
});

// Unique UUIDs for each separate attribute modifier
const GEAR_SHIFT_UUID = "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d";
const LASERBOLT_UUID  = "9f8e7d6c-5b4a-3f2e-1d0c-9b8a7f6e5d4c";

// 2. RITUAL COMPLETION EVENT
SummoningRituals.complete(event => {
    if (!event.player) return;
    if (event.recipe.getId().toString() == 'technomancy_scroll_ritual_0') {
        let player = event.player;
        
        // Save persistent tags for both spells in the player's core NBT data
        player.persistentData.putBoolean('gear_shift_unlocked', true);
        player.persistentData.putBoolean('laserbolt_unlocked', true);
        
        // Apply the attributes immediately
        applyTechnomancyAttributes(player);
        
        player.tell("§6Technomancy secrets flow through your mind permanently...");
    }
});

// 3. THE SAFETY CORE: Re-applies the modifiers across deaths, logins, and world shifts
function applyTechnomancyAttributes(player) {
    let attributes = player.minecraftEntity.getAttributes();

    // ---- HANDLE GEAR SHIFT ----
    if (player.persistentData.getBoolean('gear_shift_unlocked')) {
        let gearShiftAttr = attributes.getInstance('ironsattributes:cataclysm_spellbooks_gear_shift_unlocked');
        if (gearShiftAttr != null) {
            if (gearShiftAttr.getModifier(java.util.UUID.fromString(GEAR_SHIFT_UUID)) == null) {
                let modifier = new global.nxt.minecraft.world.entity.ai.attributes.AttributeModifier(
                    java.util.UUID.fromString(GEAR_SHIFT_UUID),
                    "Gear Shift Ritual Unlock",
                    1.0, // Equivalent to base set 1
                    0    // Operation 0 = ADDITION
                );
                gearShiftAttr.addPermanentModifier(modifier);
            }
        }
    }

    // ---- HANDLE LASERBOLT ----
    if (player.persistentData.getBoolean('laserbolt_unlocked')) {
        let laserboltAttr = attributes.getInstance('ironsattributes:cataclysm_spellbooks_laserbolt_unlocked');
        if (laserboltAttr != null) {
            if (laserboltAttr.getModifier(java.util.UUID.fromString(LASERBOLT_UUID)) == null) {
                let modifier = new global.nxt.minecraft.world.entity.ai.attributes.AttributeModifier(
                    java.util.UUID.fromString(LASERBOLT_UUID),
                    "Laserbolt Ritual Unlock",
                    1.0, // Equivalent to base set 1
                    0    // Operation 0 = ADDITION
                );
                laserboltAttr.addPermanentModifier(modifier);
            }
        }
    }
}

// 4. PERSISTENCE HOOKS
PlayerEvents.loggedIn(event => {
    applyTechnomancyAttributes(event.player);
});

PlayerEvents.respawned(event => {
    applyTechnomancyAttributes(event.player);
});