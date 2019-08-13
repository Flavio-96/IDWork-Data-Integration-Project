
# Queries

- Jobs
  1. All_IT_Jobs() :- Adzuna + SimplyHired = Job
  2. IT_Jobs_In_Place() :- Adzuna + SimpluHired + "City = param" = Job + "City = param"


- City
  1. Job_City_Info() :- Job + city_info

- Skill
  1. Repositories_By_Skill() :- Job +  Repositoru
  2. Courses_By_Skill() :- Job + Course
  3. Articles_By_Skill() :-  Job + Article


