const itemsToRemove = [
        'irons_spellbooks:affinity_ring',
        'irons_spellbooks:visibility_ring',
        'irons_spellbooks:heavy_chain_necklace',
        'irons_spellbooks:amethyst_resonance_charm',
        'irons_spellbooks:cooldown_ring',
        'irons_spellbooks:silver_ring',
        'irons_spellbooks:poisonward_ring',
        'irons_spellbooks:fireward_ring',
        'irons_spellbooks:frostward_ring',
        'traveloptics:sigil_of_the_spider_sorcerer',
        'traveloptics:nightstalkers_band',
        'traveloptics:amulet_of_spectral_shift',
        'traveloptics:bottled_raincloud',
        'cataclysm_spellbooks:fake_wudjets_staff'
    ]

LootJS.modifiers(event => {
    // Remove an item from all chests, blocks, entities, and fishing
    event.addLootTypeModifier(LootType.CHEST, LootType.BLOCK, LootType.ENTITY, LootType.FISHING)
        .removeLoot("irons_spellbooks:affinity_ring");
});