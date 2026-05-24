ServerEvents.recipes(event => {
    // Remove all recipes that output any item in the hidden_items tag
    event.remove({ output: '#kubejs:hidden_items' });
})

LootJS.modifiers(event => {
    // This applies to EVERY loot table in the game
    event.addLootTableModifier(/.*/).removeLoot('#kubejs:hidden_items');
});