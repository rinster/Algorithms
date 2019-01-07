//**************************************************************
// Given an array, create a function to return a new array where 
// each value in the original has been doubled.  Calling 
// double([1,2,3]) should return [2,4,6] without changing 
// original.
//**************************************************************


function doubleVision(arr) {
    var arrNew = [];
    for(var i=0; i<arr.length; i++) {
        arrNew[i] = arr[i]*2;
    }
    return arrNew;
}

z = doubleVision([4, 3, 2, 24, 8]);
console.log(z);
