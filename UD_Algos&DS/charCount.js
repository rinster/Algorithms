/**
 * Write a function that takes in a string and returns 
 * counts of each character in the string. 
 * 
 * Examples:
 * 
 * charCount("aaaa")
 * { a:4 } 
 * 
 * charCount("hello")
 * {  h:1, e:1, l:2, o:1 }
 * 
 */


function charCount(str) {
    //make object to return at end
    var result = {};
    //loop over string for each character
    for(var i=0; i<str.length; i++) {
        //store str[i]--lowercased--into a variable 
        var char = str[i].toLowerCase();
        if(result[char] > 0) {
            //if char is a num/letter AND key in object, add one to count
            result[char]++;
        } else {
            //if char is a num/letter AND  not in object, add it and set value to 1
            result[char] = 1
        }
    }
    //return object at end
    return result;
        //if char is something else(space, period, etc), do nothing
}

