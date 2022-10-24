// part2-question18.js

const myID = setInterval(getTime, 1000); 

function getTime() {
    let d = new Date(); 
    let time = d.toLocaleTimeString();
    console.log(time);
}