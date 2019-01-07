//**************************************************************
// You are passed an array containing strings.  Working within that 
// same array, replace each string with a number - the length of 
// the string at previous array index - and return the array.  For 
// example, previousLengths(["hello", "dojo", "awesome"]) should 
// return ["hello", 5, 4].
//**************************************************************


function previousLengths2(arr) {
    for(var i=arr.length -1; i>=1; i--) {
        arr[i] = arr[i-1].length;
    }
    return arr
}
y = previousLengths2(["hello", "dojo", "awesome"]);
console.log(y);