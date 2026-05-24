ItemEvents.modification(event => {
    event.modify('simplest_paxels:wooden_paxel', item => {
        item.maxDamage = 0
    })

    event.modify('minecraft:wooden_shovel', item => {
        item.maxDamage = 0
    })

    event.modify('minecraft:wooden_pickaxe', item => {
        item.maxDamage = 0
    })

    event.modify('minecraft:wooden_axe', item => {
        item.maxDamage = 0
    })
    
    event.modify('minecraft:wooden_sword', item => {
        item.maxDamage = 0
    })

    event.modify('minecraft:wooden_spear', item => {
        item.maxDamage = 0
    })
})