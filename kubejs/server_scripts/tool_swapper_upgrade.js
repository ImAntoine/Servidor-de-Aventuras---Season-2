ServerEvents.recipes(event => {
    event.remove({output: 'sophisticatedbackpacks:tool_swapper_upgrade'})
    event.shaped(
 Item.of('sophisticatedbackpacks:tool_swapper_upgrade', 1),
 [
'ABC',
'DEF',
'GHI'
 ],
 {
A:'minecraft:redstone',
B:'minecraft:stone_sword',
C:'minecraft:redstone',
D:'minecraft:stone_pickaxe',
E:'sophisticatedbackpacks:upgrade_base',
F:'minecraft:stone_axe',
G:'minecraft:iron_ingot',
H:'minecraft:stone_shovel',
I:'minecraft:iron_ingot',
})})
