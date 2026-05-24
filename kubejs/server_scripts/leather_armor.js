ServerEvents.recipes(event => {
    event.remove({output: 'minecraft:leather_horse_armor'})
    event.shaped(
 Item.of('minecraft:leather_horse_armor', 1),
 [
'A C',
'DEF',
'G I'
 ],
 {
A:'minecraft:rabbit_hide',
 
C:'minecraft:rabbit_hide',
D:'minecraft:rabbit_hide',
E:'minecraft:rabbit_hide',
F:'minecraft:rabbit_hide',
G:'minecraft:rabbit_hide',
 
I:'minecraft:rabbit_hide',
})})

ServerEvents.recipes(event => {
    event.remove({output: 'minecraft:leather_leggings'})
    event.shaped(
 Item.of('minecraft:leather_leggings', 1),
 [
'ABC',
'D F',
'G I'
 ],
 {
A:'minecraft:rabbit_hide',
B:'minecraft:rabbit_hide',
C:'minecraft:rabbit_hide',
D:'minecraft:rabbit_hide',
 
F:'minecraft:rabbit_hide',
G:'minecraft:rabbit_hide',
 
I:'minecraft:rabbit_hide',
})})

ServerEvents.recipes(event => {
    event.remove({output: 'minecraft:leather_boots'})
    event.shaped(
 Item.of('minecraft:leather_boots', 1),
 [
'   ',
'D F',
'G I'
 ],
 {
 
 
 
D:'minecraft:rabbit_hide',
 
F:'minecraft:rabbit_hide',
G:'minecraft:rabbit_hide',
 
I:'minecraft:rabbit_hide',
})})

ServerEvents.recipes(event => {
    event.remove({output: 'minecraft:leather_chestplate'})
    event.shaped(
 Item.of('minecraft:leather_chestplate', 1),
 [
'A C',
'DEF',
'GHI'
 ],
 {
A:'minecraft:rabbit_hide',
 
C:'minecraft:rabbit_hide',
D:'minecraft:rabbit_hide',
E:'minecraft:rabbit_hide',
F:'minecraft:rabbit_hide',
G:'minecraft:rabbit_hide',
H:'minecraft:rabbit_hide',
I:'minecraft:rabbit_hide',
})})

ServerEvents.recipes(event => {
    event.remove({output: 'minecraft:leather_helmet'})
    event.shaped(
 Item.of('minecraft:leather_helmet', 1),
 [
'ABC',
'D F',
'   '
 ],
 {
A:'minecraft:rabbit_hide',
B:'minecraft:rabbit_hide',
C:'minecraft:rabbit_hide',
D:'minecraft:rabbit_hide',
 
F:'minecraft:rabbit_hide',
 
 
 
})})
