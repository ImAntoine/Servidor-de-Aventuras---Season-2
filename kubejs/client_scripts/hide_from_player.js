// kubejs/client_scripts/hide_from_jei.js (add this section)
JEIEvents.hideItems(event => {
    event.hide('#kubejs:hidden_items');
});

ItemEvents.modification(event => {
    event.modify('#kubejs:hidden_items', item => {
        item.creativeTab = null;
    });
});
