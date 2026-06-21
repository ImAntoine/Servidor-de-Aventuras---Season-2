ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar(
            Item.of('minecraft:trident')
                .enchant('minecraft:channeling', 1)
                .strongNBT()                        // must have Channeling I exactly
        )
        .itemOutput(
            Item.of('minecraft:trident')            // plain trident, no NBT
        )
        .input('4x #forge:rods/copper')            // use 4 copper rods (any mod)
        // If the tag above doesn't work, replace with:
        // .input('4x create:copper_rod')
        .recipeTime(100)
        .id('thunder_ritual');
});

// When the ritual finishes, start a thunderstorm
SummoningRituals.complete(event => {
    if (!event.player) return;                     // safety: ignore automation
    if (event.recipe.getId().toString() == 'thunder_ritual') {
        event.server.runCommandSilent('weather thunder');
    }
});