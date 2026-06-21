// ==========================================
// 1. ALL RITUAL RECIPES
// ==========================================
ServerEvents.recipes(event => {
    // Ritual 0: Wither Skull
    event.recipes.summoningrituals
        .altar('minecraft:skeleton_skull')
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:wither_skull",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('minecraft:ink_sac')
        .recipeTime(100)
        .id('blood_scroll_ritual_0');

    // Ritual 1: Eek
    event.recipes.summoningrituals
        .altar('minecraft:bell')
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"traveloptics:eek",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('minecraft:carved_pumpkin')
        .recipeTime(100)
        .id('blood_scroll_ritual_1');
});

// ==========================================
// 2. UNIQUE MODIFIER UUIDS
// ==========================================
const WITHER_SKULL_UUID = "b2c3d4e5-f6a7-0b1c-2d3e-4f5a6b7c8d9e";
const EEK_UUID          = "c3d4e5f6-a7b8-1c2d-3e4f-5a6b7c8d9e0f";

// ==========================================
// 3. RITUAL COMPLETION HANDLER
// ==========================================
SummoningRituals.complete(event => {
    if (!event.player) return;
    let player = event.player;
    let ritualId = event.recipe.getId().toString();

    // Handle Wither Skull Ritual
    if (ritualId == 'blood_scroll_ritual_0') {
        player.persistentData.putBoolean('wither_skull_unlocked', true);
        applyBloodRitualAttributes(player);
        player.tell("§4A decaying presence anchors to your soul permanently...");
    }
    
    // Handle Eek Ritual
    if (ritualId == 'blood_scroll_ritual_1') {
        player.persistentData.putBoolean('eek_unlocked', true);
        applyBloodRitualAttributes(player);
        player.tell("§dAn eerie echo binds to you permanently...");
    }
});

// ==========================================
// 4. THE CORE ATTRIBUTE REFRESHER
// ==========================================
function applyBloodRitualAttributes(player) {
    let attributes = player.minecraftEntity.getAttributes();

    // ---- WITHER SKULL ----
    if (player.persistentData.getBoolean('wither_skull_unlocked')) {
        let witherAttr = attributes.getInstance('ironsattributes:irons_spellbooks_wither_skull_unlocked');
        if (witherAttr != null) {
            if (witherAttr.getModifier(java.util.UUID.fromString(WITHER_SKULL_UUID)) == null) {
                let modifier = new global.nxt.minecraft.world.entity.ai.attributes.AttributeModifier(
                    java.util.UUID.fromString(WITHER_SKULL_UUID),
                    "Wither Skull Ritual Unlock",
                    1.0, 
                    0    
                );
                witherAttr.addPermanentModifier(modifier);
            }
        }
    }

    // ---- EEK ----
    if (player.persistentData.getBoolean('eek_unlocked')) {
        let eekAttr = attributes.getInstance('ironsattributes:traveloptics_eek_unlocked');
        if (eekAttr != null) {
            if (eekAttr.getModifier(java.util.UUID.fromString(EEK_UUID)) == null) {
                let modifier = new global.nxt.minecraft.world.entity.ai.attributes.AttributeModifier(
                    java.util.UUID.fromString(EEK_UUID),
                    "Eek Ritual Unlock",
                    1.0, 
                    0    
                );
                eekAttr.addPermanentModifier(modifier);
            }
        }
    }
}

// ==========================================
// 5. GLOBAL EVENT HOOKS
// ==========================================
PlayerEvents.loggedIn(event => {
    applyBloodRitualAttributes(event.player);
});

PlayerEvents.respawned(event => {
    applyBloodRitualAttributes(event.player);
});