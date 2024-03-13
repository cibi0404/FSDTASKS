//4.RETRUN ALL PALINDROMS IN AN ARRAY//

//USING ANOYNOUMUS FUNCTION//

/*const wordsArray = ["level", "noon", "hello", "radar", "world"];

// Using anonymous function to filter palindromes
/*const palindromes = function(arr) {
    return arr.filter(function(word) {
        const reversed = word.split('').reverse().join('');
        return word === reversed;
    });
}(wordsArray);

console.log("Palindromes:", palindromes);*/

//USING IIFE//

/*const wordsArray = ["level", "noon", "hello", "radar", "world"];

// Using IIFE to filter palindromes
const palindromes = (function(arr) {
    return arr.filter(function(word) {
        const reversed = word.split('').reverse().join('');
        return word === reversed;
    });
})(wordsArray);*/


//ARROW FUNCTION//

const wordsArray = ["level", "noon", "hello", "radar", "world"];

// Using arrow function to filter palindromes
const palindromes = ((arr) => {
    return arr.filter((word) => {
        const reversed = word.split('').reverse().join('');
        return word === reversed;
    });
})(wordsArray);

console.log("Palindromes:", palindromes);





console.log("Palindromes:", palindromes);

