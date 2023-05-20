
function findCourse(year, semester, department, number) {
  const axios = require('axios');

  axios.get('http://www.sfu.ca/bin/wcm/course-outlines?${year}/${semester}/${department}/${number}')
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log('Error:', error.message);
    });

}

findCourse("2022", "Fall", "CMPT", "379")