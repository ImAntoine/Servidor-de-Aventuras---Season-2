// ==========================================
// 1. ALL LIGHTNING RITUAL RECIPES
// ==========================================
ServerEvents.recipes(event => {
    // Ritual 0: Volt Strike & EM Pulse
    event.recipes.summoningrituals
        .altar('irons_spellbooks:lightning_bottle')
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:volt_strike",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"traveloptics:em_pulse",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('minecraft:piston')
        .input('4x minecraft:copper_block')
        .recipeTime(100)
        .id('lightning_scroll_ritual_0');

    // Ritual 1: Shockwave & Electrocute
    event.recipes.summoningrituals
        .altar('minecraft:redstone')
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:shockwave",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:electrocute",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('2x irons_spellbooks:lightning_bottle')
        .input('4x minecraft:lightning_rod')
        .recipeTime(100)
        .id('lightning_scroll_ritual_1');

    // Ritual 2: Lightning Lance, Lightning Bolt, & Ascension
    event.recipes.summoningrituals
        .altar('minecraft:lightning_rod')
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:lightning_lance",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:lightning_bolt",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:ascension",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('4x minecraft:piston')
        .input('4x irons_spellbooks:lightning_bottle')
        .input('2x minecraft:repeater')
        .recipeTime(100)
        .id('lightning_scroll_ritual_2');

    // Ritual 3: Rapid Laser, Shock, & Ball Lightning
    event.recipes.summoningrituals
        .altar('minecraft:lightning_rod')
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"traveloptics:rapid_laser",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"apprenticecodex:shock",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .itemOutput(
            Item.of('irons_spellbooks:scroll', '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:ball_lightning",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}').strongNBT()
        )
        .input('2x minecraft:slime_ball')
        .input('3x irons_spellbooks:lightning_bottle')
        .input('minecraft:repeater')
        .recipeTime(100)
        .id('lightning_scroll_ritual_3');
});

// ==========================================
// 2. UNIQUE MODIFIER UUIDS (One for each spell)
// ==========================================
const VOLT_STRIKE_UUID     = "7a1b2c3d-e4f5-46a7-b8c9-0d1e2f3a4b5c";
const EM_PULSE_UUID        = "8b2c3d4e-f5a6-47b8-c9d0-1e2f3a4b5c6d";
const SHOCKWAVE_UUID       = "9c3d4e5f-a6b7-48c9-d0e1-2f3a4b5c6d7e";
const ELECTROCUTE_UUID     = "0d4e5f6a-b7c8-49d9-e1f2-3a4b5c6d7e8f";
const LIGHTNING_LANCE_UUID = "1e5f6a7b-c8d9-40ea-f2a3-4b5c6d7e8f9a";
const LIGHTNING_BOLT_UUID  = "2f6a7b8c-d9e0-41eb-a3b4-c5d6e7f8a9b0";
const ASCENSION_UUID       = "3a7b8c9d-e0f1-42ec-b4c5-d6e7f8a9b0c1";
const RAPID_LASER_UUID     = "4b8c9d0e-f1a2-43ed-c5d6-e7f8a9b0c1d2";
const SHOCK_UUID           = "5c9d0e1f-a2b3-44ee-d6e7-f8a9b0c1d2e3";
const BALL_LIGHTNING_UUID  = "6d0e1f2a-b3c4-45ef-e7f8-a9b0c1d2e3f4";

