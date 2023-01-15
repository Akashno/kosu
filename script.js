var fallingTextArr = [];

function fall(text) {
  var top = 0;
  var intervalId = setInterval(frame, 10);
  function frame() {
    if (top >= window.innerHeight) {
      clearInterval(intervalId);
      document.body.removeChild(text);
      fallingTextArr.splice(fallingTextArr.indexOf(text), 1);
    } else {
      top++;
      text.style.top = top + "px";
    }
  }
}

function addFallingText() {
  var text = document.createElement("div");
  text.innerHTML = "🖕";
  text.classList.add("falling-text");
  text.style.fontSize ="30px" 
  text.style.left = Math.random() * (window.innerWidth - text.clientWidth) + "px";
  document.body.appendChild(text);
  fallingTextArr.push(text);
  fall(text);
}

setInterval(addFallingText, 1000);
