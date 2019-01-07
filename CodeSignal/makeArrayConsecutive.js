//**************************************************************
// Ratiorg got statues of different sizes as a present from 
// CodeMaster for his birthday, each statue having an non-negative 
// integer size. Since he likes to make things perfect, he wants 
// to arrange them from smallest to largest so that each statue 
// will be bigger than the previous one exactly by 1. He may need 
// some additional statues to be able to accomplish that. Help him 
// figure out the minimum number of additional statues needed.
//**************************************************************
// EXAMPLE:
// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.

// function makeArrayConsecutive2(statues) {
    
//     const newArr = statues.sort();
//     statuesNeeded= 0;
    
//     for(var i=0; i<newArr.length-1; i++) {
//         //If only 1 elem in array
//         if (newArr.length === 1) {
//             return statuesNeeded = 0;
//         }
//         //If more elems in array and diff greater than 1
//          else if([newArr[i+1] - newArr[i] > 1 ]){
//             statuesNeeded  = (statuesNeeded + (newArr[i+1] - newArr[i])) - 1;
//         //If more elems in array and diff is 1
//         } else if ([newArr[i+1] - newArr[i] === 1 ]) { 
//             statuesNeeded ++;
//         }
//     }
    
//     return statuesNeeded; 
    
// }

//console.log(makeArrayConsecutive2([6, 2, 3, 8]));

function makeArrayConsecutive2(statues) {
    //Puts the array in numerical order
    statues.sort(function (a, b) {
        return a - b;
    });
    //Set min value for where forloop is to start
    //Add 1 to min as no need to check if min is in the array
    const min = statues[0];
    //Finds max to set up to what number to check tt
    const max = statues[statues.length - 1];
    //Keeps track of missing numbers in array
    let count = 0;
    //Check all values between min and max
    for (let i = min; i < max; i++) {
        //If value is not in the array add one to count;
        if (!statues.includes(i)) {
            count++;
        }
    }

    return count;
}
