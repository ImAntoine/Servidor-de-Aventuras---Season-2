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
