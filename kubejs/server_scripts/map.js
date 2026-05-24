ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:map' })
    event.shaped(
 Item.of('minecraft:map', 1),
 [
'ABC',
'DE ',
'   '
 ],
 {
A:'minecraft:paper',
B:'minecraft:paper',
C:'minecraft:paper',
D:'minecraft:feather',
E:'minecraft:ink_sac',
 
 
 
 
})})
