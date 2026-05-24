// file: kubejs/server_scripts/pumpkin_to_enchantress.js
ServerEvents.recipes(event => {

  // Remove the original shaped recipes for pumpkin armor (so only smithing works)
  event.remove({ output: 'irons_spellbooks:pumpkin_helmet' });
  event.remove({ output: 'irons_spellbooks:pumpkin_chestplate' });
  event.remove({ output: 'irons_spellbooks:pumpkin_leggings' });
  event.remove({ output: 'irons_spellbooks:pumpkin_boots' });
  
    event.remove({ output: 'apprenticecodex:enchantress_hat' });
    event.remove({ output: 'apprenticecodex:enchantress_robe' });
    event.remove({ output: 'apprenticecodex:enchantress_leggings' });
    event.remove({ output: 'apprenticecodex:enchantress_boots' });

    event.shaped(
        Item.of('irons_spellbooks:pumpkin_helmet', '{Damage:0}').strongNBT(),
        ['ABA', 'BCB', 'ADA'],
        {A: 'minecraft:diamond', B: 'irons_spellbooks:magic_cloth', C: 'macabre:brain', D: 'minecraft:carved_pumpkin'}
    ).id('credit:generated/pumpkin_helmet');  

    event.shaped(
        Item.of('irons_spellbooks:pumpkin_chestplate', '{Damage:0}').strongNBT(),
        ['A A', 'BCB', 'BDB'],
        {A: 'minecraft:hay_block', B: 'irons_spellbooks:magic_cloth', C: 'macabre:brain', D: 'minecraft:leather'}
    ).id('credit:generated/pumpkin_chestplate');
    
    event.shaped(
        Item.of('irons_spellbooks:pumpkin_leggings', '{Damage:0,jumps:0.0d}').strongNBT(),
        ['ABA', 'C C', 'D D'],
        {A: 'minecraft:hay_block', B: 'macabre:brain', C: 'irons_spellbooks:magic_cloth', D: 'minecraft:leather'}
    ).id('credit:generated/pumpkin_leggings');    

  // Upgrade pumpkin armor to enchantress gear (smithing table)
  event.smithing(
    'apprenticecodex:enchantress_hat',
    'irons_spellbooks:pumpkin_helmet',
    'macabre:skull',
    'mca:rose_gold_block'
  ).id('credit:generated/smithing/enchantress_hat');

  event.smithing(
    'apprenticecodex:enchantress_robe',
    'irons_spellbooks:pumpkin_chestplate',
    'macabre:skull',
    'mca:rose_gold_block'
  ).id('credit:generated/smithing/enchantress_robe');

  event.smithing(
    'apprenticecodex:enchantress_leggings',
    'irons_spellbooks:pumpkin_leggings',
    'macabre:skull',
    'mca:rose_gold_block'
  ).id('credit:generated/smithing/enchantress_leggings');

  event.smithing(
    'apprenticecodex:enchantress_boots',
    'irons_spellbooks:pumpkin_boots',
    'macabre:skull',
    'mca:rose_gold_block'
  ).id('credit:generated/smithing/enchantress_boots');

});