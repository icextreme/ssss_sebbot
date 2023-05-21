const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('johnwu')
		.setDescription('Replies with John Wu Image!'),
	async execute(interaction) {
		await interaction.reply({
			files: ['\commands\\johnwu.jpg']
		});
	},
};