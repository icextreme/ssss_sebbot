const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('John Wu\'s favourite quote'),
	async execute(interaction) {
		await interaction.reply('CSSS is love, CSSS is life.');
	},
};