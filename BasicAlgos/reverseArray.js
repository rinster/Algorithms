//**************************************************************
// Given an array, write a function that reverses values, in-place.  
// Example: reverse([3,1,6,4,2]) return same array, containing 
// [2,4,6,1,3].  Do this without creating an empty temporary array.  
// (Hint: you'll need to swap values).
//**************************************************************

function reverseTheArray(arr) {
    for(var i=0; i<arr.length/2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

z = reverseTheArray([2, 3, 4, 5, 6, 7, 8]);
console.log(z);

var arr = [3, 1, 6, 4, 2];
arr.reverse();
console.log(arr);