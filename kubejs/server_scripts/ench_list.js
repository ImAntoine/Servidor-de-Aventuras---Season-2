// kubejs/server_scripts/enchantments_command.js
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;
    event.register(
        Commands.literal("listenchants")
            .executes(ctx => {
                // Get all enchantment IDs (returns a Java ArrayList of ResourceLocation)
                let javaList = Utils.getRegistryIds("enchantment");

                // Convert to a JavaScript array of strings using .toString()
                let allEnchantments = [];
                for (let i = 0; i < javaList.size(); i++) {
                    // .toString() gives you "mod:enchantment_id"
                    allEnchantments.push(javaList.get(i).toString());
                }

                // Sort alphabetically
                allEnchantments.sort();

                // Get the player who executed the command
                let player = ctx.getSource().getPlayer();

                // Send header
                player.tell("§6=== ENCHANTMENTS (" + allEnchantments.length + " total) ===");

                // Send in batches of 10 for readability
                let batch = [];
                allEnchantments.forEach((ench, index) => {
                    batch.push(ench);
                    if (batch.length >= 10 || index === allEnchantments.length - 1) {
                        player.tell("§7" + batch.join("§f, §7"));
                        batch = [];
                    }
                });

                // Provide a copy-paste friendly JSON array of strings
                player.tell("§aCopy this JSON array into your Enchancement config:");
                player.tell(JSON.stringify(allEnchantments));

                return 1;
            })
    );
});