/**
 * The code below adds an image to the page, sorta.
 * That image doesn't look right on the page.
 *
 * Look at the code in scramble.js and use your knowledge
 * of arrays to rebuild the array before writeAscii() 
 * is called.
 */

(function () {

    //your code here
    // My solution
    // actually modifying the original array with splice
    for (var i = 0; i < artArray.length; i++) {
        if (artArray[i] === 'lol'.repeat(40)) {
            artArray.splice(i, 1);
        }
    }
    //     // My other solution, after learning about array.filter() method:
    //     // create function to look at the value of an index in an array.
    //     // if the value is NOT equal to lolx40, keep that index.
    // function removeLOL(valueOfIndex) {
    //     if (valueOfIndex !== 'lol'.repeat(40)) {
    //         return valueOfIndex;
    //     }
    // }
    //     // assigning a new value to artArray by calling the function removeLOL 
    //     // as part of the array.filter() method
    // artArray = artArray.filter(removeLOL);


    // //     alternate solutions demonstrated by Eric - using array.filter() method:
    // // 1)
    // artArray = artArray.filter(function(value){
    //     if(value !== "lol".repeat(40)){
    //         return value;
    //     }
    // })
    // // 2) another way of typing the above code
    // // create a new array from the values that meet a condition
    // // in art array
    // let newArray = artArray.filter(artLine => {
    //     if(artLine !== "lol".repeat(40)){
    //         return artLine;
    //     }
    // })
    // //override the original array with the new array created above
    // artArray = newArray

    console.log(artArray);
    writeAscii(artArray);

})();


