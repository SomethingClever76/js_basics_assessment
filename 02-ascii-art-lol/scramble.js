(function () {

  //get the original ascii art to be displayed from the html
  let orig = document.querySelector('#dolla-bill');

  //split the ascii art inserting each line into an array
  let linesArray = orig.innerHTML.split('\n');

  //empty the hidden div that had the original artwork
  orig.innerHTML = '';
  
  //create an empty array
  let yeahArray = [];

  //loop through the linesArray and prepend lol 40x to each line
  //before adding to the new line yeahArray
  for(let i=0; i < linesArray.length; i++){
    yeahArray.push(linesArray[i], 'lol'.repeat(40));
  }

  //turn the yeahArray back into a string using the join() function using
  //the newline character (\n) as the glue and insert it into the element with the
  //id of fixed
  document.querySelector('#fixed').innerHTML = yeahArray.join('\n');

  //make artArray and writeAscii available to the exercise02.js script
  window.artArray = yeahArray;
  window.writeAscii = writeAscii;
  
  //function we use in exercise02.js to display our ascii art
  function writeAscii(arr) {
    document.querySelector('#fixed').innerHTML = arr.join('\n');
  }
}());