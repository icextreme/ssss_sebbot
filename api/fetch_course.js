const axios = require('axios');

async function findSection(year, semester, department, number, section) {
  return await axios.get(`http://www.sfu.ca/bin/wcm/course-outlines?${year}/${semester}/${department}/${number}/${section}`)
}

async function findCourse(year, semester, department, number) {
  return await axios.get(`http://www.sfu.ca/bin/wcm/course-outlines?${year}/${semester}/${department}/${number}`)
}

async function findCourses(year, semester, department) {
  return await axios.get(`http://www.sfu.ca/bin/wcm/course-outlines?${year}/${semester}/${department}`)
}


module.exports = { findSection, findCourse, findCourses}