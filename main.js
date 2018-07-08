//set your variable for later use
let s1 = document.getElementById("one");
let s2 = document.getElementById("two");
let s3 = document.getElementById("three");
let s4 = document.getElementById("four");
      
  // run this code on window scroll
window.addEventListener("scroll", (event) => {
  // when the page scrolls 100px down then do the following
  if(window.scrollY > 100) {
    s1.classList.add("fadeIn")
  }
  
  // when the page scrolls 800px down then do the following
  if(window.scrollY > 800) {
    s2.classList.add("fadeIn")
  }

  // when the page scrolls 1600px down then do the following
  if(window.scrollY > 1600) {
    s3.classList.add("fadeIn")
  }

  // when the page scrolls 2400px down then do the following
  if(window.scrollY > 2400) {
    s4.classList.add("fadeIn")
  }
})

// Now that you have the required content, create a css class called hidden and the only thing it should have in it is opacity: 0;. Apply this class to all your content (but not the sections). The page should look like it did from step 1 now, however the actual content is still there. 
// Create a keyframe that transitions from 0 opacity to 1 opacity over 600ms. Add that keyframe to a class called show. This class should be able to reveal a hidden element. 
// Apply show to the items in the first section and take note of the result. No we could put this on all the elements on the page, however this would make everything fade in on page load. We want sections to fade in as we scroll the page. 
// Create an event listener on the window object that listens for scroll events. It should look something like this: 