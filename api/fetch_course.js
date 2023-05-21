function findCourseWithDescription(year, semester, department, number) {
  const axios = require('axios');

  axios.get(`http://www.sfu.ca/bin/wcm/course-outlines?${year}/${semester}/${department}/${number}/D100`)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log('Error:', error.message);
    });

}
function findCourse(year, semester, department, number) {
  const axios = require('axios');

  axios.get(`http://www.sfu.ca/bin/wcm/course-outlines?${year}/${semester}/${department}/${number}`)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log('Error:', error.message);
    });

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
// findCourse(2022, 'Fall', 'CMPT', 379)

console.log("Find Course Description")
findCourseWithDescription(2022, 'Fall', 'CMPT', 379)