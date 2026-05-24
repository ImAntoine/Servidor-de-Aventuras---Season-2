ServerEvents.recipes(event => {
  // Remove ALL recipes that create copper_rail
  event.remove({output: 'royalvariations:royal_arrow'})
  
})

ServerEvents.recipes(event => {event.shaped(
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