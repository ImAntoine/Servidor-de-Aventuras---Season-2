// wandering magician armor recipes
ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:wandering_magician_helmet'})
  event.shaped('irons_spellbooks:wandering_magician_helmet', [
    'AAA',
    'BCB'
  ], {
    A: 'minecraft:blue_dye',
    B: 'minecraft:gold_ingot',
    C: 'minecraft:leather_helmet'
  })
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:wandering_magician_chestplate'})
  event.shaped('irons_spellbooks:wandering_magician_chestplate', [
    'AAA',
    'BCB',
    ' A '
  ], {
    A: 'minecraft:blue_dye',
    B: 'minecraft:gold_ingot',
    C: 'minecraft:leather_chestplate'
  })
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:wandering_magician_leggings'})
  event.shaped('irons_spellbooks:wandering_magician_leggings', [
    'AAA',
    'BCB'
  ], {
    A: 'minecraft:blue_dye',
    B: 'minecraft:gold_ingot',
    C: 'minecraft:leather_leggings'
  })
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:wandering_magician_boots'})
  event.shaped('irons_spellbooks:wandering_magician_boots', [
    'ABA',
    'C C'
  ], {
    A: 'minecraft:blue_dye',
    B: 'minecraft:leather_boots',
    C: 'minecraft:gold_ingot'
  })
})


// pumpkin armor recipes

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:pumpkin_helmet'})
  event.shaped('irons_spellbooks:pumpkin_helmet', [
    'ABA',
    'CDC'
  ], {
    A: 'minecraft:hay_block',
    B: 'minecraft:carved_pumpkin',
    C: 'minecraft:diamond',
    D: 'apprenticecodex:apprentice_mage_scarf'
  })
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:pumpkin_chestplate'})
  event.shaped('irons_spellbooks:pumpkin_chestplate', [
    'ABA',
    'ACA',
    'AAA'
  ], {
    A: 'minecraft:diamond',
    B: 'minecraft:carved_pumpkin',
    C: 'apprenticecodex:apprentice_mage_torso'
  })
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:pumpkin_leggings'})
  event.shaped('irons_spellbooks:pumpkin_leggings', [
    'ABA',
    'ACA',
    'A A'
  ], {
    A: 'minecraft:diamond',
    B: 'minecraft:carved_pumpkin',
    C: 'apprenticecodex:apprentice_mage_leggings'
  })
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:pumpkin_boots'})
  event.shaped('irons_spellbooks:pumpkin_boots', [
    'ABA',
    'ACA'
  ], {
    A: 'minecraft:diamond',
    B: 'minecraft:carved_pumpkin',
    C: 'apprenticecodex:apprentice_mage_boots'
  })
})


// enchantress armor recipes

ServerEvents.recipes(event => {
  event.remove({output: 'apprenticecodex:enchantress_hat'})
  event.shaped('apprenticecodex:enchantress_hat', [
    ' A ',
    'ABA',
    'C C'
  ], {
    A: 'create:crimsite',
    B: 'cataclysm:blessed_amethyst_crab_meat',
    C: 'minecells:monster_cell'
  })
})

ServerEvents.recipes(event => {
  event.remove({output: 'apprenticecodex:enchantress_robe'})
  event.shaped('apprenticecodex:enchantress_robe', [
    'AAA',
    'BCB',
    ' B '
  ], {
    A: 'create:crimsite',
    B: 'minecells:monster_cell',
    C: 'cataclysm:blessed_amethyst_crab_meat'
  })
})

ServerEvents.recipes(event => {
  event.remove({output: 'apprenticecodex:enchantress_leggings'})
  event.shaped('apprenticecodex:enchantress_leggings', [
    'ABA',
    'A A',
    'C C'
  ], {
    A: 'create:crimsite',
    B: 'cataclysm:blessed_amethyst_crab_meat',
    C: 'minecells:monster_cell'
  })
})

