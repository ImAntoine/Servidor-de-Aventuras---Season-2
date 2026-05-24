// Remove ScalingHealth crystals and shards from all mob kills and chest loot
LootJS.modifiers((event) => {
    // Remove from entity drops (all mobs)
    event.addLootTypeModifier(LootType.ENTITY)
        .removeLoot(Ingredient.of([
            'scalinghealth:heart_crystal',
            'scalinghealth:heart_crystal_shard',
            'scalinghealth:power_crystal',
            'scalinghealth:power_crystal_shard'
        ]));

    // Remove from chest loot (all structure chests)
    event.addLootTypeModifier(LootType.CHEST)
        .removeLoot(Ingredient.of([
            'scalinghealth:heart_crystal',
            'scalinghealth:heart_crystal_shard',
            'scalinghealth:power_crystal',
            'scalinghealth:power_crystal_shard'
        ]));
});