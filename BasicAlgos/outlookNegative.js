//**************************************************************
// Given an array, create and return a new one containing all 
// the values of the provided array, made negative (not simply 
// multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
//**************************************************************

function outlookNegative(arr) {
    var arrNeg = [];
    for(var i=0; i<arr.length; i++) {
        if(arr[i]>0) {
            arr[i] = arr[i]*-1;
            arrNeg.push(arr[i]);
        } else {
            arrNeg.push(arr[i]);
        }
    }
    return arrNeg;
}

y = outlookNegative([4, -5, 6, -7]);
console.log(y);