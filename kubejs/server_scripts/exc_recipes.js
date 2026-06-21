ServerEvents.recipes(event => {

    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "A   A",
            "BBCBB",
            "AABAA",
            " ACA ",
            "  B  "
        ],
        key: {
            A: {
                item: 'monsterexpansion:skrythe_armorplate'
            },
            B: {
                item: 'monsterexpansion:skrythe_wing_membrane'
            },
            C: {
                item: 'minecraft:netherite_ingot'
            }
        },
        result: {
            item: 'monsterexpansion:skrythe_chestplate'
        }
    })

    // Skrythe Helmet
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "F   F",
            " AAA ",
            "AACAA",
            "A C A"
        ],
        key: {
            A: {
                item: 'monsterexpansion:skrythe_armorplate'
            },
            F: {
                item: 'monsterexpansion:skrythe_frill'
            },
            C: {
                item: 'minecraft:netherite_ingot'
            }
        },
        result: {
            item: 'monsterexpansion:skrythe_helmet'
        }
    })

    // Skrythe Leggings
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            " AAA ",
            " ACA ",
            " A A ",
            " A A "
        ],
        key: {
            A: {
                item: 'monsterexpansion:skrythe_armorplate'
            },
            C: {
                item: 'minecraft:netherite_ingot'
            }
        },
        result: {
            item: 'monsterexpansion:skrythe_leggings'
        }
    })

    // Skrythe Boots
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            " ACA ",
            "AA AA"
        ],
        key: {
            A: {
                item: 'monsterexpansion:skrythe_armorplate'
            },
            C: {
                item: 'minecraft:netherite_ingot'
            }
        },
        result: {
            item: 'monsterexpansion:skrythe_boots'
        }
    })

});

