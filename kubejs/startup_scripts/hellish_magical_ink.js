// ── Startup Script: Hellish Magical Ink ────────────────────────
// Place this file in: kubejs/startup_scripts/hellish_magical_ink.js
// ───────────────────────────────────────────────────────────────

StartupEvents.registry('item', event => {
    event.create('kubejs:hellish_magical_ink')
        .maxStackSize(1)
        .maxDamage(64)
        .displayName('Hellish Magical Ink')
})

StartupEvents.registry('block', event => {
    const IntProperty = Java.loadClass('net.minecraft.world.level.block.state.properties.IntegerProperty')
    const inkStateProp = IntProperty.create('ink_state', 0, 3)

    event.create('kubejs:hellish_connected_ink')
        .property(inkStateProp)
        .displayName('Hellish Connected Ink')
        .hardness(0.3)
        .resistance(0.3)
        .noCollision()
        .transparent(true)
        .noDrops()
        .renderType('cutout')
})
