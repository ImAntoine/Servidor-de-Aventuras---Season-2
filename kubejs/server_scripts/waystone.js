ServerEvents.recipes(event => {

    event.remove({ output: 'waystones:waystone' });
    event.remove({ output: 'waystones:mossy_waystone' });
    event.remove({ output: 'waystones:sandy_waystone' });
    event.remove({ output: 'waystones:deepslate_waystone' });
    event.remove({ output: 'waystones:blackstone_waystone' });
    event.remove({ output: 'waystones:end_stone_waystone' });
});

