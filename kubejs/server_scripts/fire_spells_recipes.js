// ==========================================
// 1. ALL FIRE RITUAL RECIPES
// ==========================================
ServerEvents.recipes(event => {
    // Fire Ritual 0: Fire Breath
    event.recipes.summoningrituals
        .altar(Item.of('minecraft:flint_and_steel', '{Damage:0}').weakNBT())
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:fire_breath",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('4x minecraft:lantern')
        .recipeTime(100)
        .id('fire_scroll_ritual_0');

    // Fire Ritual 1: Burning Dash
    event.recipes.summoningrituals
        .altar('minecraft:lantern') 
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:burning_dash",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('minecraft:lava_bucket')
        .input('4x minecraft:magma_block')
        .recipeTime(100)
        .id('fire_scroll_ritual_1');

    // Fire Ritual 2: Flaming Barrage & Blaze Storm
    event.recipes.summoningrituals
        .altar('minecraft:lantern')
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:flaming_barrage",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:blaze_storm",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('4x minecraft:fire_charge')
        .input('4x minecraft:netherrack')
        .recipeTime(100)
        .id('fire_scroll_ritual_2');

    // Fire Ritual 3: Fireball & Fire Arrow
    event.recipes.summoningrituals
        .altar('archeryexp:diamond_arrow')
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:fireball",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:fire_arrow",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('minecraft:nether_bricks')
        .input('3x minecraft:fire_charge')
        .recipeTime(100)
        .id('fire_scroll_ritual_3');

    // Fire Ritual 4: Wall of Fire, Lava Bomb, Flaming Strike, & Piercing Bone
    event.recipes.summoningrituals
        .altar('minecraft:lantern')
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:wall_of_fire",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"traveloptics:lava_bomb",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:flaming_strike",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"cataclysm_spellbooks:piercing_bone",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('minecraft:bone_block')
        .input('minecraft:magma_block')
        .input('2x minecraft:fire_charge')
        .input('minecraft:lava_bucket')
        .input('4x minecraft:nether_brick_wall')
        .recipeTime(100)
        .id('fire_scroll_ritual_4');
});

// ==========================================
// 2. UNIQUE MODIFIER UUIDS (One per spell)
// ==========================================
const FIRE_BREATH_UUID     = "f1a2b3c4-d5e6-47a8-b9c0-1e2f3a4b5c6d";
const BURNING_DASH_UUID    = "f2b3c4d5-e6f7-48a9-b0c1-2e3f4a5b6c7d";

const FLAMING_BARRAGE_UUID = "f3c4d5e6-f7a8-49b0-c1d2-3e4f5a6b7c8d";
const BLAZE_STORM_UUID     = "f4d5e6f7-a8b9-40c0-d1e2-4e5f6a7b8c9d";

const FIREBALL_UUID        = "f5e6f7a8-b9c0-41d1-e2f3-5e6f7a8b9c0e";
const FIRE_ARROW_UUID      = "f6f7a8b9-c0d1-42e2-f3a4-6e7f8a9b0c1f";

const WALL_OF_FIRE_UUID    = "f7a8b9c0-d1e2-43f3-a4b5-7e8f9a0b1c2d";
const LAVA_BOMB_UUID       = "f8b9c0d1-e2f3-44a4-b5c6-8f9a0b1c2d3e";
const FLAMING_STRIKE_UUID  = "f9c0d1e2-f3a4-45b5-c6d7-9a0b1c2d3e4f";
const PIERCING_BONE_UUID   = "f0d1e2f3-a4b5-46c6-d7e8-0b1c2d3e4f5a";