//Rakoth set
ServerEvents.recipes(event => {

    // Rakoth Helmet
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            " HBH ",
            "BAAAB",
            "A   A"
        ],
        key: {
            A: {
                item: 'monsterexpansion:rakoth_carapace'
            },
            B: {
                item: 'monsterexpansion:sedimentary_scarp_shell'
            },
            H: {
                item: 'monsterexpansion:rakoth_horn'
            }
        },
        result: {
            item: 'monsterexpansion:rakoth_helmet'
        }
    })

    // Rakoth Chestplate
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "B   B",
            "CAAAC",
            "ABABA",
            " CCC ",
            "  C  "
        ],
        key: {
            A: {
                item: 'monsterexpansion:rakoth_carapace'
            },
            B: {
                item: 'monsterexpansion:sedimentary_scarp_shell'
            },
            C: {
                item: 'monsterexpansion:rakoth_underplate'
            }
        },
        result: {
            item: 'monsterexpansion:rakoth_chestplate'
        }
    })

    // Rakoth Leggings
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            " ABA ",
            " CAC ",
            " C C ",
            " C C ",
        ],
        key: {
            A: {
                item: 'monsterexpansion:rakoth_carapace'
            },
            B: {
                item: 'monsterexpansion:sedimentary_scarp_shell'
            },
            C: {
                item: 'monsterexpansion:rakoth_underplate'
            }
        },
        result: {
            item: 'monsterexpansion:rakoth_leggings'
        }
    })

    // Rakoth Boots
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            " A A ",
            "AA AA"
        ],
        key: {
            A: {
                item: 'monsterexpansion:rakoth_carapace'
            }
        },
        result: {
            item: 'monsterexpansion:rakoth_boots'
        }
    })

    //leivekilth set
});
ServerEvents.recipes(event => {

    // Leivekilth Helmet
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "  C  ",
            " ACA ",
            "CCCCC",
            "A   A"
        ],
        key: {
            A: {
                item: 'monsterexpansion:leivekilth_armorplate'
            },
            C: {
                item: 'monsterexpansion:hoarfrost_shard'
            }
        },
        result: {
            item: 'monsterexpansion:leivekilth_helmet'
        }
    })

    // Leivekilth Chestplate
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "C   C",
            "CBABC",
            "BABAB",
            " AAA ",
            "  A  "
        ],
        key: {
            A: {
                item: 'monsterexpansion:leivekilth_armorplate'
            },
            B: {
                item: 'monsterexpansion:leivekilth_rimepelt'
            },
            C: {
                item: 'monsterexpansion:hoarfrost_shard'
            }
        },
        result: {
            item: 'monsterexpansion:leivekilth_chestplate'
        }
    })

    // Leivekilth Leggings
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            " ABA ",
            " A A ",
            " B B ",
            " A A "
        ],
        key: {
            A: {
                item: 'monsterexpansion:leivekilth_armorplate'
            },
            B: {
                item: 'monsterexpansion:leivekilth_rimepelt'
            }
        },
        result: {
            item: 'monsterexpansion:leivekilth_leggings'
        }
    })

    // Leivekilth Boots
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            " B B ",
            "AA AA"
        ],
        key: {
            A: {
                item: 'monsterexpansion:leivekilth_armorplate'
            },
            B: {
                item: 'monsterexpansion:leivekilth_rimepelt'
            }
        },
        result: {
            item: 'monsterexpansion:leivekilth_boots'
        }
    })
    //rhyza armor set
});
ServerEvents.recipes(event => {

    // Rhyza Helmet
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            " AAA ",
            "AA AA",
            "A   A",
            "     ",
            "     "
        ],
        key: {
            A: {
                item: 'monsterexpansion:rhyza_fur'
            }
        },
        result: {
            item: 'monsterexpansion:rhyza_helmet'
        }
    })

    // Rhyza Chestplate
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "B   B",
            "BBABB",
            "AANAA",
            " AAA ",
            "  A  "
        ],
        key: {
            A: {
                item: 'monsterexpansion:rhyza_fur'
            },
            B: {
                item: 'monsterexpansion:rhyza_scale'
            },
            N: {
                item: 'minecraft:glowstone'
            }
        },
        result: {
            item: 'monsterexpansion:rhyza_chestplate'
        }
    })

    // Rhyza Leggings
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            " AAA ",
            "AA AA",
            " B B ",
            " A A ",
            "     "
        ],
        key: {
            A: {
                item: 'monsterexpansion:rhyza_fur'
            },
            B: {
                item: 'monsterexpansion:rhyza_scale'
            }
        },
        result: {
            item: 'monsterexpansion:rhyza_leggings'
        }
    })

    // Rhyza Boots
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "     ",
            "     ",
            "     ",
            " B B ",
            "CB BC"
        ],
        key: {
            B: {
                item: 'monsterexpansion:rhyza_scale'
            },
            C: {
                item: 'monsterexpansion:rhyza_claw'
            }
        },
        result: {
            item: 'monsterexpansion:rhyza_boots'
        }
    })
    //monster expansion weapons
});
ServerEvents.recipes(event => {

    // Horn of the Shattercry
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "  GBG",
            "  GSB",
            " AWGG",
            "BGA  ",
            "AB   "
        ],
        key: {
            A: {
                item: 'monsterexpansion:skrythe_armorplate'
            },
            B: {
                item: 'minecraft:blaze_rod'
            },
            W: {
                item: 'monsterexpansion:skrythe_wing_membrane'
            },
            G: {
                item: 'minecraft:gold_ingot'
            },
            S: {
                item: 'monsterexpansion:vocal_resonance_fold'
            }
        },
        result: {
            item: 'monsterexpansion:horn_of_the_shattercry'
        }
    })

    // Spire Shell Bulwark
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "AAAAA",
            "BCCCB",
            " BSB ",
            "BCCCB",
            "AAAAA"
        ],
        key: {
            A: {
                item: 'monsterexpansion:rakoth_carapace'
            },
            B: {
                item: 'monsterexpansion:sedimentary_scarp_shell'
            },
            C: {
                item: 'monsterexpansion:rakoth_underplate'
            },
            S: {
                item: 'monsterexpansion:bedrock_core'
            }
        },
        result: {
            item: 'monsterexpansion:spire_shell_bulwark'
        }
    })

    // Duskrend
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "  S  ",
            "  A  ",
            "  A  ",
            "  B  ",
            "  C  "
        ],
        key: {
            S: {
                item: 'monsterexpansion:serrated_sharpclaw'
            },
            A: {
                item: 'monsterexpansion:rhyza_claw'
            },
            B: {
                item: 'monsterexpansion:monster_hardbone'
            },
            C: {
                item: 'monsterexpansion:skrythe_fang'
            }
        },
        result: {
            item: 'monsterexpansion:duskrend'
        }
    })

    // Rimescourge
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "  CAA",
            "  ASA",
            "  BAC",
            " D   ",
            "B    "
        ],
        key: {
            A: {
                item: 'monsterexpansion:hoarfrost_shard'
            },
            B: {
                item: 'minecraft:copper_ingot'
            },
            C: {
                item: 'monsterexpansion:leivekilth_tusk'
            },
            D: {
                item: 'monsterexpansion:leivekilth_armorplate'
            },
            S: {
                item: 'monsterexpansion:deepfreeze_gland'
            }
        },
        result: {
            item: 'monsterexpansion:rimescourge'
        }
    })

})