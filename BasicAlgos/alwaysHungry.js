//**************************************************************
// Create a function that accepts an array, and prints "yummy" 
// each time one of the values is equal to "food".  If no array
// elements are "food", then print "I'm hungry" once.
//**************************************************************

function alwaysHungry(arr) {
    var amtFood = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy");
            amtFood ++;
        }
    }
    if(amtFood == 0) {
        console.log("I'm hungry");
    }
}

alwaysHungry(["food", "sandals", "food", "food"]);
alwaysHungry(["shoes", "sandals", "earth", "peas"]);