ServerEvents.recipes(event => {
  event.remove({output: 'apprenticecodex:enchantress_boots'})
  event.shaped('apprenticecodex:enchantress_boots', [
    'ABA',
    'C C'
  ], {
    A: 'create:crimsite',
    B: 'cataclysm:blessed_amethyst_crab_meat',
    C: 'minecells:monster_cell'
  })
})


// wizard armor recipes

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:wizard_helmet'})
  event.shaped('irons_spellbooks:wizard_helmet', [
    'ABA',
    'C C'
  ], {
    A: 'minecells:arcane_goo',
    B: 'minecells:boss_stem_cell',
    C: 'minecells:monsters_eye'
  })
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:wizard_hat'})
  event.shaped('irons_spellbooks:wizard_hat', [
    'ABA',
    'C C'
  ], {
    A: 'minecells:monsters_eye',
    B: 'minecells:boss_stem_cell',
    C: 'minecells:arcane_goo'
  })
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:wizard_chestplate'})
  event.shaped('irons_spellbooks:wizard_chestplate', [
    'A A',
    'BCB',
    'BBB'
  ], {
    A: 'minecells:molten_chunk',
    B: 'minecells:cell_infused_steel',
    C: 'minecells:boss_stem_cell'
  })
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:wizard_leggings'})
  event.shaped('irons_spellbooks:wizard_leggings', [
    'ABA',
    'A A',
    'C C'
  ], {
    A: 'minecells:cell_infused_steel',
    B: 'minecells:boss_stem_cell',
    C: 'minecells:buzzcutter_fang'
  })
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:wizard_boots'})
  event.shaped('irons_spellbooks:wizard_boots', [
    'ABA',
    'C C'
  ], {
    A: 'minecells:cell_infused_steel',
    B: 'minecells:boss_stem_cell',
    C: 'minecells:guts'
  })
})


// cultist armor recipes

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:cultist_helmet'})  
  event.shapeless('irons_spellbooks:cultist_helmet', [
    'irons_spellbooks:wizard_helmet',
    'irons_spellbooks:blood_rune',
    'minecells:sewer_calamari'
  ])
  event.shapeless('irons_spellbooks:cultist_helmet', [
    'irons_spellbooks:wizard_hat',
    'irons_spellbooks:blood_rune',
    'minecells:sewer_calamari'
  ])
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:cultist_chestplate'})
  event.shapeless('irons_spellbooks:cultist_chestplate', [
    'irons_spellbooks:wizard_chestplate',
    'irons_spellbooks:blood_rune',
    'minecells:sewer_calamari'
  ]) 
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:cultist_leggings'})
  event.shapeless('irons_spellbooks:cultist_leggings', [
    'irons_spellbooks:wizard_leggings',
    'irons_spellbooks:blood_rune',
    'minecells:sewer_calamari'
  ])
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:cultist_boots'})
  event.shapeless('irons_spellbooks:cultist_boots', [
    'irons_spellbooks:wizard_boots',
    'irons_spellbooks:blood_rune',
    'minecells:sewer_calamari'
  ])
})


// cryomancer armor recipes

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:cryomancer_helmet'})  
  event.shapeless('irons_spellbooks:cryomancer_helmet', [
    'irons_spellbooks:wizard_helmet',
    'irons_spellbooks:ice_rune',
    'minecells:sewer_calamari'
  ])
  event.shapeless('irons_spellbooks:cryomancer_helmet', [
    'irons_spellbooks:wizard_hat',
    'irons_spellbooks:ice_rune',
    'minecells:sewer_calamari'
  ])
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:cryomancer_chestplate'})
  event.shapeless('irons_spellbooks:cryomancer_chestplate', [
    'irons_spellbooks:wizard_chestplate',
    'irons_spellbooks:ice_rune',
    'minecells:sewer_calamari'
  ]) 
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:cryomancer_leggings'})
  event.shapeless('irons_spellbooks:cryomancer_leggings', [
    'irons_spellbooks:wizard_leggings',
    'irons_spellbooks:ice_rune',
    'minecells:sewer_calamari'
  ])
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:cryomancer_boots'})
  event.shapeless('irons_spellbooks:cryomancer_boots', [
    'irons_spellbooks:wizard_boots',
    'irons_spellbooks:ice_rune',
    'minecells:sewer_calamari'
  ])
})


