//**************************************************************
//Create a function that takes array of numbers.  The function 
//should print the lowest value in the array, and return the 
//highest value in the array.
//**************************************************************

function lowAndHigh(arr) {
    var highest = arr[0];
    var lowest = arr[0];
    for(var i=1; i<arr.length; i++){
        if(arr[i]>highest){
            highest = arr[i];
        }
        if(arr[i]< lowest){
            lowest = arr[i];
        }
    }
    console.log(lowest);
    return highest;
}

y = lowAndHigh([2, 4, 5, 6, 7, 8]);
console.log(y);

z = lowAndHigh([-4, 100, 2, -24, -8]);
console.log(z);