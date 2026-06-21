// ==========================================
// 1. ALL AQUA RITUAL RECIPES
// ==========================================
ServerEvents.recipes(event => {
    // Ritual 4: Overflow & Rainfall
    event.recipes.summoningrituals
        .altar('minecraft:water_bucket')
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"traveloptics:overflow",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"traveloptics:rainfall",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('2x minecraft:honey_bottle')
        .input(Item.of('minecraft:potion', 4, '{IE_BackupPotion:{Potion:"minecraft:water"},Potion:"minecraft:water"}').strongNBT())
        .recipeTime(100)
        .id('aqua_scroll_ritual_4');

    // Ritual 5: Bubble Spray, Hydroshot, & Aqua Missiles
    event.recipes.summoningrituals
        .altar('minecraft:water_bucket')
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"traveloptics:bubble_spray",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"traveloptics:hydroshot",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"traveloptics:aqua_missiles",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('4x jeg:water_bomb')
        .input(Item.of('minecraft:potion', 2, '{IE_BackupPotion:{Potion:"minecraft:water"},Potion:"minecraft:water"}').strongNBT())
        .input('archeryexp:diamond_arrow')
        .recipeTime(100)
        .id('aqua_scroll_ritual_5');

    // Ritual 7: Flood Slash & Tidal Grasp
    event.recipes.summoningrituals
        .altar('jeg:water_bomb')
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"traveloptics:flood_slash",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"traveloptics:tidal_grasp",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input(Item.of('minecraft:fishing_rod', '{Damage:0}').strongNBT())
        .input(Item.of('minecraft:potion', 4, '{IE_BackupPotion:{Potion:"minecraft:water"},Potion:"minecraft:water"}').strongNBT())
        .input(Item.of('minecraft:diamond_boots', '{Damage:0}').enchant('enchancement:buoy', 2).strongNBT())
        .recipeTime(100)
        .id('aqua_scroll_ritual_7');
});

// ==========================================
// 2. UNIQUE MODIFIER UUIDS (One for each spell)
// ==========================================
const OVERFLOW_UUID      = "e1a2b3c4-d5e6-4a5b-8c9d-0e1f2a3b4c5d";
const RAINFALL_UUID      = "f2b3c4d5-e6a7-4b6c-9d0e-1f2a3b4c5d6e";
const BUBBLE_SPRAY_UUID  = "a3c4d5e6-f7b8-4c7d-0e1f-2a3b4c5d6e7f";
const HYDROSHOT_UUID     = "b4d5e6f7-a8c9-4d8e-1f2a-3b4c5d6e7f8a";
const AQUA_MISSILES_UUID = "c5e6f7a8-b9d0-4e9f-2a3b-4c5d6e7f8a9b";
const FLOOD_SLASH_UUID   = "d6f7a8b9-c0d1-4f0a-3b4c-5d6e7f8a9b0c";
const TIDAL_GRASP_UUID   = "e7a8b9c0-d1e2-4a1b-4c5d-6e7f8a9b0c1d";

// ==========================================
// 3. RITUAL COMPLETION HANDLER
// ==========================================
SummoningRituals.complete(event => {
    if (!event.player) return;
    let player = event.player;
    let ritualId = event.recipe.getId().toString();

    // Handle Ritual 4
    if (ritualId == 'aqua_scroll_ritual_4') {
        player.persistentData.putBoolean('overflow_unlocked', true);
        player.persistentData.putBoolean('rainfall_unlocked', true);
        applyAquaRitualAttributes(player);
        player.tell("§3The currents of Overflow and Rainfall bind to you permanently...");
    }
    
    // Handle Ritual 5
    if (ritualId == 'aqua_scroll_ritual_5') {
        player.persistentData.putBoolean('bubble_spray_unlocked', true);
        player.persistentData.putBoolean('hydroshot_unlocked', true);
        player.persistentData.putBoolean('aqua_missiles_unlocked', true);
        applyAquaRitualAttributes(player);
        player.tell("§3The depths of Bubble Spray, Hydroshot, and Aqua Missiles bind to you permanently...");
    }

    // Handle Ritual 7
    if (ritualId == 'aqua_scroll_ritual_7') {
        player.persistentData.putBoolean('flood_slash_unlocked', true);
        player.persistentData.putBoolean('tidal_grasp_unlocked', true);
        applyAquaRitualAttributes(player);
        player.tell("§3The crushing weight of Flood Slash and Tidal Grasp bind to you permanently...");
    }
});

// ==========================================
// 4. THE CORE ATTRIBUTE REFRESHER
// ==========================================
function applyAquaRitualAttributes(player) {
    let attributes = player.minecraftEntity.getAttributes();

    // Helper function to safely apply attributes without duplicating code lines
    function grantAttribute(tag, attributeName, uuidString, name) {
        if (player.persistentData.getBoolean(tag)) {
            let attrInstance = attributes.getInstance(attributeName);
            if (attrInstance != null) {
                if (attrInstance.getModifier(java.util.UUID.fromString(uuidString)) == null) {
                    let modifier = new global.nxt.minecraft.world.entity.ai.attributes.AttributeModifier(
                        java.util.UUID.fromString(uuidString),
                        name,
                        1.0, 
                        0    
                    );
                    attrInstance.addPermanentModifier(modifier);
                }
            }
        }
    }

    // Run assignments for all 7 traits
    grantAttribute('overflow_unlocked', 'ironsattributes:traveloptics_overflow_unlocked', OVERFLOW_UUID, "Overflow Unlock");
    grantAttribute('rainfall_unlocked', 'ironsattributes:traveloptics_rainfall_unlocked', RAINFALL_UUID, "Rainfall Unlock");
    grantAttribute('bubble_spray_unlocked', 'ironsattributes:traveloptics_bubble_spray_unlocked', BUBBLE_SPRAY_UUID, "Bubble Spray Unlock");
    grantAttribute('hydroshot_unlocked', 'ironsattributes:traveloptics_hydroshot_unlocked', HYDROSHOT_UUID, "Hydroshot Unlock");
    grantAttribute('aqua_missiles_unlocked', 'ironsattributes:traveloptics_aqua_missiles_unlocked', AQUA_MISSILES_UUID, "Aqua Missiles Unlock");
    grantAttribute('flood_slash_unlocked', 'ironsattributes:traveloptics_flood_slash_unlocked', FLOOD_SLASH_UUID, "Flood Slash Unlock");
    grantAttribute('tidal_grasp_unlocked', 'ironsattributes:traveloptics_tidal_grasp_unlocked', TIDAL_GRASP_UUID, "Tidal Grasp Unlock");
}

// ==========================================
// 5. GLOBAL EVENT HOOKS
// ==========================================
PlayerEvents.loggedIn(event => {
    applyAquaRitualAttributes(event.player);
});

PlayerEvents.respawned(event => {
    applyAquaRitualAttributes(event.player);
});