// pyromancer armor recipes

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:pyromancer_helmet'})  
  event.shapeless('irons_spellbooks:pyromancer_helmet', [
    'irons_spellbooks:wizard_helmet',
    'irons_spellbooks:fire_rune',
    'minecells:sewer_calamari'
  ])
  event.shapeless('irons_spellbooks:pyromancer_helmet', [
    'irons_spellbooks:wizard_hat',
    'irons_spellbooks:fire_rune',
    'minecells:sewer_calamari'
  ])
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:pyromancer_chestplate'})
  event.shapeless('irons_spellbooks:pyromancer_chestplate', [
    'irons_spellbooks:wizard_chestplate',
    'irons_spellbooks:fire_rune',
    'minecells:sewer_calamari'
  ]) 
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:pyromancer_leggings'})
  event.shapeless('irons_spellbooks:pyromancer_leggings', [
    'irons_spellbooks:wizard_leggings',
    'irons_spellbooks:fire_rune',
    'minecells:sewer_calamari'
  ])
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:pyromancer_boots'})
  event.shapeless('irons_spellbooks:pyromancer_boots', [
    'irons_spellbooks:wizard_boots',
    'irons_spellbooks:fire_rune',
    'minecells:sewer_calamari'
  ])
})


// plagued armor recipes

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:plagued_helmet'})  
  event.shapeless('irons_spellbooks:plagued_helmet', [
    'irons_spellbooks:wizard_helmet',
    'irons_spellbooks:nature_rune',
    'minecells:sewer_calamari'
  ])
  event.shapeless('irons_spellbooks:plagued_helmet', [
    'irons_spellbooks:wizard_hat',
    'irons_spellbooks:nature_rune',
    'minecells:sewer_calamari'
  ])
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:plagued_chestplate'})
  event.shapeless('irons_spellbooks:plagued_chestplate', [
    'irons_spellbooks:wizard_chestplate',
    'irons_spellbooks:nature_rune',
    'minecells:sewer_calamari'
  ]) 
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:plagued_leggings'})
  event.shapeless('irons_spellbooks:plagued_leggings', [
    'irons_spellbooks:wizard_leggings',
    'irons_spellbooks:nature_rune',
    'minecells:sewer_calamari'
  ])
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:plagued_boots'})
  event.shapeless('irons_spellbooks:plagued_boots', [
    'irons_spellbooks:wizard_boots',
    'irons_spellbooks:nature_rune',
    'minecells:sewer_calamari'
  ])
})


// shadowwalker armor recipes

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:shadowwalker_helmet'})  
  event.shapeless('irons_spellbooks:shadowwalker_helmet', [
    'irons_spellbooks:wizard_helmet',
    'irons_spellbooks:ender_rune',
    'minecells:sewer_calamari'
  ])
  event.shapeless('irons_spellbooks:shadowwalker_helmet', [
    'irons_spellbooks:wizard_hat',
    'irons_spellbooks:ender_rune',
    'minecells:sewer_calamari'
  ])
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:shadowwalker_chestplate'})
  event.shapeless('irons_spellbooks:shadowwalker_chestplate', [
    'irons_spellbooks:wizard_chestplate',
    'irons_spellbooks:ender_rune',
    'minecells:sewer_calamari'
  ]) 
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:shadowwalker_leggings'})
  event.shapeless('irons_spellbooks:shadowwalker_leggings', [
    'irons_spellbooks:wizard_leggings',
    'irons_spellbooks:ender_rune',
    'minecells:sewer_calamari'
  ])
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:shadowwalker_boots'})
  event.shapeless('irons_spellbooks:shadowwalker_boots', [
    'irons_spellbooks:wizard_boots',
    'irons_spellbooks:ender_rune',
    'minecells:sewer_calamari'
  ])
})


