ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:lodestone' })
    event.shaped(
 Item.of('minecraft:lodestone', 1),
 [
'ABC',
'DEF',
'GHI'
 ],
 {
A:'minecraft:polished_basalt',
B:'minecraft:polished_basalt',
C:'minecraft:polished_basalt',
D:'minecraft:polished_basalt',
E:'minecraft:iron_ingot',
F:'minecraft:polished_basalt',
G:'minecraft:polished_basalt',
H:'minecraft:polished_basalt',
I:'minecraft:polished_basalt',
})})
