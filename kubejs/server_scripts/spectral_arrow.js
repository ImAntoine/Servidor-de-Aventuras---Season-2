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
