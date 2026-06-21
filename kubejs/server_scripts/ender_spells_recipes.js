// ==========================================
// 1. ALL ENDER & ARCANE RITUAL RECIPES
// ==========================================
ServerEvents.recipes(event => {
    // Ender Ritual 0: Dragon's Breath & Void Bulwark
    event.recipes.summoningrituals
        .altar(Item.of('minecraft:flint_and_steel', '{Damage:0}').strongNBT())
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:dragon_breath",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"cataclysm_spellbooks:void_bulwark",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('minecraft:chorus_fruit')
        .recipeTime(100)
        .id('ender_scroll_ritual_0');

    // Ender Ritual 1: Long Stride, Blink, Assist Wings, & Shadow Slash
    event.recipes.summoningrituals
        .altar(Item.of('minecraft:flint_and_steel', '{Damage:0}').strongNBT())
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"apprenticecodex:long_stride",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"traveloptics:blink",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"apprenticecodex:assist_wings",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:shadow_slash",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('16x minecraft:sugar')
        .input('4x minecraft:feather')
        .input('minecraft:ender_pearl')
        .input('minecraft:chorus_fruit')
        .recipeTime(100)
        .id('ender_scroll_ritual_1');

    // Ender Ritual 2: Remote Eye, Auto Magnet, Astral Sense, & Summon Ender Chest
    event.recipes.summoningrituals
        .altar(Item.of('minecraft:flint_and_steel', '{Damage:0}').strongNBT())
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"apprenticecodex:remote_eye",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"apprenticecodex:auto_magnet",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"traveloptics:astral_sense",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:summon_ender_chest",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('minecraft:crying_obsidian')
        .input('minecraft:popped_chorus_fruit')
        .input('cataclysm:chorus_stem')
        .input('minecraft:ender_pearl')
        .input('minecraft:iron_block')
        .recipeTime(100)
        .id('ender_scroll_ritual_2');

    // Arcane Ritual 0: Magic Missile & Magic Arrow
    event.recipes.summoningrituals
        .altar(Item.of('minecraft:flint_and_steel', '{Damage:0}').strongNBT())
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:magic_missile",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:magic_arrow",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('4x archeryexp:diamond_arrow')
        .input('minecraft:crying_obsidian')
        .recipeTime(100)
        .id('arcane_scroll_ritual_0');
});

// ==========================================
// 2. UNIQUE MODIFIER UUIDS (One per spell)
// ==========================================
const DRAGON_BREATH_UUID     = "8e2d4c5a-1b3f-4a5c-9d8e-7f6a5b4c3d2e";
const VOID_BULWARK_UUID      = "9f3e5d6b-2c4f-5b6d-0e9f-8a7b6c5d4e3f";

const LONG_STRIDE_UUID       = "0a4f6e7c-3d5a-6c7e-1f0a-9b8c7d6e5f4a";
const BLINK_UUID             = "1b5f7f8d-4e6b-7d8f-2f1b-0c9d8e7f6a5b";
const ASSIST_WINGS_UUID      = "2c6a8a9e-5f7c-8e9f-3f2c-1d0e9f8a7b6c";
const SHADOW_SLASH_UUID      = "3d7b9b0f-6a8d-9f0a-4f3d-2e1f0a9b8c7d";

const REMOTE_EYE_UUID        = "4e8c0c1a-7b9e-0a1b-5f4e-3f2f1a0b9c8d";
const AUTO_MAGNET_UUID       = "5f9d1d2b-8ca0-1b2c-6f5f-4f3f2a1b0c9e";
const ASTRAL_SENSE_UUID      = "6a0e2e3c-9db1-2c3d-7f6a-5f4f3b2a1b0f";
const SUMMON_ENDER_CHEST_UUID= "7b1f3f4d-0ec2-3d4e-8f7b-6f5f4b3a2b1f";

const MAGIC_MISSILE_UUID     = "8c2f4f5e-1fd3-4e5f-9f8c-7f6f5b4a3b2f";
const MAGIC_ARROW_UUID       = "9d3f5f6f-2fd4-5e6f-0f9d-8f7f6b5a4b3f";

