const axios = require('axios');

async function findCourse(year, semester, department, number) {
  return await axios.get(`http://www.sfu.ca/bin/wcm/course-outlines?${year}/${semester}/${department}/${number}`)
}

function findByDepartment(year, semester, department) {
  const axios = require('axios');

  axios.get(`http://www.sfu.ca/bin/wcm/course-outlines?${year}/${semester}/${department}`)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log('Error:', error.message);
    });

}

function findBySemester(year, semester) {
  const axios = require('axios');

  axios.get(`http://www.sfu.ca/bin/wcm/course-outlines?${year}/${semester}`)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log('Error:', error.message);
    });

}

function findByYear(year) {
  const axios = require('axios');

  axios.get(`http://www.sfu.ca/bin/wcm/course-outlines?${year}`)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log('Error:', error.message);
    });

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