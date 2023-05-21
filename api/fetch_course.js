const axios = require('axios');

async function findSection(year, semester, department, number, section) {
  return await axios.get(`https://www.sfu.ca/bin/wcm/course-outlines?${year}/${semester}/${department}/${number}/${section}`)
}

function findCourseWithDescription(year, semester, department, number) {

  axios.get(`https://www.sfu.ca/bin/wcm/course-outlines?${year}/${semester}/${department}/${number}/D100`)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log('Error:', error.message);
    });

}

async function findCourse(year, semester, department, number) {
  return await axios.get(`https://www.sfu.ca/bin/wcm/course-outlines?${year}/${semester}/${department}/${number}`)
}

async function findCourses(year, semester, department) {
  return await axios.get(`https://www.sfu.ca/bin/wcm/course-outlines?${year}/${semester}/${department}`)
}


module.exports = { findSection, findCourse, findCourses}
