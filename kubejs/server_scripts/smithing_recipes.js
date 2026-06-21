ServerEvents.recipes(event => {
  event.remove({ output: 'impaled:hellfork' })

  event.custom({
    type: 'minecraft:smithing_transform',
    template: { item: 'minecraft:netherite_ingot' }, // required in 1.20+
    base: { item: 'minecraft:trident' },
    addition: { item: 'impaled:ancient_trident' },
    result: { item: 'impaled:hellfork' }
  })
})

ServerEvents.recipes(event => {
  event.remove({ output: 'impaled:atlan' })

  event.custom({
    type: 'minecraft:smithing_transform',
    template: { item: 'minecraft:enchanted_golden_apple' }, 
    base: { item: 'minecraft:trident' },
    addition: { item: 'minecraft:gold_block' },
    result: { item: 'impaled:atlan' }
  })
})
