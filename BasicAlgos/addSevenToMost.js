//**************************************************************
// Build function that accepts array. Return a new array with 
// all values except first, adding 7 to each. Do not alter the 
// original array.
//**************************************************************


function addSevenToMost(arr) {
    for(var i=1; i<arr.length; i++) {
        arr[i] = arr[i] + 7;
    }
    return arr;
}

y = addSevenToMost([2, 3, 4, 5, 6]);
console.log(y);