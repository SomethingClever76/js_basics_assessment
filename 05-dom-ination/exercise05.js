/**
 * Given the HTML below, please make the following changes with javascript – don't change any HTML!:
 *
 * 1. Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.
 *
 * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.
 *
 * 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
 *
 * 4. Delete the last two posts in the middle section (they have a CSS class "post")
 *
 * 5. Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *    
 */

(function () {

    //your code here

    // 1. I created a variable whose value is targeting the element containing 
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

    // 2. Created a variable to represent all of the numbered links
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

    // 3.  querySelector finds all elements labeled <p> and stores them as a NodeList.
    // This list is the value assigned to the variable "paragraphs".
    //  Used a loop to replace all the appearances of "bacon" in the inner HTML of each
    // paragraph in the nodeList 
    let paragraphs = document.querySelectorAll("p");

    // for (var i = 0; i < paragraphs.length; i++) {
    //     paragraphs[i].innerHTML = paragraphs[i].innerHTML.replace(/bacon/gi, "LASER VISION");
    // }

    //for each method that works with nodeLists
    //we are looping over paragraphs, a nodeList
    //i just wanted you to see the forEach way
    //you can delete whatever of this crap that i typed
    // i can pass more things into the callback for the forEach. The first thing (poop), 
    //represents the value in the list, index represnts the postion in the 
    //list and parent will make sense later when we get into object oreiented programming
    paragraphs.forEach(function(poop, index){
        console.log(poop, "the paragraph", index,  "the position in the node list", parent, "the parent element")
        poop.innerHTML = poop.innerHTML.replace(/bacon/gi, "LASER VISION");
    })

    // 4.

    // 5.
let adImages = document.querySelectorAll("aside p img");

for (var i = 0; i < adImages.length; i++) {
    adImages[i].remove();
}

//some things we just get exposed to when we need them. we can't lecture on every single thing
//part of the journey is being happy learning things that come up on your own
//we will always help you figure those things out when you discover them

//you are doing awesome by the way. definetely above average. I am exicted for you. I think you will be a great developer
})();