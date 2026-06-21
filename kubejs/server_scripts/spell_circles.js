// ── Server Script: Spell Circles ───────────────────────────────
// Detects 7x7 rune circles and grants spells + permanent attributes.
// Place this file in: kubejs/server_scripts/spell_circles.js
// ───────────────────────────────────────────────────────────────

// ══════════════════════════════════════════════════════════════
// CONFIGURATION
// Add new spell circles here. Each entry needs:
//   name       : display name shown to player
//   centerRune : the block ID that goes in the M slot
//   pattern    : 7x7 array (row 0 = north, row 6 = south)
//                'I' = any connected_ink variant
//                'R' = any block ending in _rune
//                'X' = air
//                'M' = centre (auto-matched)
//                exact block ID string = that specific block
//   spells     : Item.of() strings to give the player (always given)
//   attributes : { id, value } objects — only granted on FIRST activation
// ══════════════════════════════════════════════════════════════
const SPELL_CIRCLES = [
    {
        name: 'Nature 1 Circle',
        centerRune: 'kubejs:nature_rune',
        pattern: [
            ['X','X','I','I','I','X','X'],
            ['X','I','X','X','X','I','X'],
            ['I','X','kubejs:poison_rune','kubejs:arrow_rune','kubejs:poison_rune','X','I'],
            ['I','X','kubejs:arrow_rune','M',                'kubejs:arrow_rune','X','I'],
            ['I','X','kubejs:poison_rune','kubejs:arrow_rune','kubejs:poison_rune','X','I'],
            ['X','I','X','X','X','I','X'],
            ['X','X','I','I','I','X','X'],
        ],
        spells: [
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"irons_spellbooks:poison_breath\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"irons_spellbooks:poison_arrow\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
        ],
        attributes: [
            { id: 'ironsattributes:irons_spellbooks_poison_breath_unlocked', value: 1 },
            { id: 'ironsattributes:irons_spellbooks_poison_arrow_unlocked',  value: 1 },
        ]
    },
    {
        name: 'Nature 2 Circle',
        centerRune: 'kubejs:nature_rune',
        pattern: [
            ['X','X','I','I','I','X','X'],
            ['X','I','X','X','X','I','X'],
            ['I','X','kubejs:health_rune','kubejs:pull_rune','kubejs:target_rune','X','I'],
            ['I','X','kubejs:pull_rune','M',                'kubejs:pull_rune','X','I'],
            ['I','X','kubejs:target_rune','kubejs:pull_rune','kubejs:health_rune','X','I'],
            ['X','I','X','X','X','I','X'],
            ['X','X','I','I','I','X','X'],
        ],
        spells: [
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"apprenticecodex:extract\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"apprenticecodex:harvest_moon\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"apprenticecodex:healing_bloom\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
        ],
        attributes: [
            { id: 'ironsattributes:apprenticecodex_extract_unlocked',  value: 1 },
            { id: 'ironsattributes:apprenticecodex_harvest_moon_unlocked', value: 1 },
            { id: 'ironsattributes:apprenticecodex_healing_bloom_unlocked', value: 1 },
        ]
    },
    {
        name: 'Nature 3 Circle',
        centerRune: 'kubejs:nature_rune',
        pattern: [
            ['X','X','I','I','I','X','X'],
            ['X','I','X','X','X','I','X'],
            ['I','X','kubejs:destroy_rune','kubejs:earth_rune','kubejs:aeroform_rune','X','I'],
            ['I','X','kubejs:earth_rune','M',                'kubejs:earth_rune','X','I'],
            ['I','X','kubejs:aeroform_rune','kubejs:earth_rune','kubejs:destroy_rune','X','I'],
            ['X','I','X','X','X','I','X'],
            ['X','X','I','I','I','X','X'],
        ],
        spells: [
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"traveloptics:stele_cascade\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"cataclysm_spellbooks:sandstorm\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"cataclysm_spellbooks:monolith_crash\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"cataclysm_spellbooks:desert_winds\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
        ],
        attributes: [
            { id: 'ironsattributes:traveloptics_stele_cascade_unlocked',  value: 1 },
            { id: 'ironsattributes:cataclysm_spellbooks_sandstorm_unlocked', value: 1 },
            { id: 'ironsattributes:cataclysm_spellbooks_monolith_crash_unlocked', value: 1 },
            { id: 'ironsattributes:cataclysm_spellbooks_desert_winds_unlocked', value: 1 },
        ]
    },
    {
        name: 'Nature 4 Circle',
        centerRune: 'kubejs:nature_rune',
        pattern: [
            ['X','X','I','I','I','X','X'],
            ['X','I','X','X','X','I','X'],
            ['I','X','kubejs:crystal_rune','kubejs:push_rune','kubejs:pull_rune','X','I'],
            ['I','X','kubejs:poison_rune','M',                'kubejs:poison_rune','X','I'],
            ['I','X','kubejs:pull_rune','kubejs:push_rune','kubejs:crystal_rune','X','I'],
            ['X','I','X','X','X','I','X'],
            ['X','X','I','I','I','X','X'],
        ],
        spells: [
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"cataclysm_spellbooks:amethyst_puncture\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"irons_spellbooks:spider_aspect\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"irons_spellbooks:stomp\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
        ],
        attributes: [
            { id: 'ironsattributes:cataclysm_spellbooks_amethyst_puncture_unlocked',  value: 1 },
            { id: 'ironsattributes:irons_spellbooks_spider_aspect_unlocked', value: 1 },
            { id: 'ironsattributes:irons_spellbooks_stomp_unlocked', value: 1 },
        ]
    },
    {
        name: 'Nature 5 Circle',
        centerRune: 'kubejs:nature_rune',
        pattern: [
            ['X','X','I','I','I','X','X'],
            ['X','I','X','X','X','I','X'],
            ['I','X','kubejs:crystal_rune','kubejs:push_rune','kubejs:pull_rune','X','I'],
            ['I','X','kubejs:poison_rune','M',                'kubejs:poison_rune','X','I'],
            ['I','X','kubejs:pull_rune','kubejs:push_rune','kubejs:crystal_rune','X','I'],
            ['X','I','X','X','X','I','X'],
            ['X','X','I','I','I','X','X'],
        ],
        spells: [
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"cataclysm_spellbooks:amethyst_puncture\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"irons_spellbooks:spider_aspect\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"irons_spellbooks:stomp\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
        ],
        attributes: [
            { id: 'ironsattributes:cataclysm_spellbooks_amethyst_puncture_unlocked',  value: 1 },
            { id: 'ironsattributes:irons_spellbooks_spider_aspect_unlocked', value: 1 },
            { id: 'ironsattributes:irons_spellbooks_stomp_unlocked', value: 1 },
        ]
    },

    {
        name: 'Fire 1 Circle',
        centerRune: 'kubejs:fire_rune',
        pattern: [
            ['X','X','I','I','I','X','X'],
            ['X','I','X','X','X','I','X'],
            ['I','X','kubejs:heat_rune','kubejs:push_rune','kubejs:heat_rune','X','I'],
            ['I','X','kubejs:push_rune','M',                'kubejs:push_rune','X','I'],
            ['I','X','kubejs:heat_rune','kubejs:push_rune','kubejs:heat_rune','X','I'],
            ['X','I','X','X','X','I','X'],
            ['X','X','I','I','I','X','X'],
        ],
        spells: [
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"fire_breath\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
        ],
        attributes: [
            { id: 'ironsattributes:irons_spellbooks_fire_breath_unlocked', value: 1 },
        ]
    },
    {
        name: 'Fire 2 Circle',
        centerRune: 'kubejs:fire_rune',
        pattern: [
            ['X','X','I','I','I','X','X'],
            ['X','I','X','X','X','I','X'],
            ['I','X','kubejs:no_harm_rune','kubejs:self_rune','kubejs:no_harm_rune','X','I'],
            ['I','X','kubejs:aeroform_rune','M',                'kubejs:aeroform_rune','X','I'],
            ['I','X','kubejs:no_harm_rune','kubejs:self_rune','kubejs:no_harm_rune','X','I'],
            ['X','I','X','X','X','I','X'],
            ['X','X','I','I','I','X','X'],
        ],
        spells: [
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"burning_dash\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
        ],
        attributes: [
            { id: 'ironsattributes:irons_spellbooks_burning_dash_unlocked', value: 1 },
        ]
    },
    {
        name: 'Fire 3 Circle',
        centerRune: 'kubejs:fire_rune',
        pattern: [
            ['X','X','I','I','I','X','X'],
            ['X','I','X','X','X','I','X'],
            ['I','X','kubejs:heat_rune','kubejs:target_rune','kubejs:heat_rune','X','I'],
            ['I','X','kubejs:storm_rune','M',                'kubejs:storm_rune','X','I'],
            ['I','X','kubejs:heat_rune','kubejs:target_rune','kubejs:heat_rune','X','I'],
            ['X','I','X','X','X','I','X'],
            ['X','X','I','I','I','X','X'],
        ],
        spells: [
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"irons_spellbooks:blaze_storm\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"irons_spellbooks:flaming_barrage\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
        ],
        attributes: [
            { id: 'ironsattributes:irons_spellbooks_blaze_storm_unlocked', value: 1 },
            { id: 'ironsattributes:irons_spellbooks_flaming_barrage_unlocked',  value: 1 },
        ]
    },
    {
        name: 'Fire 4 Circle',
        centerRune: 'kubejs:fire_rune',
        pattern: [
            ['X','X','I','I','I','X','X'],
            ['X','I','X','X','X','I','X'],
            ['I','X','kubejs:arrow_rune','kubejs:heat_rune','kubejs:arrow_rune','X','I'],
            ['I','X','kubejs:heat_rune','M',                'kubejs:heat_rune','X','I'],
            ['I','X','kubejs:arrow_rune','kubejs:heat_rune','kubejs:arrow_rune','X','I'],
            ['X','I','X','X','X','I','X'],
            ['X','X','I','I','I','X','X'],
        ],
        spells: [
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"irons_spellbooks:fire_arrow\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"irons_spellbooks:fireball\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
        ],
        attributes: [
            { id: 'ironsattributes:irons_spellbooks_fireball_unlocked', value: 1 },
            { id: 'ironsattributes:irons_spellbooks_fire_arrow_unlocked',  value: 1 },
        ]
    },
    {
        name: 'Fire 5 Circle',
        centerRune: 'kubejs:fire_rune',
        pattern: [
            ['X','X','I','I','I','X','X'],
            ['X','I','X','X','X','I','X'],
            ['I','X','kubejs:self_rune','kubejs:heat_rune','kubejs:earth_rune','X','I'],
            ['I','X','kubejs:target_rune','M',                'kubejs:heat_rune','X','I'],
            ['I','X','kubejs:earth_rune','kubejs:target_rune','kubejs:self_rune','X','I'],
            ['X','I','X','X','X','I','X'],
            ['X','X','I','I','I','X','X'],
        ],
        spells: [
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"cataclysm_spellbooks:piercing_bone\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"irons_spellbooks:flaming_strike\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"traveloptics:lava_bomb\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"irons_spellbooks:wall_of_fire\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
        ],
        attributes: [
            { id: 'ironsattributes:irons_spellbooks_flaming_strike_unlocked',  value: 1 },
            { id: 'ironsattributes:irons_spellbooks_piercing_bone_unlocked', value: 1 },
            { id: 'ironsattributes:irons_spellbooks_lava_bomb_unlocked', value: 1 },
            { id: 'ironsattributes:irons_spellbooks_wall_of_fire_unlocked', value: 1 },
        ]
    },
    
    {
        name: 'Ender 1 Circle',
        centerRune: 'kubejs:ender_rune',
        pattern: [
            ['X','X','I','I','I','X','X'],
            ['X','I','X','X','X','I','X'],
            ['I','X','kubejs:target_rune','kubejs:dragon_rune','kubejs:smoke_rune','X','I'],
            ['I','X','kubejs:dragon_rune','M',                'kubejs:dragon_rune','X','I'],
            ['I','X','kubejs:arrow_rune','kubejs:dragon_rune','kubejs:self_rune','X','I'],
            ['X','I','X','X','X','I','X'],
            ['X','X','I','I','I','X','X'],
        ],
        spells: [
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"irons_spellbooks:dragon_breath\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"cataclysm_spellbooks:void_bulwark\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
        ],
        attributes: [
            { id: 'ironsattributes:irons_spellbooks_dragon_breath_unlocked', value: 1 },
            { id: 'ironsattributes:irons_spellbooks_void_bulwark_unlocked',  value: 1 },
        ]
    },
    {
        name: 'Ender 2 Circle',
        centerRune: 'kubejs:ender_rune',
        pattern: [
            ['X','X','I','I','I','X','X'],
            ['X','I','X','X','X','I','X'],
            ['I','X','kubejs:aeroform_rune','kubejs:teleport_rune','kubejs:slash_rune','X','I'],
            ['I','X','kubejs:self_rune','M',                'kubejs:aeroform_rune','X','I'],
            ['I','X','kubejs:aeroform_rune','kubejs:teleport_rune','kubejs:aeroform_rune','X','I'],
            ['X','I','X','X','X','I','X'],
            ['X','X','I','I','I','X','X'],
        ],
        spells: [
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"irons_spellbooks:shadow_slash\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"apprenticecodex:assist_wings\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"traveloptics:blink\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"apprenticecodex:long_stride\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
        ],
        attributes: [
            { id: 'ironsattributes:irons_spellbooks_shadow_slash_unlocked',  value: 1 },
            { id: 'ironsattributes:apprenticecodex_assist_wings_unlocked', value: 1 },
            { id: 'ironsattributes:traveloptics_blink_unlocked', value: 1 },
            { id: 'ironsattributes:apprenticecodex_long_stride_unlocked', value: 1 },
        ]
    },
    {
        name: 'Ender 3 Circle',
        centerRune: 'kubejs:ender_rune',
        pattern: [
            ['X','X','I','I','I','X','X'],
            ['X','I','X','X','X','I','X'],
            ['I','X','kubejs:arcane_rune','kubejs:arrow_rune','kubejs:arcane_rune','X','I'],
            ['I','X','kubejs:target_rune','M',                'kubejs:target_rune','X','I'],
            ['I','X','kubejs:arcane_rune','kubejs:arrow_rune','kubejs:arcane_rune','X','I'],
            ['X','I','X','X','X','I','X'],
            ['X','X','I','I','I','X','X'],
        ],
        spells: [
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"irons_spellbooks:magic_missile\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"irons_spellbooks:magic_arrow\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
        ],
        attributes: [
            { id: 'ironsattributes:irons_spellbooks_magic_missile_unlocked', value: 1 },
            { id: 'ironsattributes:irons_spellbooks_magic_arrow_unlocked',  value: 1 },
        ]
    },
    {
        name: 'Ender 4 Circle',
        centerRune: 'kubejs:ender_rune',
        pattern: [
            ['X','X','I','I','I','X','X'],
            ['X','I','X','X','X','I','X'],
            ['I','X','kubejs:exctract_rune','kubejs:vision_rune','kubejs:teleport_rune','X','I'],
            ['I','X','kubejs:arcane_rune','M',                'kubejs:arcane_rune','X','I'],
            ['I','X','kubejs:teleport_rune','kubejs:vision_rune','kubejs:exctract_rune','X','I'],
            ['X','I','X','X','X','I','X'],
            ['X','X','I','I','I','X','X'],
        ],
        spells: [
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"irons_spellbooks:summon_ender_chest\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"traveloptics:astral_sense\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"apprenticecodex:auto_magnet\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
            "Item.of('irons_spellbooks:scroll', '{\"irons_spellbooks:spell_container\":{data:[{id:\"apprenticecodex:remote_eye\",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}')",
        ],
        attributes: [
            { id: 'ironsattributes:irons_spellbooks_summon_ender_chest_unlocked',  value: 1 },
            { id: 'ironsattributes:traveloptics_astral_sense_unlocked', value: 1 },
            { id: 'ironsattributes:apprenticecodex_auto_magnet_unlocked', value: 1 },
            { id: 'ironsattributes:apprenticecodex_remote_eye_unlocked', value: 1 },
        ]
    },

]

