// ==========================================
// 1. ALL HOLY RITUAL RECIPES
// ==========================================
ServerEvents.recipes(event => {
    // Ritual 0: Sense Evil & Mage Light
    event.recipes.summoningrituals
        .altar(Item.of('minecraft:diamond_helmet', '{Damage:0}').strongNBT())
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"apprenticecodex:sense_evil",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"apprenticecodex:mage_light",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('64x minecraft:torch')
        .input('4x minecraft:golden_carrot')
        .recipeTime(100)
        .id('holy_scroll_ritual_0');

    // Ritual 1: Wisp, Sunbeam, & Guiding Bolt
    event.recipes.summoningrituals
        .altar('minecraft:daylight_detector')
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:wisp",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:sunbeam",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:guiding_bolt",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('2x minecraft:lightning_rod')
        .input('minecraft:sunflower')
        .input('minecraft:glow_berries')
        .recipeTime(100)
        .id('holy_scroll_ritual_1');

    // Ritual 2: Divine Smite, Cleanse, & Mystic Shield
    event.recipes.summoningrituals
        .altar('minecraft:milk_bucket')
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:divine_smite",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:cleanse",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"apprenticecodex:mystic_shield",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('4x minecraft:emerald')
        .input(Item.of('minecraft:golden_sword', '{Damage:0}').strongNBT())
        .input(Item.of('minecraft:shield', '{Damage:0}').strongNBT())
        .recipeTime(100)
        .id('holy_scroll_ritual_2');
});

// ==========================================
// 2. UNIQUE MODIFIER UUIDS (One for each spell)
// ==========================================
const SENSE_EVIL_UUID    = "a1e9b2c3-d4f5-46a7-b8c9-0d1e2f3a4b5c";
const MAGE_LIGHT_UUID    = "b2f0c3d4-e5f6-47b8-c9d0-1e2f3a4b5c6d";
const WISP_UUID          = "c3a1d4e5-f6a7-48b9-d0e1-2f3a4b5c6d7e";
const SUNBEAM_UUID       = "d4b2e5f6-a7b8-49c9-e1f2-3a4b5c6d7e8f";
const GUIDING_BOLT_UUID  = "e5c3f6a7-b8c9-40da-f2a3-4b5c6d7e8f9a";
const DIVINE_SMITE_UUID  = "f6d4a7b8-c8d9-41eb-a3b4-c5d6e7f8a9b0";
const CLEANSE_UUID       = "a7e5b8c9-d9e0-42ec-b4c5-d6e7f8a9b0c1";
const MYSTIC_SHIELD_UUID = "b8f6c9d0-e0f1-43ed-c5d6-e7f8a9b0c1d2";

// ==========================================
// 3. RITUAL COMPLETION HANDLER
// ==========================================
SummoningRituals.complete(event => {
    if (!event.player) return;
    let player = event.player;
    let ritualId = event.recipe.getId().toString();

    // Handle Ritual 0
    if (ritualId == 'holy_scroll_ritual_0') {
        player.persistentData.putBoolean('sense_evil_unlocked', true);
        player.persistentData.putBoolean('mage_light_unlocked', true);
        applyHolyRitualAttributes(player);
        player.tell("§eA radiant vision of Sense Evil and Mage Light awakens within you permanently...");
    }
    
    // Handle Ritual 1
    if (ritualId == 'holy_scroll_ritual_1') {
        player.persistentData.putBoolean('wisp_unlocked', true);
        player.persistentData.putBoolean('sunbeam_unlocked', true);
        player.persistentData.putBoolean('guiding_bolt_unlocked', true);
        applyHolyRitualAttributes(player);
        player.tell("§eSacred beams of Wisp, Sunbeam, and Guiding Bolt channel into your soul permanently...");
    }

    // Handle Ritual 2
    if (ritualId == 'holy_scroll_ritual_2') {
        player.persistentData.putBoolean('divine_smite_unlocked', true);
        player.persistentData.putBoolean('cleanse_unlocked', true);
        player.persistentData.putBoolean('mystic_shield_unlocked', true);
        applyHolyRitualAttributes(player);
        player.tell("§eThe pure protection of Divine Smite, Cleanse, and Mystic Shield blesses you permanently...");
    }
});

// ==========================================
// 4. THE CORE ATTRIBUTE REFRESHER
// ==========================================
function applyHolyRitualAttributes(player) {
    let attributes = player.minecraftEntity.getAttributes();

    // Clean wrapper helper to systematically map out modifiers
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

    // Map all 8 dynamic modifiers 
    grantAttribute('sense_evil_unlocked', 'ironsattributes:apprenticecodex_sense_evil_unlocked', SENSE_EVIL_UUID, "Sense Evil Unlock");
    grantAttribute('mage_light_unlocked', 'ironsattributes:apprenticecodex_mage_light_unlocked', MAGE_LIGHT_UUID, "Mage Light Unlock");
    grantAttribute('wisp_unlocked', 'ironsattributes:irons_spellbooks_wisp_unlocked', WISP_UUID, "Wisp Unlock");
    grantAttribute('sunbeam_unlocked', 'ironsattributes:irons_spellbooks_sunbeam_unlocked', SUNBEAM_UUID, "Sunbeam Unlock");
    grantAttribute('guiding_bolt_unlocked', 'ironsattributes:irons_spellbooks_guiding_bolt_unlocked', GUIDING_BOLT_UUID, "Guiding Bolt Unlock");
    grantAttribute('divine_smite_unlocked', 'ironsattributes:irons_spellbooks_divine_smite_unlocked', DIVINE_SMITE_UUID, "Divine Smite Unlock");
    grantAttribute('cleanse_unlocked', 'ironsattributes:irons_spellbooks_cleanse_unlocked', CLEANSE_UUID, "Cleanse Unlock");
    grantAttribute('mystic_shield_unlocked', 'ironsattributes:apprenticecodex_mystic_shield_unlocked', MYSTIC_SHIELD_UUID, "Mystic Shield Unlock");
}

// ==========================================
// 5. GLOBAL EVENT HOOKS
// ==========================================
PlayerEvents.loggedIn(event => {
    applyHolyRitualAttributes(event.player);
});

PlayerEvents.respawned(event => {
    applyHolyRitualAttributes(event.player);
});