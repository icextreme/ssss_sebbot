
# ssss_sebbot
The amazing Seb the Snake ready to assist you in helping with any course information.

## Command Guides

### /course

Course lets you give out information of a specific section/ a course/ available courses in a department depending on the input received
 

It can take up from 1 to 3 arguments:
- course department with or without course number. Ex: cmpt or cmpt225
- course section (only if course department + number if provided). Ex: d100, d200
- termyear. Ex: summer2023 (Default argument is current term, which is summer2023 as time of written)
	- yearterm also works. Ex: 2022fall

There are no strict ordering for these 3 arguments. any of the argument can be before or after the other argument.
Ex: `/course summer2023 cmpt225 d100` == `/course d100 cmpt225 summer2023`
  
 Note:
 - Only course department (ex. cmpt) is the required argument. Everything else is optional.
 - If only course department is given, it will give out all available courses in that department for the specified term (summer2023 default).
 - If only course department and course number are given, it will give out all possible section of that course for the specified term (summer2023 default).
 - If course department, course number, and course section are given, it will give out information of the specified section for the specified term (summer
  
Example arguments:
- `/course fall2022 cmpt225 d100`
	Gives out information about cmpt225 d100 section in Fall 2022
- `/course cmpt379 d100`
	Gives out information about cmpt379 d100 section in Summer 2023
- `/course cmpt125`
	Gives out all sections of cmpt125 in Summer 2023
- `/course cmpt`
	Gives out all available cmpt courses in Summer 2023
- `/course cmpt fall2022`
	Gives out all available cmpt courses in Fall 2022

### /johnwu
Shows picture of a really cool guy.

### /register
Register yourself to a class.
Ex: `/register cmpt353`

### /findusers
Find all users with the given role. Useful to find classmates.
Ex: `/findusers cmpt353`