// ══════════════════════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════════════════════

function matchesCell(level, x, y, z, cell) {
    const blockId = level.getBlock(x, y, z).id
    if (cell === 'X') return blockId === 'minecraft:air'
    if (cell === 'I') return blockId === 'kubejs:connected_ink'
                          || blockId === 'kubejs:hellish_connected_ink'
                          || blockId === 'kubejs:eldritch_connected_ink'
    if (cell === 'R') return blockId.startsWith('kubejs:') && blockId.endsWith('_rune')
    if (cell === 'M') return true
    return blockId === cell
}

function checkCircle(level, cx, cy, cz, circle) {
    for (let row = 0; row < 7; row++) {
        for (let col = 0; col < 7; col++) {
            const cell = circle.pattern[row][col]
            const wx   = cx + (col - 3)
            const wz   = cz + (row - 3)
            if (!matchesCell(level, wx, cy, wz, cell)) return false
        }
    }
    return true
}

// Persistent key for a circle — based on its name, safe for NBT keys
function circleKey(circle) {
    return 'circle__' + circle.name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()
}

// Check if player has already activated this circle
function hasActivated(player, circle) {
    const data = player.persistentData
    if (!data.contains('spell_circles')) return false
    return data.getCompound('spell_circles').contains(circleKey(circle))
}