// ==========================================
// 3. RITUAL COMPLETION HANDLER
// ==========================================
SummoningRituals.complete(event => {
    if (!event.player) return;
    let player = event.player;
    let ritualId = event.recipe.getId().toString();

    // Handle Ender Ritual 0
    if (ritualId == 'ender_scroll_ritual_0') {
        player.persistentData.putBoolean('dragon_breath_unlocked', true);
        player.persistentData.putBoolean('void_bulwark_unlocked', true);
        applyEnderArcaneAttributes(player);
        player.tell("§5The cosmic essence of Dragon's Breath and Void Bulwark fuses into you...");
    }
    
    // Handle Ender Ritual 1
    if (ritualId == 'ender_scroll_ritual_1') {
        player.persistentData.putBoolean('long_stride_unlocked', true);
        player.persistentData.putBoolean('blink_unlocked', true);
        player.persistentData.putBoolean('assist_wings_unlocked', true);
        player.persistentData.putBoolean('shadow_slash_unlocked', true);
        applyEnderArcaneAttributes(player);
        player.tell("§5Spatial dimensions shift — Long Stride, Blink, Assist Wings, and Shadow Slash are permanently yours...");
    }

    // Handle Ender Ritual 2
    if (ritualId == 'ender_scroll_ritual_2') {
        player.persistentData.putBoolean('remote_eye_unlocked', true);
        player.persistentData.putBoolean('auto_magnet_unlocked', true);
        player.persistentData.putBoolean('astral_sense_unlocked', true);
        player.persistentData.putBoolean('summon_ender_chest_unlocked', true);
        applyEnderArcaneAttributes(player);
        player.tell("§5Void secrets lay bare: Remote Eye, Auto Magnet, Astral Sense, and Summon Ender Chest are now bound to your soul...");
    }

    // Handle Arcane Ritual 0
    if (ritualId == 'arcane_scroll_ritual_0') {
        player.persistentData.putBoolean('magic_missile_unlocked', true);
        player.persistentData.putBoolean('magic_arrow_unlocked', true);
        applyEnderArcaneAttributes(player);
        player.tell("§dPure Arcane energy solidifies. Magic Missile and Magic Arrow are permanently learned...");
    }
});

// ==========================================
// 4. THE CORE ATTRIBUTE REFRESHER
// ==========================================
function applyEnderArcaneAttributes(player) {
    let attributes = player.minecraftEntity.getAttributes();

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

    // Ender Ritual 0
    grantAttribute('dragon_breath_unlocked', 'ironsattributes:irons_spellbooks_dragon_breath_unlocked', DRAGON_BREATH_UUID, "Dragon's Breath Unlock");
    grantAttribute('void_bulwark_unlocked', 'ironsattributes:cataclysm_spellbooks_void_bulwark_unlocked', VOID_BULWARK_UUID, "Void Bulwark Unlock");

    // Ender Ritual 1
    grantAttribute('long_stride_unlocked', 'ironsattributes:apprenticecodex_long_stride_unlocked', LONG_STRIDE_UUID, "Long Stride Unlock");
    grantAttribute('blink_unlocked', 'ironsattributes:traveloptics_blink_unlocked', BLINK_UUID, "Blink Unlock");
    grantAttribute('assist_wings_unlocked', 'ironsattributes:apprenticecodex_assist_wings_unlocked', ASSIST_WINGS_UUID, "Assist Wings Unlock");
    grantAttribute('shadow_slash_unlocked', 'ironsattributes:irons_spellbooks_shadow_slash_unlocked', SHADOW_SLASH_UUID, "Shadow Slash Unlock");

    // Ender Ritual 2
    grantAttribute('remote_eye_unlocked', 'ironsattributes:apprenticecodex_remote_eye_unlocked', REMOTE_EYE_UUID, "Remote Eye Unlock");
    grantAttribute('auto_magnet_unlocked', 'ironsattributes:apprenticecodex_auto_magnet_unlocked', AUTO_MAGNET_UUID, "Auto Magnet Unlock");
    grantAttribute('astral_sense_unlocked', 'ironsattributes:traveloptics_astral_sense_unlocked', ASTRAL_SENSE_UUID, "Astral Sense Unlock");
    grantAttribute('summon_ender_chest_unlocked', 'ironsattributes:irons_spellbooks_summon_ender_chest_unlocked', SUMMON_ENDER_CHEST_UUID, "Summon Ender Chest Unlock");

    // Arcane Ritual 0
    grantAttribute('magic_missile_unlocked', 'ironsattributes:irons_spellbooks_magic_missile_unlocked', MAGIC_MISSILE_UUID, "Magic Missile Unlock");
    grantAttribute('magic_arrow_unlocked', 'ironsattributes:irons_spellbooks_magic_arrow_unlocked', MAGIC_ARROW_UUID, "Magic Arrow Unlock");
}

// ==========================================
// 5. GLOBAL EVENT HOOKS
// ==========================================
PlayerEvents.loggedIn(event => {
    applyEnderArcaneAttributes(event.player);
});

PlayerEvents.respawned(event => {
    applyEnderArcaneAttributes(event.player);
});