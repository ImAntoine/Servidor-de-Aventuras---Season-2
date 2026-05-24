// kubejs/startup_scripts/hide_from_creative.js

// Use the correct registry name: "creative_mode_tab"
let allCreativeTabs = Utils.getRegistryIds("creative_mode_tab");

allCreativeTabs.forEach(tabId => {
    StartupEvents.modifyCreativeTab(tabId, event => {
        // Remove items from the tab itself
        event.remove('#kubejs:hidden_items');
        
        // Also remove them from the search results within the tab (optional)
        event.removeSearch('#kubejs:hidden_items');
    });
});