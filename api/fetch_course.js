const axios = require('axios');

async function findSection(year, semester, department, number, section) {
  return await axios.get(`http://www.sfu.ca/bin/wcm/course-outlines?${year}/${semester}/${department}/${number}/${section}`)
}

async function findCourse(year, semester, department, number) {
  return await axios.get(`http://www.sfu.ca/bin/wcm/course-outlines?${year}/${semester}/${department}/${number}`)
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

// (async () => {
//   console.log((await findCourse(2022, 'Fall', 'CMPT', 379)).data)
// })()

module.exports = { findCourse, findByDepartment, findBySemester, findByYear }