//**************************************************************
// Given an array of numbers arr, add 1 to every second element, 
// specifically those whose index is odd (arr[1], [3], [5], etc).  
// Afterward. console.log each array value and return arr.
//**************************************************************

function incrementTheSecond(arr) {
    for(var i=1; i<arr.length; i+=2) {
        arr[i] = arr[i] + 1;
        console.log(arr[i]);
    }
    return arr;
}

y = incrementTheSecond([1, 7, 8, 3, 5, 6, 8]);
console.log(y);