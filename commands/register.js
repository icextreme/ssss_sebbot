const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("register")
    .setDescription("add yourself to a class")
    .addStringOption((option) =>
      option
        .setName("class_name")
        .setDescription("The name of the class")
        .setRequired(true)
    ),

  async execute(interaction) {
    const roleName = interaction.options.getString("class_name");
    console.log(roleName);

    let role = interaction.member.guild.roles.cache.find(x => x.name == roleName);
    // Create the role in the server
    if (role) {
      interaction.member.roles.add(role);
      interaction.reply(`Role "${role.name}" assigned!`).catch((error) => {
        console.error("Error adding role:", error);
        interaction.reply("An error occurred while adding the role.");
      });
    } else {
      interaction.guild.roles
        .create({ name: roleName })
        .then((role) => {
          // Assign the created role to the interaction user
          interaction.member.roles.add(role);
          interaction.reply(`Role "${role.name}" created and assigned!`);
        })
        .catch((error) => {
          console.error("Error creating role:", error);
          interaction.reply("An error occurred while creating the role.");
        });
    }
  },
};
