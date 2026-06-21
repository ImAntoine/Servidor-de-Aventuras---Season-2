// ==========================================
// 1. ALL NATURE RITUAL RECIPES
// ==========================================
ServerEvents.recipes(event => {
    // Nature Ritual 1: Poison Arrow & Poison Breath
    event.recipes.summoningrituals
        .altar('minecraft:arrow')
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:poison_arrow",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:poison_breath",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('4x minecraft:spider_eye')
        .blockBelow('minecraft:moss_block')
        .recipeTime(100)
        .id('nature_scrolls_ritual_1');

    // Nature Ritual 2: Extract, Harvest Moon, & Healing Bloom
    event.recipes.summoningrituals
        .altar(Item.of('minecraft:diamond_hoe', '{Damage:0}').strongNBT())
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"apprenticecodex:extract",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"apprenticecodex:harvest_moon",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"apprenticecodex:healing_bloom",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('4x minecraft:glistering_melon_slice')
        .input(Item.of('minecraft:potion', 4, '{IE_BackupPotion:{Potion:"minecraft:water"},Potion:"minecraft:water"}').strongNBT())
        .blockBelow('minecraft:moss_block')
        .recipeTime(100)
        .id('nature_scrolls_ritual_2');

    // Nature Ritual 3: Stele Cascade, Sandstorm, Monolith Crash, & Desert Winds
    event.recipes.summoningrituals
        .altar(Item.of('minecraft:golden_shovel', '{Damage:0}').strongNBT())
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"traveloptics:stele_cascade",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"cataclysm_spellbooks:sandstorm",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"cataclysm_spellbooks:monolith_crash",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"cataclysm_spellbooks:desert_winds",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .blockBelow('minecraft:moss_block')
        .input('4x minecraft:sandstone')
        .input('4x minecraft:chiseled_sandstone')
        .recipeTime(100)
        .id('nature_scrolls_ritual_3');

    // Nature Ritual 4: Stomp, Spider Aspect, & Amethyst Puncture
    event.recipes.summoningrituals
        .altar('minecraft:campfire')
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:stomp",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:spider_aspect",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"cataclysm_spellbooks:amethyst_puncture",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .blockBelow('minecraft:moss_block')
        .input('2x minecraft:coarse_dirt')
        .input('2x minecraft:spider_eye')
        .input('4x minecraft:amethyst_shard')
        .recipeTime(100)
        .id('nature_scrolls_ritual_4');
});

// ==========================================
// 2. UNIQUE MODIFIER UUIDS (One per spell)
// ==========================================
const POISON_ARROW_UUID     = "n1a2b3c4-d5e6-47a8-b9c0-1e2f3a4b5c6d";
const POISON_BREATH_UUID    = "n2b3c4d5-e6f7-48a9-b0c1-2e3f4a5b6c7d";

const EXTRACT_UUID           = "n3c4d5e6-f7a8-49b0-c1d2-3e4f5a6b7c8d";
const HARVEST_MOON_UUID     = "n4d5e6f7-a8b9-40c0-d1e2-4e5f6a7b8c9d";
const HEALING_BLOOM_UUID    = "n5e6f7a8-b9c0-41d1-e2f3-5e6f7a8b9c0e";

const STELE_CASCADE_UUID    = "n6f7a8b9-c0d1-42e2-f3a4-6e7f8a9b0c1f";
const SANDSTORM_UUID        = "n7a8b9c0-d1e2-43f3-a4b5-7e8f9a0b1c2d";
const MONOLITH_CRASH_UUID   = "n8b9c0d1-e2f3-44a4-b5c6-8f9a0b1c2d3e";
const DESERT_WINDS_UUID     = "n9c0d1e2-f3a4-45b5-c6d7-9a0b1c2d3e4f";

const STOMP_UUID            = "n0d1e2f3-a4b5-46c6-d7e8-0b1c2d3e4f5a";
const SPIDER_ASPECT_UUID    = "n1e2f3a4-b5c6-47d7-e8f9-1c2d3e4f5a6b";
const AMETHYST_PUNCTURE_UUID= "n2f3a4b5-c6d7-48e8-f9a0-2d3e4f5a6b7c";

