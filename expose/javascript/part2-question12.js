// part2-question12.js

let student = {
    name: 'Sarah', 
    major: 'Computer Science',
    'Grad Year': '2022', 
    greeting: function() { console.log('Hello!'); }, 
    'Favorite Teacher': {
        name: 'Thomas Powell', 
        course: 'CSE 110'
    }, 
    courseLoad: ['CSE110', 'CSE134', 'VIS 41']
}; 
SomeElement = student.courseLoad[0]; 
console.log(SomeElement); 