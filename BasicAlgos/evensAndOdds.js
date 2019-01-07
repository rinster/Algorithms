//**************************************************************
// Create a function that accepts an array.  Every time that 
// array has three odd values in a row, print "That's odd!".  
// Every time the array has three evens in a row, print "Even 
// more so!"
//**************************************************************


function evenAndOdds(arr) {
    var totalOdd = 0;
    var totalEven = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] % 2 == 0) {
            totalEven ++;
            totalOdd = 0;
        } else {
            totalOdd ++;
            totalEven = 0;
        } 
        if(totalOdd == 3) {
            console.log("That's odd!");
            totalOdd = 0;
        }
        if(totalEven == 3) {
            console.log("Even more so!");
            totalEven = 0;
        }
    }
}

evenAndOdds([2,6,8, -3, 3, -2, -9, -13, -11]);