// ==========================================
// 3. RITUAL COMPLETION HANDLER
// ==========================================
SummoningRituals.complete(event => {
    if (!event.player) return;
    let player = event.player;
    let ritualId = event.recipe.getId().toString();

    // Handle Ritual 1
    if (ritualId == 'nature_scrolls_ritual_1') {
        player.persistentData.putBoolean('poison_arrow_unlocked', true);
        player.persistentData.putBoolean('poison_breath_unlocked', true);
        applyNatureRitualAttributes(player);
        player.tell("§aThe toxic elements of Nature flow permanently through your soul...");
    }
    
    // Handle Ritual 2
    if (ritualId == 'nature_scrolls_ritual_2') {
        player.persistentData.putBoolean('extract_unlocked', true);
        player.persistentData.putBoolean('harvest_moon_unlocked', true);
        player.persistentData.putBoolean('healing_bloom_unlocked', true);
        applyNatureRitualAttributes(player);
        player.tell("§aThe power of Growth, Harvest, and Restoration has permanently bloomed within you...");
    }

    // Handle Ritual 3
    if (ritualId == 'nature_scrolls_ritual_3') {
        player.persistentData.putBoolean('stele_cascade_unlocked', true);
        player.persistentData.putBoolean('sandstorm_unlocked', true);
        player.persistentData.putBoolean('monolith_crash_unlocked', true);
        player.persistentData.putBoolean('desert_winds_unlocked', true);
        applyNatureRitualAttributes(player);
        player.tell("§aThe shifting sands and crushing weight of the Earth are yours to command permanently...");
    }

    // Handle Ritual 4
    if (ritualId == 'nature_scrolls_ritual_4') {
        player.persistentData.putBoolean('stomp_unlocked', true);
        player.persistentData.putBoolean('spider_aspect_unlocked', true);
        player.persistentData.putBoolean('amethyst_puncture_unlocked', true);
        applyNatureRitualAttributes(player);
        player.tell("§aThe subterranean spikes and bestial instincts have locked permanently to your essence...");
    }
});

// ==========================================
// 4. THE CORE ATTRIBUTE REFRESHER
// ==========================================
function applyNatureRitualAttributes(player) {
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

    // Ritual 1
    grantAttribute('poison_arrow_unlocked', 'ironsattributes:irons_spellbooks_poison_arrow_unlocked', POISON_ARROW_UUID, "Poison Arrow Unlock");
    grantAttribute('poison_breath_unlocked', 'ironsattributes:irons_spellbooks_poison_breath_unlocked', POISON_BREATH_UUID, "Poison Breath Unlock");

    // Ritual 2
    grantAttribute('extract_unlocked', 'ironsattributes:apprenticecodex_extract_unlocked', EXTRACT_UUID, "Extract Unlock");
    grantAttribute('harvest_moon_unlocked', 'ironsattributes:apprenticecodex_harvest_moon_unlocked', HARVEST_MOON_UUID, "Harvest Moon Unlock");
    grantAttribute('healing_bloom_unlocked', 'ironsattributes:apprenticecodex_healing_bloom_unlocked', HEALING_BLOOM_UUID, "Healing Bloom Unlock");

    // Ritual 3
    grantAttribute('stele_cascade_unlocked', 'ironsattributes:traveloptics_stele_cascade_unlocked', STELE_CASCADE_UUID, "Stele Cascade Unlock");
    grantAttribute('sandstorm_unlocked', 'ironsattributes:cataclysm_spellbooks_sandstorm_unlocked', SANDSTORM_UUID, "Sandstorm Unlock");
    grantAttribute('monolith_crash_unlocked', 'ironsattributes:cataclysm_spellbooks_monolith_crash_unlocked', MONOLITH_CRASH_UUID, "Monolith Crash Unlock");
    grantAttribute('desert_winds_unlocked', 'ironsattributes:cataclysm_spellbooks_desert_winds_unlocked', DESERT_WINDS_UUID, "Desert Winds Unlock");

    // Ritual 4
    grantAttribute('stomp_unlocked', 'ironsattributes:irons_spellbooks_stomp_unlocked', STOMP_UUID, "Stomp Unlock");
    grantAttribute('spider_aspect_unlocked', 'ironsattributes:irons_spellbooks_spider_aspect_unlocked', SPIDER_ASPECT_UUID, "Spider Aspect Unlock");
    grantAttribute('amethyst_puncture_unlocked', 'ironsattributes:cataclysm_spellbooks_amethyst_puncture_unlocked', AMETHYST_PUNCTURE_UUID, "Amethyst Puncture Unlock");
}

// ==========================================
// 5. GLOBAL EVENT HOOKS
// ==========================================
PlayerEvents.loggedIn(event => {
    applyNatureRitualAttributes(event.player);
});

PlayerEvents.respawned(event => {
    applyNatureRitualAttributes(event.player);
});