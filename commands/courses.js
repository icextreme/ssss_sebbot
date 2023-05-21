const { SlashCommandBuilder } = require('discord.js');
const {findCourse} = require('../api/fetch_course.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cmpt')
		.setDescription('Find CMPT courses!'),
	async execute(interaction) {
    console.log((await findCourse(2022, 'Fall', 'CMPT', 379)).data)
    //   async function(response)  {
    //     await interaction.reply(response.data)
    //   }
  
    // await findCourse(2023, 'summer', 'cmpt', '307').then(function (response) {
    //   interaction.reply(response);

    // })
    //   interaction.reply(response);

	},
};