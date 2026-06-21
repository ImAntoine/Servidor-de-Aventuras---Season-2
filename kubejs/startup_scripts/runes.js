// KubeJS Startup Script – registers all rune carpets
// Place in kubejs/startup_scripts/

const RUNE_NAMES = [
    'energy_rune', 'self_rune', 'curse_rune', 'sound_rune', 'hidden_rune',
    'slash_rune', 'decay_rune', 'water_rune', 'frost_rune', 'revert_rune',
    'target_rune', 'storm_rune', 'volt_rune', 'fang_rune', 'protect_rune',
    'destroy_rune', 'horse_rune', 'explosion_rune', 'creeper_rune', 'arcane_rune',
    'vision_rune', 'teleport_rune', 'mana_rune', 'pull_rune', 'push_rune',
    'dragon_rune', 'heat_rune', 'crystal_rune', 'earth_rune', 'poison_rune',
    'health_rune', 'extract_rune', 'arrow_rune', 'aeroform_rune', 'light_rune',
    'smoke_rune', 'sword_rune', 'no_harm_rune', 'abyssal_rune', 'aqua_rune',
    'blood_rune', 'ender_rune', 'evocation_rune', 'holy_rune', 'ice_rune',
    'lightning_rune', 'nature_rune', 'technomancy_rune'
];

StartupEvents.registry('block', event => {
    RUNE_NAMES.forEach(name => {
        event.create(`kubejs:${name}`)
            .box(0, 0, 0, 16, 1, 16, true)
            .fullBlock(false)
            .notSolid()
            // The texture is assumed to be at kubejs:block/<name>
            .textureAll(`kubejs:block/${name}`)
            .renderType('cutout')
            .hardness(0.1)
            .resistance(0.1)
            .requiresTool(false)
            .soundType('wool')
            .lightLevel(0)
            .displayName(name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())); // pretty name
    });
});