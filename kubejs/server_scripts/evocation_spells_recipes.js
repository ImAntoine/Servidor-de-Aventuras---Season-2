// ==========================================
// 1. ALL EVOCATION RITUAL RECIPES
// ==========================================
ServerEvents.recipes(event => {
    // Evocation Ritual 0: Nucreeper Strike, Chain Creeper, Shotgun Creeper, & Lob Creeper
    event.recipes.summoningrituals
        .altar('royalvariations:royal_bomb')
        .itemOutput(Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"spells_gone_wrong:nucreeper_strike",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT())
        .itemOutput(Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:chain_creeper",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT())
        .itemOutput(Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"spells_gone_wrong:shotgun_creeper",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT())
        .itemOutput(Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:lob_creeper",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT())
        .input('4x minecraft:gunpowder')
        .input('4x minecraft:tnt')
        .recipeTime(100)
        .id('evocation_scroll_ritual_0');

    // Evocation Ritual 1: Gust, Feather Rush, & Ashen Breath
    event.recipes.summoningrituals
        .altar(Item.of('minecraft:flint_and_steel', '{Damage:0}').strongNBT())
        .itemOutput(Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:gust",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT())
        .itemOutput(Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"apprenticecodex:feather_rush",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT())
        .itemOutput(Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"traveloptics:ashen_breath",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT())
        .input('minecraft:dispenser')
        .input('2x minecraft:feather')
        .input('4x minecraft:gravel')
        .input('2x minecraft:gunpowder')
        .recipeTime(100)
        .id('evocation_scroll_ritual_1');

    // Evocation Ritual 2: Companion Trunk, Summon Horse, Search Beacon, & Wololo
    event.recipes.summoningrituals
        .altar('minecraft:leather_horse_armor')
        .itemOutput(Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"apprenticecodex:companion_trunk",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT())
        .itemOutput(Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:summon_horse",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT())
        .itemOutput(Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"apprenticecodex:search_beacon",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT())
        .itemOutput(Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:wololo",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT())
        .input('minecraft:compass')
        .input('minecraft:glow_ink_sac')
        .input('minecraft:purple_dye')
        .input('minecraft:trapped_chest')
        .recipeTime(100)
        .id('evocation_scroll_ritual_2');

    // Evocation Ritual 3: Shield, Spectral Hammer, & Slow
    event.recipes.summoningrituals
        .altar(Item.of('minecraft:diamond_pickaxe', '{Damage:0}').strongNBT())
        .itemOutput(Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:shield",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT())
        .itemOutput(Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:spectral_hammer",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT())
        .itemOutput(Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:slow",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT())
        .input('minecraft:fermented_spider_eye')
        .input(Item.of('minecraft:iron_chestplate', '{Damage:0}').strongNBT())
        .input(Item.of('minecraft:shield', '{Damage:0}').strongNBT())
        .recipeTime(100)
        .id('evocation_scroll_ritual_3');

    // Evocation Ritual 4: Firecracker & Arrow Volley
    event.recipes.summoningrituals
        .altar('minecraft:firework_rocket')
        .itemOutput(Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:firecracker",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT())
        .itemOutput(Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:arrow_volley",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT())
        .input('4x archeryexp:iron_arrow')
        .recipeTime(100)
        .id('evocation_scroll_ritual_4');

    // Evocation Ritual 5: Fang Strike & Fang Ward
    event.recipes.summoningrituals
        .altar('species:werefang')
        .itemOutput(Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:fang_strike",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT())
        .itemOutput(Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:fang_ward",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT())
        .input('4x minecraft:emerald')
        .recipeTime(100)
        .id('evocation_scroll_ritual_5');
});

// ==========================================
// 2. UNIQUE MODIFIER UUIDS (One per spell)
// ==========================================
const NUCREEPER_STRIKE_UUID  = "e0a1b2c3-d4e5-46a7-b8c9-0e1f2a3b4c5d";
const CHAIN_CREEPER_UUID     = "e1b2c3d4-e5f6-47a8-b9c0-1e2f3a4b5c6d";
const SHOTGUN_CREEPER_UUID   = "e2c3d4e5-f6a7-48b8-c9d0-2e3f4a5b6c7d";
const LOB_CREEPER_UUID       = "e3d4e5f6-a7b8-49c9-d0e1-3e4f5a6b7c8d";

const GUST_UUID             = "e4e5f6a7-b8c9-40d0-e1f2-4e5f6a7b8c9d";
const FEATHER_RUSH_UUID      = "e5f6a7b8-c9d0-41e1-f2a3-5e6f7a8b9c0e";
const ASHEN_BREATH_UUID      = "e6a7b8c9-d0e1-42f2-a3b4-6e7f8a9b0c1f";

const COMPANION_TRUNK_UUID  = "e7b8c9d0-e1f2-43a3-b4c5-7e8f9a0b1c2d";
const SUMMON_HORSE_UUID     = "e8c9d0e1-f2a3-44b4-c5d6-8f9a0b1c2d3e";
const SEARCH_BEACON_UUID    = "e9d0e1f2-a3b4-45c5-d6e7-9a0b1c2d3e4f";
const WOLOLO_UUID           = "e0e1f2a3-b4c5-46d6-e7f8-0b1c2d3e4f5a";

const SHIELD_UUID           = "e1f2a3b4-c5d6-47e7-f8a9-1c2d3e4f5a6b";
const SPECTRAL_HAMMER_UUID  = "e2a3b4c5-d6e7-48f8-a9b0-2d3e4f5a6b7c";
const SLOW_UUID             = "e3b4c5d6-e7f8-49a9-b0c1-3d4e5f6a7b8c";

const FIRECRACKER_UUID       = "e4c5d6e7-f8a9-40b0-c1d2-4d4e5f6a7b8c";
const ARROW_VOLLEY_UUID      = "e5d6e7f8-a9b0-41c1-d2e3-5d4e5f6a7b8c";

const FANG_STRIKE_UUID       = "e6e7f8a9-b0c1-42d2-e3f4-6d4e5f6a7b8c";
const FANG_WARD_UUID         = "e7f8a9b0-c1d2-43e3-f4a5-7d4e5f6a7b8c";

// ==========================================
// 3. RITUAL COMPLETION HANDLER
// ==========================================
SummoningRituals.complete(event => {
    if (!event.player) return;
    let player = event.player;
    let ritualId = event.recipe.getId().toString();

    // Handle Ritual 0
    if (ritualId == 'evocation_scroll_ritual_0') {
        player.persistentData.putBoolean('nucreeper_strike_unlocked', true);
        player.persistentData.putBoolean('chain_creeper_unlocked', true);
        player.persistentData.putBoolean('shotgun_creeper_unlocked', true);
        player.persistentData.putBoolean('lob_creeper_unlocked', true);
        applyEvocationRitualAttributes(player);
        player.tell("§eThe volatile elements of the Creeper brood are permanently bound to you...");
    }
    
    // Handle Ritual 1
    if (ritualId == 'evocation_scroll_ritual_1') {
        player.persistentData.putBoolean('gust_unlocked', true);
        player.persistentData.putBoolean('feather_rush_unlocked', true);
        player.persistentData.putBoolean('ashen_breath_unlocked', true);
        applyEvocationRitualAttributes(player);
        player.tell("§eThe wild currents of wind and ash are yours to control permanently...");
    }

    // Handle Ritual 2
    if (ritualId == 'evocation_scroll_ritual_2') {
        player.persistentData.putBoolean('companion_trunk_unlocked', true);
        player.persistentData.putBoolean('summon_horse_unlocked', true);
        player.persistentData.putBoolean('search_beacon_unlocked', true);
        player.persistentData.putBoolean('wololo_unlocked', true);
        applyEvocationRitualAttributes(player);
        player.tell("§eThe utility and manipulative arts of Evocation have sealed inside your essence permanently...");
    }

    // Handle Ritual 3
    if (ritualId == 'evocation_scroll_ritual_3') {
        player.persistentData.putBoolean('shield_unlocked', true);
        player.persistentData.putBoolean('spectral_hammer_unlocked', true);
        player.persistentData.putBoolean('slow_unlocked', true);
        applyEvocationRitualAttributes(player);
        player.tell("§eUnyielding defenses and crushing manifestations are permanently yours...");
    }

    // Handle Ritual 4
    if (ritualId == 'evocation_scroll_ritual_4') {
        player.persistentData.putBoolean('firecracker_unlocked', true);
        player.persistentData.putBoolean('arrow_volley_unlocked', true);
        applyEvocationRitualAttributes(player);
        player.tell("§eThe tactical barrage arts of Evocation have unlocked permanently...");
    }

    // Handle Ritual 5
    if (ritualId == 'evocation_scroll_ritual_5') {
        player.persistentData.putBoolean('fang_strike_unlocked', true);
        player.persistentData.putBoolean('fang_ward_unlocked', true);
        applyEvocationRitualAttributes(player);
        player.tell("§eThe predatory summoning magic of the fangs is permanently unlocked...");
    }
});

// ==========================================
// 4. THE CORE ATTRIBUTE REFRESHER
// ==========================================
function applyEvocationRitualAttributes(player) {
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

    // Ritual 0
    grantAttribute('nucreeper_strike_unlocked', 'ironsattributes:spells_gone_wrong_nucreeper_strike_unlocked', NUCREEPER_STRIKE_UUID, "Nucreeper Strike Unlock");
    grantAttribute('chain_creeper_unlocked', 'ironsattributes:irons_spellbooks_chain_creeper_unlocked', CHAIN_CREEPER_UUID, "Chain Creeper Unlock");
    grantAttribute('shotgun_creeper_unlocked', 'ironsattributes:spells_gone_wrong_shotgun_creeper_unlocked', SHOTGUN_CREEPER_UUID, "Shotgun Creeper Unlock");
    grantAttribute('lob_creeper_unlocked', 'ironsattributes:irons_spellbooks_lob_creeper_unlocked', LOB_CREEPER_UUID, "Lob Creeper Unlock");

    // Ritual 1
    grantAttribute('gust_unlocked', 'ironsattributes:irons_spellbooks_gust_unlocked', GUST_UUID, "Gust Unlock");
    grantAttribute('feather_rush_unlocked', 'ironsattributes:apprenticecodex_feather_rush_unlocked', FEATHER_RUSH_UUID, "Feather Rush Unlock");
    grantAttribute('ashen_breath_unlocked', 'ironsattributes:traveloptics_ashen_breath_unlocked', ASHEN_BREATH_UUID, "Ashen Breath Unlock");

    // Ritual 2
    grantAttribute('companion_trunk_unlocked', 'ironsattributes:apprenticecodex_companion_trunk_unlocked', COMPANION_TRUNK_UUID, "Companion Trunk Unlock");
    grantAttribute('summon_horse_unlocked', 'ironsattributes:irons_spellbooks_summon_horse_unlocked', SUMMON_HORSE_UUID, "Summon Horse Unlock");
    grantAttribute('search_beacon_unlocked', 'ironsattributes:apprenticecodex_search_beacon_unlocked', SEARCH_BEACON_UUID, "Search Beacon Unlock");
    grantAttribute('wololo_unlocked', 'ironsattributes:irons_spellbooks_wololo_unlocked', WOLOLO_UUID, "Wololo Unlock");

    // Ritual 3
    grantAttribute('shield_unlocked', 'ironsattributes:irons_spellbooks_shield_unlocked', SHIELD_UUID, "Shield Unlock");
    grantAttribute('spectral_hammer_unlocked', 'ironsattributes:irons_spellbooks_spectral_hammer_unlocked', SPECTRAL_HAMMER_UUID, "Spectral Hammer Unlock");
    grantAttribute('slow_unlocked', 'ironsattributes:irons_spellbooks_slow_unlocked', SLOW_UUID, "Slow Unlock");

    // Ritual 4
    grantAttribute('firecracker_unlocked', 'ironsattributes:irons_spellbooks_firecracker_unlocked', FIRECRACKER_UUID, "Firecracker Unlock");
    grantAttribute('arrow_volley_unlocked', 'ironsattributes:irons_spellbooks_arrow_volley_unlocked', ARROW_VOLLEY_UUID, "Arrow Volley Unlock");

    // Ritual 5
    grantAttribute('fang_strike_unlocked', 'ironsattributes:irons_spellbooks_fang_strike_unlocked', FANG_STRIKE_UUID, "Fang Strike Unlock");
    grantAttribute('fang_ward_unlocked', 'ironsattributes:irons_spellbooks_fang_ward_unlocked', FANG_WARD_UUID, "Fang Ward Unlock");
}

// ==========================================
// 5. GLOBAL EVENT HOOKS
// ==========================================
PlayerEvents.loggedIn(event => {
    applyEvocationRitualAttributes(event.player);
});

PlayerEvents.respawned(event => {
    applyEvocationRitualAttributes(event.player);
});