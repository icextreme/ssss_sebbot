const { SlashCommandBuilder } = require('discord.js');
const path = require('path');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('johnwu')
		.setDescription('Summons John Wu!'),
	async execute(interaction) {
		const filepath = path.resolve("./commands/johnwu.jpg")
		await interaction.reply({ 
            files: [filepath],
            content: "A wild John Wu appeared! \uD83C\uDF86", 
		});
	},
};
