const axios = require('axios');


async function formatSection({name, title, term, description, instructor}) {
  return `Course name: ${name}\nCourse title: ${title}\nterm: ${term}\nDescription: ${description}\nInstructor name:${instructor.name}\nInstructor email:${instructor.email}`
}

function findByDepartment(year, semester, department) {
  return await axios.get(`http://www.sfu.ca/bin/wcm/course-outlines?${year}/${semester}/${department}`)
}

function findBySemester(year, semester) {
  return await axios.get(`http://www.sfu.ca/bin/wcm/course-outlines?${year}/${semester}`)
}

function findByYear(year) {
  return await axios.get(`http://www.sfu.ca/bin/wcm/course-outlines?${year}`)
}
// console.log("Find by Year")
// findByYear(2022)
// console.log()
// console.log("Find by Semester")
// findBySemester(2022, 'Fall')
// console.log()
// console.log("Find by Department")
// findByDepartment(2022, 'Fall', 'CMPT')
// console.log()
// console.log("Find Course")
// (async () => {
//   console.log((await findCourse(2022, 'Fall', 'CMPT', 379)).data)
// })()

module.exports = { findCourse, findByDepartment, findByYear }