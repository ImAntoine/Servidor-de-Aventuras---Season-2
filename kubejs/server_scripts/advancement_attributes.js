// ── Server Script: Advancement Attributes ──────────────────────
// Grants permanent attributes when specific advancements are earned.
// Place this file in: kubejs/server_scripts/advancement_attributes.js
// ───────────────────────────────────────────────────────────────

const ADVANCEMENT_ATTRIBUTES = {
    'restrictedportals:root': [
        { id: 'irons_spellbooks:max_mana',   value: 0   },
        { id: 'attributeslib:crit_chance',   value: 0   },
        { id: 'irons_spellbooks:mana_regen', value: 0.5 },
    ],
    // 'somemod:some_advancement': [
    //     { id: 'somemod:some_attribute', value: 1 },
    // ],
}

// ── Helpers ────────────────────────────────────────────────────

function grantPersistentAttribute(player, attrId, value) {
    const data = player.persistentData
    if (!data.contains('persistent_attributes')) data.put('persistent_attributes', {})
    data.getCompound('persistent_attributes').putString(attrId.replace(/:/g, '__'), String(value))
    player.runCommand(`attribute @s ${attrId} base set ${value}`)
}

function advancementKey(advId) {
    return 'adv__' + advId.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()
}

function hasGrantedAdvancement(player, advId) {
    const data = player.persistentData
    if (!data.contains('advancement_grants')) return false
    return data.getCompound('advancement_grants').contains(advancementKey(advId))
}

function markAdvancementGranted(player, advId) {
    const data = player.persistentData
    if (!data.contains('advancement_grants')) data.put('advancement_grants', {})
    data.getCompound('advancement_grants').putByte(advancementKey(advId), 1)
}

// Check every tracked advancement against what the player actually has,
// and grant attributes for any that are earned but not yet applied.
function checkAndApplyAdvancements(player) {
    Object.keys(ADVANCEMENT_ATTRIBUTES).forEach(advId => {
        // player.advancements.getOrStartProgress(...).isDone() is the reliable
        // KubeJS way to check if a player has completed an advancement.
        const adv = player.server.getAdvancements().getAdvancement(advId)
        if (!adv) return  // advancement doesn't exist (mod not installed)

        const isDone = player.advancements.getOrStartProgress(adv).isDone()
        if (!isDone) return

        if (hasGrantedAdvancement(player, advId)) return  // already applied

        ADVANCEMENT_ATTRIBUTES[advId].forEach(attr => {
            grantPersistentAttribute(player, attr.id, attr.value)
        })
        markAdvancementGranted(player, advId)
        player.tell('§b✦ Advancement unlocked new attributes! ✦')
    })
}

// ── Trigger 1: advancement earned while online ─────────────────
// The advancement event fires at login for advancements loaded from save,
// so we schedule a delay to ensure the player is fully initialised.
PlayerEvents.advancement(event => {
    const advId  = event.advancement.id
    const player = event.player
    if (!ADVANCEMENT_ATTRIBUTES[advId]) return

    // 60-tick delay (3 seconds) — gives the server time to fully load the player
    event.server.scheduleInTicks(60, () => {
        checkAndApplyAdvancements(player)
    })
})

// ── Trigger 2: login check — catches advancements earned in a ──
// previous session that may not fire the event again on rejoin.
PlayerEvents.loggedIn(event => {
    // 100-tick delay (5 seconds) — longer than the advancement delay
    // to ensure attribute commands land after the player is fully loaded
    event.server.scheduleInTicks(100, () => {
        checkAndApplyAdvancements(event.player)
    })
})
