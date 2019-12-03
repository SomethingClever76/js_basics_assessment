(function () {


  /**
   * Use the built in function setTimeout to add a random image to the page every 2.5 seconds.
   * The function setInterval would be easier but figuring out how to do this with setTimeout is
   * more rewarding. Good luck and remember to google all the things.
   * 
   * Use the addImage function to add the image. There are several images in this directory
   * for you to use
   *
   * To point you in the right direction: check out
   * the getRandomInt function on this page:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   * 
   * This link may help as well:
   * 
   * https://stackoverflow.com/questions/729921/settimeout-or-setinterval
   * 
   */


  /**
   * this function adds an image to the page
   * @param {String} name an image filename
   */
  function addImage(name) {
    var img = document.createElement('img');
    img.src = name;
    document.getElementById('image-box').appendChild(img);
  }

  //your code here

  // Creating an array of all the images.
  let images = ["cats.jpg", "hugger.jpg", "internet.jpg", "jackson.jpg", "washington.jpg", "meAfterDoingThisAssessment.jpg"];

  // Setting up a function which will be used to get a random whole number less than a given "max".
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  // Used the following structure from the stackoverflow question above:
  //
  // function myTimeoutFunction() {
  //   doStuff();
  //   setTimeout(myTimeoutFunction, 1000);
  // }
  // myTimeoutFunction();
  //
  // The function is set up so that when it is called, it does some "stuff".
  // Then, it uses setTimeout and calls the function itself every 2.5 seconds (recursion).

  function addImageTimer() {
    addImage(images[getRandomInt(images.length)]);
    setTimeout(addImageTimer, 2500);
  }

  addImageTimer();

})();