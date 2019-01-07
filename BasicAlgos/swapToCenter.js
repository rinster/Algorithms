//**************************************************************
// Given array, swap first and last, third and third-to-last, etc.  
// Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, 
// true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
//**************************************************************


function swapToCenter(arr) {
    for(var i=0; i<arr.length/2; i=i+2) {
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

z = swapToCenter([2, 3, 4, 5, 6, 7, 8]);
console.log(z);