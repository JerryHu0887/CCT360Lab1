document.body.classList.add("js");
// This tells the CSS that JavaScript is running.


function revealText() {

  const boxes = document.querySelectorAll(".story-box");
  // This finds all the story boxes on the page.


  boxes.forEach(function (box) {

    const position = box.getBoundingClientRect().top;
    // This checks the position of each story box on the screen.


    if (position < window.innerHeight - 100) {
      // This checks if the story box has entered the screen.

      box.classList.add("show");
      // This adds the class that reveals the story box.
    }

  });

}


window.addEventListener("scroll", revealText);
// This runs the function when the user scrolls.


revealText();
// This checks the first story box when the page first loads.
