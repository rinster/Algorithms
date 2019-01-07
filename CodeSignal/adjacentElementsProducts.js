//**************************************************************
// Given an array of integers, find the pair of adjacent 
// elements that has the largest product and return that product.
//**************************************************************

// EXAMPLE
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.
// 7 and 3 produce the largest product.

function adjacentElementsProduct(arr) {
    var largestProduct = Number.NEGATIVE_INFINITY;
    for(var i=0; i<=arr.length-1; i++){
        if(arr[i]*arr[i+1] > largestProduct) {
            largestProduct = arr[i]*arr[i+1];
        } 
    }
    
    return largestProduct
}

console.log(adjacentElementsProduct([-23, 4, -3, 8, -12]))