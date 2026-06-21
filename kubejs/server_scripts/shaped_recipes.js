ServerEvents.recipes(event => {
  event.remove({output: 'traveloptics:bottled_raincloud'})
  event.shaped('irons_spellbooks:silver_ring', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'minecraft:iron_ingot',
    B: 'irons_spellbooks:mithril_scrap'
  })
})

ServerEvents.recipes(event => {
  event.shaped('traveloptics:amulet_of_spectral_shift', [
    'ABA',
    'A A',
    ' C '
  ], {
    A: 'irons_spellbooks:arcane_essence',
    B: 'minecraft:echo_shard',
    C: 'minecraft:sculk_shrieker'
  })
})

ServerEvents.recipes(event => {
  event.shaped('irons_spellbooks:fireward_ring', [
    'A ',
    ' B'
  ], {
    A: 'minecraft:fire_charge',
    B: 'irons_spellbooks:mithril_scrap'
  })
})

ServerEvents.recipes(event => {
  event.shaped('cataclysm_spellbooks:fake_wudjets_staff', [
    'ABA',
    ' C ',
    ' D '
  ], {
    A: 'cataclysm:ancient_metal_nugget',
    B: 'cataclysm:ancient_metal_ingot',
    C: 'irons_spellbooks:ice_staff',
    D: 'cataclysm:koboleton_bone'
  })
})

ServerEvents.recipes(event => {
  event.remove({output: 'apprenticecodex:illuminate_stellar_staff'})
  event.shaped('apprenticecodex:illuminate_stellar_staff', [
    ' AB',
    ' CA',
    'D  '
  ], {
    A: 'minecraft:yellow_stained_glass',
    B: 'minecraft:golden_sword',
    C: 'irons_spellbooks:ice_staff',
    D: 'minecraft:diamond'
  })
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:copper_spell_book'})
  event.shaped('irons_spellbooks:copper_spell_book', [
    'ABC',
    'DCC',
    'ABC'
  ], {
    A: 'minecraft:copper_block',
    B: 'minecraft:gold_ingot',
    C: 'minecraft:paper',
    D: 'minecraft:string'
  })
})

ServerEvents.recipes(event => {
  event.shaped('apprenticecodex:isekai_travel_guidebook', [
    'ABA',
    'CDE',
    'ABA'
  ], {
    A: 'minecraft:copper_ingot',
    B: 'minecraft:iron_ingot',
    C: 'minecraft:apple',
    D: 'minecraft:book',
    E: 'minecraft:chest'
  })
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:ice_staff'})
  event.shaped('irons_spellbooks:ice_staff', [
    'A',
    'B',
    'C'
  ], {
    A: 'irons_spellbooks:permafrost_shard',
    B: 'irons_spellbooks:lightning_rod',
    C: 'irons_spellbooks:frosted_helve'
  })
})

ServerEvents.recipes(event => {
  event.remove({output: 'cataclysm_spellbooks:bloom_stone_staff'})
  event.shaped('cataclysm_spellbooks:bloom_stone_staff', [
    'ABA',
    ' C ',
    ' B '
  ], {
    A: 'cataclysm:amethyst_crab_shell',
    B: 'minecraft:amethyst_shard',
    C: 'irons_spellbooks:ice_staff'
  })
})

ServerEvents.recipes(event => {
  event.remove({output: 'traveloptics:bottled_raincloud'})
  event.shaped('traveloptics:bottled_raincloud', [
    'A',
    'A',
    'B'
  ], {
    A: 'irons_spellbooks:scroll',
    B: 'minecraft:glass_bottle'
  })
})

