ServerEvents.recipes(event => {
    // 1. Just type your item IDs into this list
    const itemsToRemove = [
        'waystones:waystone',
        'waystones:mossy_waystone',
        'waystones:sandy_waystone',
        'waystones:deepslate_waystone',
        'waystones:blackstone_waystone',
        'waystones:end_stone_waystone',
        'irons_spellbooks:scroll_forge',
        'irons_spellbooks:fireward_ring'
    ];

    // 2. Loop through the list and delete the recipes automatically
    itemsToRemove.forEach(item => {
        event.remove({ output: item });
    });
});