// ── Server Script: Magical Ink ─────────────────────────────────
// Place this file in: kubejs/server_scripts/magical_ink.js
// ───────────────────────────────────────────────────────────────

BlockEvents.rightClicked('*', event => {
    const player = event.player
    if (!player) return
    if (event.hand !== 'MAIN_HAND') return

    const block = event.block
    const item  = player.mainHandItem

    // ── Cycle connected_ink texture ──
    if (block.id === 'kubejs:connected_ink') {
        const pos     = block.pos
        const current = parseInt(block.properties['ink_state']) || 0
        const next    = (current + 1) % 4
        block.set('minecraft:air')
        event.level.getBlock(pos).set('kubejs:connected_ink', { ink_state: String(next) })
        event.cancel()
        return
    }

    // ── Place connected_ink with magical_ink item ──
    if (!item || item.id !== 'kubejs:magical_ink') return

    const placePos = block.pos.relative(event.facing)
    const target   = event.level.getBlock(placePos)
    if (target.id !== 'minecraft:air') return

    target.set('kubejs:connected_ink')

    if (!player.creative) {
        item.damageValue += 1
        if (item.damageValue >= item.maxDamage) item.count = 0
    }

    event.cancel()
})
