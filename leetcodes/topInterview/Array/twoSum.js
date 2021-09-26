//**************************************************************
//Given an array of integers, return indices of the two numbers 
//such that they add up to a specific target.
//You may assume that each input would have exactly one solution, 
//and you may not use the same element twice.
//
// TLDR; Find the indexes if two numbers that when summed up 
// together match the TARGET
//**************************************************************

//Example:
//Given nums = [2, 7, 11, 15], target = 9,
//Because nums[0] + nums[1] = 2 + 7 = 9,
//return [0, 1].

// Solution--------------------------
var twoSum = function(nums, target) {
    //initialize hash that will store the two nums and their indices
    const ints = {}; 
    
    //loop through array
    for (let i=0; i<nums.length; i++) { 

        //if ints at a specific index of an array is greater than zero enter check pass
        if (ints[nums[i] ] >= 0) {

            //store that nums in an array
            return [ints[nums[i]], i];
        }
        //then, get the second index/nums by minusing the target and the stored num to get the index
        ints[target-nums[i]]= i
    }
};
