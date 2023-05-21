const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('findusers')
    .setDescription('Find all users with a given role')
    .addRoleOption((option) =>
      option.setName('role')
        .setDescription('Select the role')
        .setRequired(true)
    ),
  async execute(interaction) {
    const role = interaction.options.getRole('role');
    
    if (!role) {
      return interaction.reply('Role not found!');
    }
    
    const membersWithRole = interaction.guild.members.cache.filter(member =>
      member.roles.cache.has(role.id)
    );
    
    if (!membersWithRole.size) {
      return interaction.reply('No members found with the role!');
    }
    
    const memberList = membersWithRole.map(member => member.user.tag).join('\n');
    
    interaction.reply(`Role: ${role.name}\nMembers:\n${memberList}`);
  },
};
