const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('findroles')
    .setDescription('Find the roles of a user')
    .addUserOption((option) =>
      option.setName('user')
        .setDescription('Select the user')
        .setRequired(true)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser('user');
    
    if (!user) {
      return interaction.reply('User not found!');
    }
    
    const member = interaction.guild.members.cache.get(user.id);
    
    if (!member) {
      return interaction.reply('Member not found!');
    }
    
    const roles = member.roles.cache.map(role => role.name).join(', ');
    
    interaction.reply(`User: ${user.tag}\nRoles: ${roles}`);
  },
};
