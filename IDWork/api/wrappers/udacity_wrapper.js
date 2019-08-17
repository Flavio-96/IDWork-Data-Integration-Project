//dependencies
const axios = require("axios");

// baseURL of the website.
const baseURL = "https://catalog-api.udacity.com/v1/catalog";

module.exports.getCourses = getCourses;

//function that retrieves all courses from udacity
async function getCourses() {
  try {
    let response = await axios.get(baseURL);
    if (response.status == 200) {
      let data = response.data;

      let courses = data.courses;

      let refinedCourses = [];
      var count = 0;
      // clean course with only informations that are useful for us.
      courses.forEach(course => {
        let { title, subtitle, syllabus, summary, image, slug, metadata, level } = course;
        let refinedCourse = {
          title: title,
          subtitle: subtitle,
          syllabus: syllabus.replace(/<\/?[^>]+(>|$)/g, ""),
          description: summary.replace(/<\/?[^>]+(>|$)/g, ""),
          difficulty: level,
          url_image: image,
          url: `https://udacity.com/course/${slug}`,
        };
        
        if(metadata){
          refinedCourse.skills = metadata.skills;
        }

        refinedCourses.push(refinedCourse);
      });

      return refinedCourses;
    }
  } catch (err) {console.log(err)}
}
