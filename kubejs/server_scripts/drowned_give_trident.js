EntityEvents.drops(event => {
    // 1. Check if the entity is a Drowned
    if (event.entity.type !== 'minecraft:drowned') return;

    // 2. Check if the Drowned is holding a Trident in its main hand
    let heldItem = event.entity.mainHandItem;
    if (heldItem.id !== 'minecraft:trident') return;

    // 3. Check if a trident is ALREADY in the drops (to prevent duplicates)
    // The vanilla game has a small chance to drop it. We don't want to give 2 tridents.
    let alreadyDropping = false;
    
    event.drops.forEach(drop => {
        if (drop.item.id === 'minecraft:trident') {
            alreadyDropping = true;
        }
    });

    // 4. If it's not in the drops list yet, add the exact item the drowned was holding
    if (!alreadyDropping) {
        // We use heldItem.copy() so we get the exact durability and enchantments
        event.addDrop(heldItem.copy());
    }
});