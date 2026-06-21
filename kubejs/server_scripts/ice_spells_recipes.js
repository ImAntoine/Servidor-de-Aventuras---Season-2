// ==========================================
// 1. ALL ICE RITUAL RECIPES
// ==========================================
ServerEvents.recipes(event => {
    // Ritual 0: Frost Rune & Ice Block
    event.recipes.summoningrituals
        .altar('minecraft:ice')
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"apprenticecodex:frost_rune",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:ice_block",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('4x minecraft:packed_ice')
        .input('minecraft:stone')
        .recipeTime(100)
        .id('ice_scroll_ritual_0');

    // Ritual 1: Despair & Cone of Cold
    event.recipes.summoningrituals
        .altar(Item.of('minecraft:iron_axe', '{Damage:0}').strongNBT())
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"traveloptics:despair",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:cone_of_cold",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('3x minecraft:snow_block')
        .input('2x minecraft:snowball')
        .recipeTime(100)
        .id('ice_scroll_ritual_1');

    // Ritual 2: Ice Spikes, Ray of Frost, & Icicle
    event.recipes.summoningrituals
        .altar('minecraft:powder_snow_bucket')
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:ice_spikes",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:ray_of_frost",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:icicle",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('5x minecraft:packed_ice')
        .input('16x minecraft:snow_block')
        .input('archeryexp:diamond_arrow')
        .recipeTime(100)
        .id('ice_scroll_ritual_2');
});

// ==========================================
// 2. UNIQUE MODIFIER UUIDS (One for each spell)
// ==========================================
const FROST_RUNE_UUID   = "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d";
const ICE_BLOCK_UUID    = "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e";
const DESPAIR_UUID      = "3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f";
const CONE_OF_COLD_UUID = "4d5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a";
const ICE_SPIKES_UUID   = "5e6f7a8b-9c0d-1e2f-3a4b-5c6d7e8f9a0b";
const RAY_OF_FROST_UUID = "6f7a8b9c-0d1e-2f3a-4b5c-6d7e8f9a0b1c";
const ICICLE_UUID       = "7a8b9c0d-1e2f-3a4b-5c6d-7e8f9a0b1c2d";

// ==========================================
// 3. RITUAL COMPLETION HANDLER
// ==========================================
SummoningRituals.complete(event => {
    if (!event.player) return;
    let player = event.player;
    let ritualId = event.recipe.getId().toString();

    // Handle Ritual 0
    if (ritualId == 'ice_scroll_ritual_0') {
        player.persistentData.putBoolean('frost_rune_unlocked', true);
        player.persistentData.putBoolean('ice_block_unlocked', true);
        applyIceRitualAttributes(player);
        player.tell("§bFrost Rune and Ice Block have etched permanently into your soul...");
    }
    
    // Handle Ritual 1
    if (ritualId == 'ice_scroll_ritual_1') {
        player.persistentData.putBoolean('despair_unlocked', true);
        player.persistentData.putBoolean('cone_of_cold_unlocked', true);
        applyIceRitualAttributes(player);
        player.tell("§bThe freezing chill of Despair and Cone of Cold settles into you permanently...");
    }

    // Handle Ritual 2
    if (ritualId == 'ice_scroll_ritual_2') {
        player.persistentData.putBoolean('ice_spikes_unlocked', true);
        player.persistentData.putBoolean('ray_of_frost_unlocked', true);
        player.persistentData.putBoolean('icicle_unlocked', true);
        applyIceRitualAttributes(player);
        player.tell("§bThe glacial force of Ice Spikes, Ray of Frost, and Icicle binds to you permanently...");
    }
});

// ==========================================
// 4. THE CORE ATTRIBUTE REFRESHER
// ==========================================
function applyIceRitualAttributes(player) {
    let attributes = player.minecraftEntity.getAttributes();

    // Standard helper wrapper to safely process all modifiers without duplication
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

    // Process all 7 ice attribute assignments
    grantAttribute('frost_rune_unlocked', 'ironsattributes:apprenticecodex_frost_rune_unlocked', FROST_RUNE_UUID, "Frost Rune Unlock");
    grantAttribute('ice_block_unlocked', 'ironsattributes:irons_spellbooks_ice_block_unlocked', ICE_BLOCK_UUID, "Ice Block Unlock");
    grantAttribute('despair_unlocked', 'ironsattributes:traveloptics_despair_unlocked', DESPAIR_UUID, "Despair Unlock");
    grantAttribute('cone_of_cold_unlocked', 'ironsattributes:irons_spellbooks_cone_of_cold_unlocked', CONE_OF_COLD_UUID, "Cone of Cold Unlock");
    grantAttribute('ice_spikes_unlocked', 'ironsattributes:irons_spellbooks_ice_spikes_unlocked', ICE_SPIKES_UUID, "Ice Spikes Unlock");
    grantAttribute('ray_of_frost_unlocked', 'ironsattributes:irons_spellbooks_ray_of_frost_unlocked', RAY_OF_FROST_UUID, "Ray of Frost Unlock");
    grantAttribute('icicle_unlocked', 'ironsattributes:irons_spellbooks_icicle_unlocked', ICICLE_UUID, "Icicle Unlock");
}

// ==========================================
// 5. GLOBAL EVENT HOOKS
// ==========================================
PlayerEvents.loggedIn(event => {
    applyIceRitualAttributes(event.player);
});

PlayerEvents.respawned(event => {
    applyIceRitualAttributes(event.player);
});