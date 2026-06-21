ItemEvents.modification(event => {
  event.modify('cataclysm:bone_reptile_helmet', item => {
    item.armorProtection = 3
    item.armorToughness = 2
    item.armorKnockbackResistance = 0.05
  })

  event.modify('cataclysm:bone_reptile_chestplate', item => {
    item.armorProtection = 8
    item.armorToughness = 2
    item.armorKnockbackResistance = 0.05
  })

});
//ignitium set
ItemEvents.modification(event => {
  // Helmet
  event.modify('cataclysm:ignitium_helmet', item => {
    item.armorProtection = 7;   // your custom value
    item.armorToughness = 5.0;
  });

  // Chestplate
  event.modify('cataclysm:ignitium_chestplate', item => {
    item.armorProtection = 13;
    item.armorToughness = 6.0;
  });

  // Leggings
  event.modify('cataclysm:ignitium_leggings', item => {
    item.armorProtection = 9;
    item.armorToughness = 6.0;
  });

  // Boots
  event.modify('cataclysm:ignitium_boots', item => {
    item.armorProtection = 7;
    item.armorToughness = 5.0;
  });

});

ItemEvents.modification(event => {
  // Helmet
  event.modify('cataclysm:cursium_helmet', item => {
    item.armorProtection = 6;   // your custom value
    item.armorToughness = 4.0;
  });

  // Chestplate
  event.modify('cataclysm:cursium_chestplate', item => {
    item.armorProtection = 12;
    item.armorToughness = 5.0;
  });

  // Leggings
  event.modify('cataclysm:cursium_leggings', item => {
    item.armorProtection = 8;
    item.armorToughness = 5.0;
  });

  // Boots
  event.modify('cataclysm:cursium_boots', item => {
    item.armorProtection = 6;
    item.armorToughness = 4.0;
  })

})