ServerEvents.recipes(event => {

        event.remove({ output: 'irons_spellbooks:scroll_forge' });
    event.shaped(
            Item.of('irons_spellbooks:scroll_forge'),
            [
                    'AAA',
                    ' B ',
                    'BCB'
            ],
            {
                    C: 'macabre:eye',
                    A: 'minecraft:polished_deepslate',
                    B: 'minecraft:crying_obsidian'
            }
    )
});
