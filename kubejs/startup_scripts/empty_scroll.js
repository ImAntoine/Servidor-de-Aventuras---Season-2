// ── Startup Script: Empty Scroll ───────────────────────────────
// Registers the empty_scroll item used to activate rune circles.
// Place this file in: kubejs/startup_scripts/empty_scroll.js
// ───────────────────────────────────────────────────────────────

StartupEvents.registry('item', event => {
    event.create('kubejs:empty_scroll')
        .displayName('Empty Scroll')
        .maxStackSize(16)
        .tag('kubejs:scrolls')
})
