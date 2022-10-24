// part2-question17.js

function modifyArray(array, callback) {
    const newArray = []; 
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
    }
    return newArray; 
}

function doSomething(num) {
    return num * 2; 
}

//modifyArray([1,2,3], doSomething); 
console.log(modifyArray([1,2,3], doSomething));