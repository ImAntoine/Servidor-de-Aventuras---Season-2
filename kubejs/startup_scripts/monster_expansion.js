ItemEvents.modification(event => {
  // Helmet
  event.modify('monsterexpansion:leivekilth_helmet', item => {
    item.armorProtection = 5;   // your custom value
    item.armorToughness = 4.0;
  });

  // Chestplate
  event.modify('monsterexpansion:leivekilth_chestplate', item => {
    item.armorProtection = 10;
    item.armorToughness = 4.0;
  });

  // Leggings
  event.modify('monsterexpansion:leivekilth_leggings', item => {
    item.armorProtection = 7;
    item.armorToughness = 4.0;
  });

  // Boots
  event.modify('monsterexpansion:leivekilth_boots', item => {
    item.armorProtection = 4;
    item.armorToughness = 4.0;
  });

});

ItemEvents.modification(event => {
  // Helmet
  event.modify('monsterexpansion:skrythe_helmet', item => {
    item.armorProtection = 5;   // your custom value
    item.armorToughness = 3.5;
  });

  // Chestplate
  event.modify('monsterexpansion:skrythe_chestplate', item => {
    item.armorProtection = 10;
    item.armorToughness = 3.5;
  });

  // LeggingsS
  event.modify('monsterexpansion:skrythe_leggings', item => {
    item.armorProtection = 6;
    item.armorToughness = 3.5;
  });

  // Boots
  event.modify('monsterexpansion:skrythe_boots', item => {
    item.armorProtection = 3;
    item.armorToughness = 3.5;
  });

})