ServerEvents.recipes(event => {
    event.remove({output: 'minecraft:enchanting_table'})
    event.shaped(
 Item.of('minecraft:enchanting_table', 1),
 [
' B ',
'DEF',
'GHI'
 ],
 {
 
B:'minecraft:book',
 
D:'minecraft:diamond',
E:'minecraft:obsidian',
F:'minecraft:diamond',
G:'minecraft:obsidian',
H:'transmog:void_fragment',
I:'minecraft:obsidian',
})})