// ==========================================
// 3. RITUAL COMPLETION HANDLER
// ==========================================
SummoningRituals.complete(event => {
    if (!event.player) return;
    let player = event.player;
    let ritualId = event.recipe.getId().toString();

    // Handle Ritual 0
    if (ritualId == 'lightning_scroll_ritual_0') {
        player.persistentData.putBoolean('volt_strike_unlocked', true);
        player.persistentData.putBoolean('em_pulse_unlocked', true);
        applyLightningRitualAttributes(player);
        player.tell("§eThe static energies of Volt Strike and EM Pulse spark within you permanently...");
    }
    
    // Handle Ritual 1
    if (ritualId == 'lightning_scroll_ritual_1') {
        player.persistentData.putBoolean('shockwave_unlocked', true);
        player.persistentData.putBoolean('electrocute_unlocked', true);
        applyLightningRitualAttributes(player);
        player.tell("§eThe crackling power of Shockwave and Electrocute surges within you permanently...");
    }

    // Handle Ritual 2
    if (ritualId == 'lightning_scroll_ritual_2') {
        player.persistentData.putBoolean('lightning_lance_unlocked', true);
        player.persistentData.putBoolean('lightning_bolt_unlocked', true);
        player.persistentData.putBoolean('ascension_unlocked', true);
        applyLightningRitualAttributes(player);
        player.tell("§eThe thundering storms of Lightning Lance, Lightning Bolt, and Ascension ground to your soul permanently...");
    }

    // Handle Ritual 3
    if (ritualId == 'lightning_scroll_ritual_3') {
        player.persistentData.putBoolean('rapid_laser_unlocked', true);
        player.persistentData.putBoolean('shock_unlocked', true);
        player.persistentData.putBoolean('ball_lightning_unlocked', true);
        applyLightningRitualAttributes(player);
        player.tell("§eThe brilliant flashes of Rapid Laser, Shock, and Ball Lightning bind to you permanently...");
    }
});

// ==========================================
// 4. THE CORE ATTRIBUTE REFRESHER
// ==========================================
function applyLightningRitualAttributes(player) {
    let attributes = player.minecraftEntity.getAttributes();

    // Helper wrapper to process the core attributes smoothly
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

    // Process all 10 lightning modifiers
    grantAttribute('volt_strike_unlocked', 'ironsattributes:irons_spellbooks_volt_strike_unlocked', VOLT_STRIKE_UUID, "Volt Strike Unlock");
    grantAttribute('em_pulse_unlocked', 'ironsattributes:traveloptics_em_pulse_unlocked', EM_PULSE_UUID, "EM Pulse Unlock");
    grantAttribute('shockwave_unlocked', 'ironsattributes:irons_spellbooks_shockwave_unlocked', SHOCKWAVE_UUID, "Shockwave Unlock");
    grantAttribute('electrocute_unlocked', 'ironsattributes:irons_spellbooks_electrocute_unlocked', ELECTROCUTE_UUID, "Electrocute Unlock");
    grantAttribute('lightning_lance_unlocked', 'ironsattributes:irons_spellbooks_lightning_lance_unlocked', LIGHTNING_LANCE_UUID, "Lightning Lance Unlock");
    grantAttribute('lightning_bolt_unlocked', 'ironsattributes:irons_spellbooks_lightning_bolt_unlocked', LIGHTNING_BOLT_UUID, "Lightning Bolt Unlock");
    grantAttribute('ascension_unlocked', 'ironsattributes:irons_spellbooks_ascension_unlocked', ASCENSION_UUID, "Ascension Unlock");
    grantAttribute('rapid_laser_unlocked', 'ironsattributes:traveloptics_rapid_laser_unlocked', RAPID_LASER_UUID, "Rapid Laser Unlock");
    grantAttribute('shock_unlocked', 'ironsattributes:apprenticecodex_shock_unlocked', SHOCK_UUID, "Shock Unlock");
    grantAttribute('ball_lightning_unlocked', 'ironsattributes:irons_spellbooks_ball_lightning_unlocked', BALL_LIGHTNING_UUID, "Ball Lightning Unlock");
}

// ==========================================
// 5. GLOBAL EVENT HOOKS
// ==========================================
PlayerEvents.loggedIn(event => {
    applyLightningRitualAttributes(event.player);
});

PlayerEvents.respawned(event => {
    applyLightningRitualAttributes(event.player);
});