const { SlashCommandBuilder } = require('discord.js');
const {findSection, findCourse, findCourses} = require('../api/fetch_course.js');
const {formatSection, formatCourse, formatCourses} = require('../api/format_course.js')

function is_numeric(str){
  return /^\d+$/.test(str);
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('course')
		.setDescription('Find information about all courses/ a course/ a section!')
    .addStringOption(option =>
			option
				.setName('info')
				.setDescription('Syntax: <department><course-number> <section>. Ex: cmpt379 d100'))
      ,
      
	async execute(interaction) {
    const args = interaction.options.getString('info').trim().split(/\s+/)

    let course = "";

    let term = "summer";
    let year = "2023"
    let dept = ""
    let courseNumber = ""
    let section = ""

    if (args.length < 1 || args.length > 3) {
      await interaction.reply("Error! Number of arguments must be between 1 and 3 (inclusive)")
    }

    for (let arg of args) {
      if (arg.includes("spring") || arg.includes("summer") || arg.includes("fall")) {
        
        if (arg.length == 4) {
          term = arg
        } else {
          if (arg[0] == "2") {
            // "2023summer"
            year = arg.slice(0, 4)
            term = arg.slice(4)
          } else {
            // "summer2023"
            year = arg.slice(arg.length - 4, arg.length)
            term = arg.slice(0, arg.length - 4)
          }
        } 
      } else if (arg.length == 7 || (arg.length == 4 && !is_numeric(arg[arg.length-1]))) {
        // cmpt379 or cmpt, not d100
        dept = arg.slice(0, 4)
        if (arg.length == 7) {
          courseNumber = arg.slice(4)
        }
      } else if (arg.length > 3 && is_numeric(arg.slice(arg.length - 3, arg.length))) {
        // check if last 3 digits are number
        section = arg
      } else {
        await interaction.reply(`Error! ${arg} is an invalid argument`)
        return;
      }
    }

    
    if (section != "") {
      // full argument
      await interaction.reply(formatSection((await findSection(year, term, dept, courseNumber, section)).data))

    } else if (courseNumber != "") {
      await interaction.reply(formatCourse((await findCourse(year, term, dept, courseNumber)).data, courseNumber, dept, term, year))
    } else if (dept != "") {
      await interaction.reply(formatCourses((await findCourses(year, term, dept)).data, dept, term, year).substring(0, 2000))
    } else {
      await interaction.reply("Error! At least need department information")
    }

  

	},
};