// ==========================================
// 3. RITUAL COMPLETION HANDLER
// ==========================================
SummoningRituals.complete(event => {
    if (!event.player) return;
    let player = event.player;
    let ritualId = event.recipe.getId().toString();

    // Handle Ritual 0
    if (ritualId == 'fire_scroll_ritual_0') {
        player.persistentData.putBoolean('fire_breath_unlocked', true);
        applyFireRitualAttributes(player);
        player.tell("§cThe spark of Fire Breath ignites inside your soul permanently...");
    }
    
    // Handle Ritual 1
    if (ritualId == 'fire_scroll_ritual_1') {
        player.persistentData.putBoolean('burning_dash_unlocked', true);
        applyFireRitualAttributes(player);
        player.tell("§cThe explosive kinetic energy of Burning Dash is permanently yours...");
    }

    // Handle Ritual 2
    if (ritualId == 'fire_scroll_ritual_2') {
        player.persistentData.putBoolean('flaming_barrage_unlocked', true);
        player.persistentData.putBoolean('blaze_storm_unlocked', true);
        applyFireRitualAttributes(player);
        player.tell("§cInfernal waves of Flaming Barrage and Blaze Storm are etched into your magic permanently...");
    }

    // Handle Ritual 3
    if (ritualId == 'fire_scroll_ritual_3') {
        player.persistentData.putBoolean('fireball_unlocked', true);
        player.persistentData.putBoolean('fire_arrow_unlocked', true);
        applyFireRitualAttributes(player);
        player.tell("§cThe marks of Fireball and Fire Arrow seal permanently to your essence...");
    }

    // Handle Ritual 4
    if (ritualId == 'fire_scroll_ritual_4') {
        player.persistentData.putBoolean('wall_of_fire_unlocked', true);
        player.persistentData.putBoolean('lava_bomb_unlocked', true);
        player.persistentData.putBoolean('flaming_strike_unlocked', true);
        player.persistentData.putBoolean('piercing_bone_unlocked', true);
        applyFireRitualAttributes(player);
        player.tell("§cThe cataclysmic power of Wall of Fire, Lava Bomb, Flaming Strike, and Piercing Bone belongs to you permanently...");
    }
});

// ==========================================
// 4. THE CORE ATTRIBUTE REFRESHER
// ==========================================
function applyFireRitualAttributes(player) {
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

    // Ritual 0 & 1
    grantAttribute('fire_breath_unlocked', 'ironsattributes:irons_spellbooks_fire_breath_unlocked', FIRE_BREATH_UUID, "Fire Breath Unlock");
    grantAttribute('burning_dash_unlocked', 'ironsattributes:irons_spellbooks_burning_dash_unlocked', BURNING_DASH_UUID, "Burning Dash Unlock");

    // Ritual 2
    grantAttribute('flaming_barrage_unlocked', 'ironsattributes:irons_spellbooks_flaming_barrage_unlocked', FLAMING_BARRAGE_UUID, "Flaming Barrage Unlock");
    grantAttribute('blaze_storm_unlocked', 'ironsattributes:irons_spellbooks_blaze_storm_unlocked', BLAZE_STORM_UUID, "Blaze Storm Unlock");

    // Ritual 3
    grantAttribute('fireball_unlocked', 'ironsattributes:irons_spellbooks_fireball_unlocked', FIREBALL_UUID, "Fireball Unlock");
    grantAttribute('fire_arrow_unlocked', 'ironsattributes:irons_spellbooks_fire_arrow_unlocked', FIRE_ARROW_UUID, "Fire Arrow Unlock");

    // Ritual 4
    grantAttribute('wall_of_fire_unlocked', 'ironsattributes:irons_spellbooks_wall_of_fire_unlocked', WALL_OF_FIRE_UUID, "Wall of Fire Unlock");
    grantAttribute('lava_bomb_unlocked', 'ironsattributes:traveloptics_lava_bomb_unlocked', LAVA_BOMB_UUID, "Lava Bomb Unlock");
    grantAttribute('flaming_strike_unlocked', 'ironsattributes:irons_spellbooks_flaming_strike_unlocked', FLAMING_STRIKE_UUID, "Flaming Strike Unlock");
    grantAttribute('piercing_bone_unlocked', 'ironsattributes:cataclysm_spellbooks_piercing_bone_unlocked', PIERCING_BONE_UUID, "Piercing Bone Unlock");
}

// ==========================================
// 5. GLOBAL EVENT HOOKS
// ==========================================
PlayerEvents.loggedIn(event => {
    applyFireRitualAttributes(event.player);
});

PlayerEvents.respawned(event => {
    applyFireRitualAttributes(event.player);
});