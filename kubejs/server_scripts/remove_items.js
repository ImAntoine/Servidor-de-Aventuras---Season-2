ServerEvents.recipes(event => {
    // Remove all recipes that output any item in the hidden_items tag
    event.remove({ output: '#kubejs:hidden_items' });
})

LootJS.modifiers(event => {
    // This applies to EVERY loot table in the game
    event.addLootTableModifier(/.*/).removeLoot('#kubejs:hidden_items');
});

ServerEvents.tags('item', event => {
    // Add all items from your tag to EMI's hidden tag
    event.add('c:hidden_from_recipe_viewers', '#kubejs:hidden_items');
});
