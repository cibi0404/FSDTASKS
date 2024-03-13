//RETURN ALL THE PRIME NUMBERS//

/*const numbersArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using anonymous function to filter prime numbers
const primeNumbers = function(arr) {
    return arr.filter(function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
}(numbersArray);

console.log("Prime Numbers:", primeNumbers);*/


//using IIFE function//
/*const numbersArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using IIFE to filter prime numbers
const primeNumbers = (function(arr) {
    return arr.filter(function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
})(numbersArray);

console.log("Prime Numbers:", primeNumbers);*/


//using arrow function //

const numbersArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];



const primeNumbers = ((arr) => {
    return arr.filter((num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
})(numbersArray);

console.log("Prime Numbers:", primeNumbers);



