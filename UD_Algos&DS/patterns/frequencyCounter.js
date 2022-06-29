/**
 * Write a function called 'same', which accepts two arrays. 
 * The function should return true if every value in the array 
 * has its corresponding value squared in the second array. The 
 * frequency and the values must be the same. Indicate the runtime. 
 * 
 * same([1, 2, 3], [4, 1, 9]) //true
 * same([1, 2, 3], [1, 9]) //false
 * same([1, 2, 1], [4, 4, 1]) //false
 */

/**
 * Brute Force
 * 
 * Runtime: O(n^2)
 * Space: O(1)
 */
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex, 1)
    }
    return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4])


/**
 * Optimal
 * 
 * Runtime: O(n)
 * Space: O(1)
 */

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        // check if the squared key in arr1 exists in arr2
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])