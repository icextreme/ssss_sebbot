const axios = require('axios');
const course = require('../commands/course');

function capitalized(str) {
  return str[0].toUpperCase() + str.substring(1)
}

function formatSection({info: {name, title, term, description, prerequisites, courseDetails, materials}, instructor, courseSchedule}) {
  let res = `**Course name**: ${name}\n**Course title**: ${title}\n**Term**: ${capitalized(term)}\n**Description**: ${description}\n**Prerequisites**: ${prerequisites}\n**Instructor name**: ${instructor[0].name}\n**Instructor email**: ${instructor[0].email}\n\n`

  res += `${courseSchedule[0].startDate} to ${courseSchedule[0].endDate}\n**Schedules**:\n`
  for (let schedule of courseSchedule) {
    let {campus, buildingCode, roomNumber, sectionCode, days, startTime, endTime} = schedule
    res += `- ${sectionCode} ${campus} ${buildingCode} ${roomNumber} ${days} ${startTime}-${endTime}\n`
  }
  return res
}

function formatCourse(sections, courseNumber, dept, term, year) {
  if (sections.length == 0) {
    return `${dept.toUpperCase()} ${courseNumber} has no section in ${capitalized(term)} ${year}`
  }
  let res = `All sections of ${dept.toUpperCase()} ${courseNumber}: ${sections[0].title} in ${capitalized(term)} ${year}:\n\n`
  for (let section of sections) {
    let { text, sectionCode } = section
    res += `**${text}** - ${sectionCode}\n`
  }
  return res
}


function formatCourses(courses, dept, term, year) {
  if (courses.length == 0) {
    return `${dept.toUpperCase()} has no courses in ${capitalized(term)} ${year}`
  }

  let res = `All courses of **${dept.toUpperCase()}** department in ${capitalized(term)} ${year}:\n\n`
  for (let course of courses) {
    let { text, title }= course
    let newCourse = `**${text}** - ${title}\n`
    if (res.length + newCourse.length > 2000) break
    res += `**${text}** - ${title}\n`
  }
  return res
}


module.exports = { formatSection, formatCourse, formatCourses }