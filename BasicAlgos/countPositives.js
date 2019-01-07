//**************************************************************
// Given array of numbers, create function to replace last value 
// with number of positive values.  
// Example: countPositives([-1,1,1,1]) changes array to 
// [-1,1,1,3] and returns it.
//**************************************************************

function countPositives(arr) {
    var sumTotalPositves = 0;
    for(var i=0; i < arr.length; i++) {
        if(arr[i] > 0){
            sumTotalPositves++;
        }
    }
    arr[arr.length -1] = sumTotalPositves;
    return arr;
}

z = countPositives([-4, 3, 2, -24, 8]);
console.log(z);