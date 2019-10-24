/**
 * Given the HTML below, please make the following changes with javascript – don't change any HTML!:
 **/

(function () {

    //your code here

    //  *
    //  * 1. Any time someone clicks on the title at the top "feed template,"
    //  *    make the color of the "feed template" text change from black to red
    //  *    and then from red to black when clicked again.
    //  *
    // I created a variable whose value is targeting the element containing 
    // the text "Feed Template".
    // Using this variable, I use addEventListener to "listen" for clicks on the text.
    // The function attached to the EventListener changes the color of the text,
    // depending on whether the current color is red or black. 
    let feedTemplate = document.querySelector(".panel h1");


    feedTemplate.addEventListener("click", function () {
        if (feedTemplate.style.color === "red") {
            feedTemplate.style.color = "black";
        } else {
            feedTemplate.style.color = "red";
        }
    });


    //  *
    //  * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
    //  *    hide every odd-numbered link in the menu.
    //  *
    // Created a variable to represent all of the numbered links
    // (stored as a NodeList containing the elements classified as 
    // <section class="section"> in the HTML). Then, wrote a function 
    // to hide the odd-numbered links.
    // ***A bit confusing since the even-numbered indices correspond to
    // odd-numbered numbered links, while the odd-numbered indices 
    // correspond to even-numbered links. Therefore, it was necessary
    // to hide the EVEN-numbered indices by using .style.display = "none"
    let numberedLinks = document.querySelectorAll(".section");

    function hideOddLinks() {
        for (var i = 0; i < numberedLinks.length; i++) {
            if (i % 2 === 0) {
                numberedLinks[i].style.display = "none";
            }
        }
    }
    hideOddLinks();


    // *
    // * 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
    // *
    // querySelector finds all elements labeled <p> and stores them as a NodeList.
    // This list is the value assigned to the variable "paragraphs".
    //  Used a loop to replace all the appearances of "bacon" in the inner HTML of each
    // paragraph in the nodeList 
    let paragraphs = document.querySelectorAll("p");

    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = paragraphs[i].innerHTML.replace(/bacon/gi, "LASER VISION");
    }

    // (KEEP FOR FUTURE REFERENCE) 
    // Eric's comments: 
    // forEach method that works with NodeLists
    // We are looping over paragraphs, a NodeList
    // I just wanted you to see the forEach way
    // I can pass more things into the callback for the forEach. The first thing (poop), 
    // represents the value in the list, index represents the position in the 
    // list and parent will make sense later when we get into object oriented programming

    // paragraphs.forEach(function(poop, index){
    //     console.log(poop, "the paragraph", index,  "the position in the node list", parent, "the parent element")
    //     poop.innerHTML = poop.innerHTML.replace(/bacon/gi, "LASER VISION");
    // })


    // *
    // * 4. Delete the last two posts in the middle section (they have a CSS class "post")
    // *
    // Created a variable to hold a NodeList containing all HTML elements with the CSS class "post".
    // Converted the NodeList to an Array, so we can use Array methods on it.
    // Created a variable to hold the last two (actually three - due to one set of "2 comments" being
    // marked with the "post" class selector) elements from the postsArray.
    // You can't call remove on multiple items, so a loop is used to remove each item individually.
    // (i.e., spliceLastTwoPosts.remove() will NOT work).
    let posts = document.querySelectorAll(".post");
    let postsArray = Array.from(posts);
    let spliceLastTwoPosts = postsArray.splice(-3);

    for (var i = 0; i < spliceLastTwoPosts.length; i++) {
        spliceLastTwoPosts[i].remove();
    }


    //  *
    //  * 5. Remove the images in the right column
    //  *
    // Created a variable targeting the images in the right column (grouped together inside <p> tags 
    // inside an <aside> in the HTML) using querySelectorAll. Used a loop to go through the resulting 
    // NodeList to remove the images.
    let adImages = document.querySelectorAll("aside p img");

    for (var i = 0; i < adImages.length; i++) {
        adImages[i].remove();
    }


    //  *
    //  * BONUS: add a special surprise inside!
    //  *

    //create a button and append it to the <aside> element
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "Click Me!";
    document.querySelector("aside").appendChild(btn);

    //declaring variable representing an image and setting the image source, size, and alt text
    let laserVision = document.createElement("IMG");
    laserVision.setAttribute("src", "https://vignette.wikia.nocookie.net/elseworlds/images/d/d4/Laser_vision_painting_attempt_by_awesomedisease-d60yh4v.png/revision/latest?cb=20171219200542");
    laserVision.setAttribute("width", "300");
    laserVision.setAttribute("height", "225");
    laserVision.setAttribute("alt", "Laser Vision!");

    //another variable representing the image display status (false = off)
    let laserVisionOn = false;

    //function to define what happens when the button is clicked:
    //**IF - when laserVisionOn is false, clicking the button  changes LaserVisionOn to true and 
    //adds the image to the last <p> in the <aside>,
    //which results in displaying the image above the button on the page. Otherwise, if I had simply 
    //appended it to the <aside>, the image would appear below the button.
    //**ELSE - if the image is currently on the page, clicking the button removes it.
    btn.onclick = function () {
        if (laserVisionOn === false) {
            document.querySelector("aside p").appendChild(laserVision);
            laserVisionOn = true;
        } else {
            laserVision.remove()
            console.log(laserVision)
            laserVisionOn = false;
        }
    }

})();