// electromancer armor recipes

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:electromancer_helmet'})  
  event.shapeless('irons_spellbooks:electromancer_helmet', [
    'irons_spellbooks:wizard_helmet',
    'irons_spellbooks:lightning_rune',
    'minecells:sewer_calamari'
  ])
  event.shapeless('irons_spellbooks:electromancer_helmet', [
    'irons_spellbooks:wizard_hat',
    'irons_spellbooks:lightning_rune',
    'minecells:sewer_calamari'
  ])
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:electromancer_chestplate'})
  event.shapeless('irons_spellbooks:electromancer_chestplate', [
    'irons_spellbooks:wizard_chestplate',
    'irons_spellbooks:lightning_rune',
    'minecells:sewer_calamari'
  ]) 
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:electromancer_leggings'})
  event.shapeless('irons_spellbooks:electromancer_leggings', [
    'irons_spellbooks:wizard_leggings',
    'irons_spellbooks:lightning_rune',
    'minecells:sewer_calamari'
  ])
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:electromancer_boots'})
  event.shapeless('irons_spellbooks:electromancer_boots', [
    'irons_spellbooks:wizard_boots',
    'irons_spellbooks:lightning_rune',
    'minecells:sewer_calamari'
  ])
})

// archevoker armor recipes

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:archevoker_helmet'})  
  event.shapeless('irons_spellbooks:archevoker_helmet', [
    'irons_spellbooks:wizard_helmet',
    'irons_spellbooks:evocation_rune',
    'minecells:sewer_calamari'
  ])
  event.shapeless('irons_spellbooks:archevoker_helmet', [
    'irons_spellbooks:wizard_hat',
    'irons_spellbooks:evocation_rune',
    'minecells:sewer_calamari'
  ])
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:archevoker_chestplate'})
  event.shapeless('irons_spellbooks:archevoker_chestplate', [
    'irons_spellbooks:wizard_chestplate',
    'irons_spellbooks:evocation_rune',
    'minecells:sewer_calamari'
  ]) 
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:archevoker_leggings'})
  event.shapeless('irons_spellbooks:archevoker_leggings', [
    'irons_spellbooks:wizard_leggings',
    'irons_spellbooks:evocation_rune',
    'minecells:sewer_calamari'
  ])
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:archevoker_boots'})
  event.shapeless('irons_spellbooks:archevoker_boots', [
    'irons_spellbooks:wizard_boots',
    'irons_spellbooks:evocation_rune',
    'minecells:sewer_calamari'
  ])
})


// priest armor recipes

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:priest_helmet'})  
  event.shapeless('irons_spellbooks:priest_helmet', [
    'irons_spellbooks:wizard_helmet',
    'irons_spellbooks:holy_rune',
    'minecells:sewer_calamari'
  ])
  event.shapeless('irons_spellbooks:priest_helmet', [
    'irons_spellbooks:wizard_hat',
    'irons_spellbooks:holy_rune',
    'minecells:sewer_calamari'
  ])
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:priest_chestplate'})
  event.shapeless('irons_spellbooks:priest_chestplate', [
    'irons_spellbooks:wizard_chestplate',
    'irons_spellbooks:holy_rune',
    'minecells:sewer_calamari'
  ]) 
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:priest_leggings'})
  event.shapeless('irons_spellbooks:priest_leggings', [
    'irons_spellbooks:wizard_leggings',
    'irons_spellbooks:holy_rune',
    'minecells:sewer_calamari'
  ])
})

