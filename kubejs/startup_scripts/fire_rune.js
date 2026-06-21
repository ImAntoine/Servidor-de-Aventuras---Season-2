// KubeJS Startup Script — Custom Carpet
// File location: kubejs/startup_scripts/custom_carpet.js
// Requires: KubeJS for Forge 1.20.1

StartupEvents.registry('block', event => {
    event.create('kubejs:fire_rune')
        // Carpet is 1/16th of a block tall
        .box(0, 0, 0, 16, 1, 16, true)
        // REQUIRED when using .box() — disables full-block render optimisations
        // that cause the texture to not render correctly
        .fullBlock(false)
        // Tell the renderer this isn't a solid cube
        .notSolid()
        // Point directly at the texture so KubeJS doesn't generate a blank model
        .textureAll('kubejs:block/fire_rune')
        // Use cutout so the 1px edges don't z-fight with the floor
        .renderType('cutout')
        // Carpet properties
        .hardness(0.1)
        .resistance(0.1)
        .requiresTool(false)
        .soundType('wool')
        .lightLevel(0)
        .displayName('Fire Rune')
})