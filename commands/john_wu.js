const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('johnwu')
		.setDescription('Summons John Wu!'),
	async execute(interaction) {
		await interaction.reply({
            files: ['\commands\\johnwu.jpg'],
            content: "A wild John Wu appeared! \uD83C\uDF86", 
		});
	},
};