// Mark circle as activated in persistent data
function markActivated(player, circle) {
    const data = player.persistentData
    if (!data.contains('spell_circles')) data.put('spell_circles', {})
    data.getCompound('spell_circles').putByte(circleKey(circle), 1)
}

// Store and immediately apply a persistent attribute
function grantPersistentAttribute(player, attrId, value) {
    const data = player.persistentData
    if (!data.contains('persistent_attributes')) data.put('persistent_attributes', {})
    const attrs = data.getCompound('persistent_attributes')
    const key   = attrId.replace(/:/g, '__')
    // Store as string so we preserve decimal values (e.g. 0.5)
    attrs.putString(key, String(value))
    player.runCommand(`attribute @s ${attrId} base set ${value}`)
}

// Re-apply ALL stored persistent attributes (login / respawn)
function reapplyAllAttributes(player) {
    const data = player.persistentData
    if (!data.contains('persistent_attributes')) return
    const attrs = data.getCompound('persistent_attributes')
    attrs.getAllKeys().forEach(key => {
        const attrId = key.replace(/__/g, ':')
        const value  = attrs.getString(key)
        player.runCommand(`attribute @s ${attrId} base set ${value}`)
    })
}

// ══════════════════════════════════════════════════════════════
// ACTIVATION: right-click centre rune with empty_scroll
// ══════════════════════════════════════════════════════════════
BlockEvents.rightClicked('*', event => {
    const player = event.player
    if (!player) return
    if (event.hand !== 'MAIN_HAND') return

    const item = player.mainHandItem
    if (!item || item.id !== 'kubejs:empty_scroll') return

    const block  = event.block
    const level  = event.level
    const circle = SPELL_CIRCLES.find(c => c.centerRune === block.id)
    if (!circle) return

    const cx = block.pos.x
    const cy = block.pos.y
    const cz = block.pos.z

    // Validate 7x7 pattern
    if (!checkCircle(level, cx, cy, cz, circle)) {
        player.tell('§cThe rune circle is incomplete or incorrect.')
        event.cancel()
        return
    }

    const firstTime = !hasActivated(player, circle)

    // ── Always give scrolls ──
    circle.spells.forEach(spellExpr => {
        player.give(eval(spellExpr))
    })

    if (firstTime) {
        // ── First activation: grant permanent attributes too ──
        circle.attributes.forEach(attr => {
            grantPersistentAttribute(player, attr.id, attr.value)
        })
        markActivated(player, circle)
        player.tell(`§a✦ ${circle.name} activated! Spells and abilities unlocked. ✦`)
    } else {
        // ── Repeat activation: scrolls only, no attributes ──
        player.tell(`§6✦ ${circle.name} — spells granted. (Abilities already unlocked.) ✦`)
    }

    // Consume the empty scroll
    if (!player.creative) item.count -= 1

    event.cancel()
})

// ══════════════════════════════════════════════════════════════
// PERSISTENCE: re-apply attributes on login and respawn
// ══════════════════════════════════════════════════════════════
PlayerEvents.loggedIn(event => {
    event.server.scheduleInTicks(20, () => {
        reapplyAllAttributes(event.player)
    })
})

PlayerEvents.respawned(event => {
    event.server.scheduleInTicks(20, () => {
        reapplyAllAttributes(event.player)
    })
})
