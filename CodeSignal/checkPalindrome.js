//**************************************************************
// Given the string, check if it is a palindrome.
//**************************************************************

// Example:
// For inputString = "aabaa", the output should be
// checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be
// checkPalindrome(inputString) = false;
// For inputString = "a", the output should be
// checkPalindrome(inputString) = true.


function checkPalindrome(inputString) {
    var midPoint = Math.trunc(inputString.length/2);
    var i = 0;
    
    while (i < midPoint) {
        if(inputString[i] == inputString[inputString.length - 1 - i]) {
            i++;
        } else {
            return false;
        }
    }
    
    return true;
}

console.log(checkPalindrome("aabaa"))