ServerEvents.recipes(event => {
  event.remove({output: 'irons_spellbooks:priest_boots'})
  event.shapeless('irons_spellbooks:priest_boots', [
    'irons_spellbooks:wizard_boots',
    'irons_spellbooks:holy_rune',
    'minecells:sewer_calamari'
  ])
})

// stealth_rune armor recipes

ServerEvents.recipes(event => {
  event.remove({output: 'apprenticecodex:stealth_rune_armor_head'})  
  event.shapeless('apprenticecodex:stealth_rune_armor_head', [
    'irons_spellbooks:wizard_helmet',
    'cataclysm_spellbooks:abyssal_rune',
    'cataclysm_spellbooks:technomancy_rune',
    'minecells:sewer_calamari'
  ])
  event.shapeless('apprenticecodex:stealth_rune_armor_head', [
    'irons_spellbooks:wizard_hat',
    'cataclysm_spellbooks:abyssal_rune',
    'cataclysm_spellbooks:technomancy_rune',
    'minecells:sewer_calamari'
  ])
})

ServerEvents.recipes(event => {
  event.remove({output: 'apprenticecodex:stealth_rune_armor_body'})  
  event.shapeless('apprenticecodex:stealth_rune_armor_body', [
    'irons_spellbooks:wizard_chestplate',
    'cataclysm_spellbooks:abyssal_rune',
    'cataclysm_spellbooks:technomancy_rune',
    'minecells:sewer_calamari'
  ]) 
})

ServerEvents.recipes(event => {
  event.remove({output: 'apprenticecodex:stealth_rune_armor_leg'})
  event.shapeless('apprenticecodex:stealth_rune_armor_leg', [
    'irons_spellbooks:wizard_leggings',
    'cataclysm_spellbooks:abyssal_rune',
    'cataclysm_spellbooks:technomancy_rune',
    'minecells:sewer_calamari'
  ])
})

ServerEvents.recipes(event => {
  event.remove({output: 'apprenticecodex:stealth_rune_armor_foot'})
  event.shapeless('apprenticecodex:stealth_rune_armor_foot', [
    'irons_spellbooks:wizard_boots',
    'cataclysm_spellbooks:abyssal_rune',
    'cataclysm_spellbooks:technomancy_rune',
    'minecells:sewer_calamari'
  ])
})


// chromatic_magia armor recipes

ServerEvents.recipes(event => {
  event.remove({output: 'apprenticecodex:chromatic_magia_dress_hat'})  
  event.shapeless('apprenticecodex:chromatic_magia_dress_hat', [
    'irons_spellbooks:wizard_helmet',
    'traveloptics:aqua_rune',
    'minecells:sewer_calamari'
  ])
  event.shapeless('apprenticecodex:chromatic_magia_dress_hat', [
    'irons_spellbooks:wizard_hat',
    'traveloptics:aqua_rune',
    'minecells:sewer_calamari'
  ])
})

ServerEvents.recipes(event => {
  event.remove({output: 'apprenticecodex:chromatic_magia_dress_coat'})  
  event.shapeless('apprenticecodex:chromatic_magia_dress_coat', [
    'irons_spellbooks:wizard_chestplate',
    'traveloptics:aqua_rune',
    'minecells:sewer_calamari'
  ]) 
})

ServerEvents.recipes(event => {
  event.remove({output: 'apprenticecodex:chromatic_magia_dress_leggings'})
  event.shapeless('apprenticecodex:chromatic_magia_dress_leggings', [
    'irons_spellbooks:wizard_leggings',
    'traveloptics:aqua_rune',
    'minecells:sewer_calamari'
  ])
})

ServerEvents.recipes(event => {
  event.remove({output: 'apprenticecodex:chromatic_magia_dress_boots'})
  event.shapeless('apprenticecodex:chromatic_magia_dress_boots', [
    'irons_spellbooks:wizard_boots',
    'traveloptics:aqua_rune',
    'minecells:sewer_calamari'
  ])
})