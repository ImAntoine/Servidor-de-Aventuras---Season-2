// ── Server Script: Hellish Magical Ink ─────────────────────────
// Place this file in: kubejs/server_scripts/hellish_magical_ink.js
// ───────────────────────────────────────────────────────────────

BlockEvents.rightClicked('*', event => {
    const player = event.player
    if (!player) return
    if (event.hand !== 'MAIN_HAND') return

    const block = event.block
    const item  = player.mainHandItem

    // ── Cycle hellish_connected_ink texture ──
    if (block.id === 'kubejs:hellish_connected_ink') {
        const pos     = block.pos
        const current = parseInt(block.properties['ink_state']) || 0
        const next    = (current + 1) % 4
        block.set('minecraft:air')
        event.level.getBlock(pos).set('kubejs:hellish_connected_ink', { ink_state: String(next) })
        event.cancel()
        return
    }

    // ── Place hellish_connected_ink with hellish_magical_ink item ──
    if (!item || item.id !== 'kubejs:hellish_magical_ink') return

    const placePos = block.pos.relative(event.facing)
    const target   = event.level.getBlock(placePos)
    if (target.id !== 'minecraft:air') return

    target.set('kubejs:hellish_connected_ink')

    if (!player.creative) {
        item.damageValue += 1
        if (item.damageValue >= item.maxDamage) item.count = 0
    }

    event.cancel()
})
