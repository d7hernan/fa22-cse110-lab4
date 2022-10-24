// part2-question16.js

let statistics = {
    redCars: 21, 
    blueCars: 45,
    greenCars: 12, 
    raceCars: 5, 
    blackCars: 40, 
    rareCars: 2
}; 

for (const val in statistics) {
    if ((val[0] == 'r') || statistics[val]%2 ) {
        console.log(statistics[val]); 
    }
}