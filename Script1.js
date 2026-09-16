document.body.classList.add("js");

function revealText() {
  const boxes = document.querySelectorAll(".story-box");

  boxes.forEach(function (box) {
    const position = box.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
      box.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealText);

revealText();