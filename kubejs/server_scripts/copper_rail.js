ServerEvents.recipes(event => {
  event.remove({ output: 'modernminecarts:copper_rail' })

  event.shaped(
    Item.of('modernminecarts:copper_rail', 6),
    [
      'A C',
      'DEF',
      'GHI'
    ],
    {
      A:'minecraft:copper_ingot',
      C:'minecraft:copper_ingot',
      D:'minecraft:copper_ingot',
      E:'minecraft:stick',
      F:'minecraft:copper_ingot',
      G:'minecraft:copper_ingot',
      H:'minecraft:redstone',
      I:'minecraft:copper_ingot',
    }
  )
})