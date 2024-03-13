(function() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    // Anonymous function to filter odd numbers
    var oddNumbers = function(arr) {
        return arr.filter(function(num) {
            return num % 2 !== 0;
        });
    }(arr);
    
    // Print the odd numbers
    console.log("Odd Numbers:", oddNumbers);
})();
//  USING ARROW FUNCTION
(() => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
   
    const oddNumbers = ((arr) => {
        return arr.filter((num) => num % 2 !== 0);
    })(arr);
    
    // Print the odd numbers
    console.log("Odd Numbers:", oddNumbers);

})();