ServerEvents.recipes(event => {
    event.remove({output: 'sophisticatedbackpacks:tool_swapper_upgrade'})
    event.shaped(
 Item.of('sophisticatedbackpacks:tool_swapper_upgrade', 1),
 [
'ABA',
'DEF',
'GHG'
 ],
 {
A:'minecraft:redstone',
B:'minecraft:stone_sword',
D:'minecraft:stone_pickaxe',
E:'sophisticatedbackpacks:upgrade_base',
F:'minecraft:stone_axe',
G:'minecraft:iron_ingot',
H:'minecraft:stone_shovel',
})})


ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:spectral_arrow' })
    event.shaped(
 Item.of('minecraft:spectral_arrow', 12),
 [
'ABC',
'DEF',
'GHI'
 ],
 {
A:'minecraft:arrow',
B:'minecraft:arrow',
C:'minecraft:arrow',
D:'minecraft:arrow',
E:'minecraft:glow_berries',
F:'minecraft:arrow',
G:'minecraft:arrow',
H:'minecraft:arrow',
I:'minecraft:arrow',
})})


ServerEvents.recipes(event => {event.shaped(
 Item.of('minecraft:saddle', 1),
 [
'   ',
' E ',
'GHI'
 ],
 {
 
E:'minecraft:rabbit_hide',
G:'minecraft:rabbit_hide',
H:'minecraft:iron_ingot',
I:'minecraft:rabbit_hide',
})})


ServerEvents.recipes(event => {
  event.remove({output: 'royalvariations:royal_arrow'})
  event.shaped(
 Item.of('royalvariations:royal_arrow', 8),
 [
'ABC',
'DEF',
'GHI'
 ],
 {
A:'minecraft:arrow',
B:'minecraft:arrow',
C:'minecraft:arrow',
D:'minecraft:arrow',
E:'royalvariations:royal_bone_meal',
F:'minecraft:arrow',
G:'minecraft:arrow',
H:'minecraft:arrow',
I:'minecraft:arrow',
})})


ServerEvents.recipes(event => {event.shaped(
 Item.of('minecraft:rabbit_hide', 4),
 [
'   ',
' E ',
'   '
 ],
 {

E:'minecraft:leather',
})})


ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:map' })
    event.shaped(
 Item.of('minecraft:map', 1),
 [
'AAA',
'DE ',
'   '
 ],
 {
A:'minecraft:paper',
D:'minecraft:feather',
E:'minecraft:ink_sac',
})})


ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:lodestone' })
    event.shaped(
 Item.of('minecraft:lodestone', 1),
 [
'AAA',
'AEA',
'AAA'
 ],
 {
A:'minecraft:polished_basalt',
E:'minecraft:iron_ingot',
})})


ServerEvents.recipes(event => {
    event.remove({output: 'minecraft:leather_horse_armor'})
    event.shaped(
 Item.of('minecraft:leather_horse_armor', 1),
 [
'A A',
'AAA',
'A A'
 ],
 {
A:'minecraft:rabbit_hide',
})})

ServerEvents.recipes(event => {
    event.remove({output: 'minecraft:leather_leggings'})
    event.shaped(
 Item.of('minecraft:leather_leggings', 1),
 [
'AAA',
'A A',
'A A'
 ],
 {
A:'minecraft:rabbit_hide',
})})

ServerEvents.recipes(event => {
    event.remove({output: 'minecraft:leather_boots'})
    event.shaped(
 Item.of('minecraft:leather_boots', 1),
 [
'   ',
'D D',
'D D'
 ],
 {
 
 
 
D:'minecraft:rabbit_hide',
})})

ServerEvents.recipes(event => {
    event.remove({output: 'minecraft:leather_chestplate'})
    event.shaped(
 Item.of('minecraft:leather_chestplate', 1),
 [
'A A',
'AAA',
'AAA'
 ],
 {
A:'minecraft:rabbit_hide',
})})

ServerEvents.recipes(event => {
    event.remove({output: 'minecraft:leather_helmet'})
    event.shaped(
 Item.of('minecraft:leather_helmet', 1),
 [
'AAA',
'A A',
'   '
 ],
 {
A:'minecraft:rabbit_hide',
})})


ServerEvents.recipes(event => {
  event.remove({ output: 'modernminecarts:copper_rail' })

  event.shaped(
    Item.of('modernminecarts:copper_rail', 6),
    [
      'A A',
      'AEA',
      'AHA'
    ],
    {
      A:'minecraft:copper_ingot',
      E:'minecraft:stick',
      H:'minecraft:redstone',
    }
  )
})