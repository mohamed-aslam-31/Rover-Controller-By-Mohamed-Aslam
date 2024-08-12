//UP-BUTTON
const holdButton = document.getElementById("up-button-id");
const outputDiv = document.getElementById("output");// give output
let isHolding = false;

holdButton.addEventListener("mousedown", () => {
  isHolding = true;
  outputDiv.textContent = " ROBOT MOVING ";//ACTION START
  writeMessage();
});

holdButton.addEventListener("mouseup", () => {
  isHolding = false;
  outputDiv.textContent += " ROBOT STOPPED ";//ACTION END
});

holdButton.addEventListener("mouseleave", () => {
  if (isHolding) {
    isHolding = false;
    outputDiv.textContent += " ROBOT STOPPED ";// ACTION END
  }
});

function writeMessage() {
  if (isHolding) {
    outputDiv.textContent = " MOVING STRAIGHTLY ";
    setTimeout(writeMessage, 1);
  }
}



//DOWN-BUTTON
const holdButton2 = document.getElementById("down-button-id");
const outputDiv2 = document.getElementById("output");// give output
let isHolding2 = false;

holdButton2.addEventListener("mousedown", () => {
  isHolding2 = true;
  outputDiv.textContent = " ROBOT MOVING ";//ACTION START
  writeMessage2();
});

holdButton2.addEventListener("mouseup", () => {
  isHolding2 = false;
  outputDiv2.textContent += " ROBOT STOPPED ";//ACTION END
});

holdButton2.addEventListener("mouseleave", () => {
  if (isHolding2) {
    isHolding2 = false;
    outputDiv2.textContent += " ROBOT STOPPED ";// ACTION END
  }
});

function writeMessage2() {
  if (isHolding2) {
    outputDiv2.textContent = " MOVING BACKWARD ";
    setTimeout(writeMessage2, 1);
  }
}






//LEFT-BUTTON
const holdButton3 = document.getElementById("left-button-id");
const outputDiv3 = document.getElementById("output");// give output
let isHolding3 = false;

holdButton3.addEventListener("mousedown", () => {
  isHolding3 = true;
  outputDiv3.textContent = " ROBOT MOVING ";//ACTION START
  writeMessage3();
});

holdButton3.addEventListener("mouseup", () => {
  isHolding3 = false;
  outputDiv3.textContent += " ROBOT STOPPED ";//ACTION END
});

holdButton3.addEventListener("mouseleave", () => {
  if (isHolding3) {
    isHolding3 = false;
    outputDiv3.textContent += " ROBOT STOPPED ";// ACTION END
  }
});

function writeMessage3() {
  if (isHolding3) {
    outputDiv3.textContent = " MOVING LEFTWARD ";
    setTimeout(writeMessage3, 1);
  }
}




//RIGHT-BUTTON
const holdButton4 = document.getElementById("right-button-id");
const outputDiv4 = document.getElementById("output");// give output
let isHolding4 = false;

holdButton4.addEventListener("mousedown", () => {
  isHolding4 = true;
  outputDiv4.textContent = " ROBOT MOVING ";//ACTION START
  writeMessage4();
});

holdButton4.addEventListener("mouseup", () => {
  isHolding4 = false;
  outputDiv4.textContent += " ROBOT STOPPED ";//ACTION END
});

holdButton4.addEventListener("mouseleave", () => {
  if (isHolding4) {
    isHolding4 = false;
    outputDiv4.textContent += " ROBOT STOPPED ";// ACTION END
  }
});

function writeMessage4() {
  if (isHolding4) {
    outputDiv4.textContent = " MOVING RIGHTWARD ";
    setTimeout(writeMessage4, 1);
  }
}


//STOP BUTTON
const holdButton5 = document.getElementById("stop-button-id");
const outputDiv5 = document.getElementById("output");// give output
let isHolding5 = false;

holdButton5.addEventListener("mousedown", () => {
  isHolding5 = true;
  outputDiv5.textContent = " ROBOT MOVING ";//ACTION START
  writeMessage5();
});

holdButton5.addEventListener("mouseup", () => {
  isHolding5 = false;
  outputDiv5.textContent += " ROBOT STOPPED ";//ACTION END
});

holdButton5.addEventListener("mouseleave", () => {
  if (isHolding5) {
    isHolding5 = false;
    outputDiv5.textContent += " ROBOT STOPPED ";// ACTION END
  }
});

function writeMessage5() {
  if (isHolding5) {
    outputDiv5.textContent = " ROBOT STOPPED ";
    setTimeout(writeMessage5, 1);
  }
}


//180DEG TURN BUTTON
const holdButton6 = document.getElementById("uturn-button-id");
const outputDiv6 = document.getElementById("output");// give output
let isHolding6 = false;

holdButton6.addEventListener("mousedown", () => {
  isHolding6 = true;
  outputDiv6.textContent = " ROBOT MOVING ";//ACTION START
  writeMessage6();
});

holdButton6.addEventListener("mouseup", () => {
  isHolding6 = false;
  outputDiv6.textContent += " ROBOT STOPPED ";//ACTION END
});

holdButton6.addEventListener("mouseleave", () => {
  if (isHolding6) {
    isHolding6 = false;
    outputDiv6.textContent += " ROBOT STOPPED ";// ACTION END
  }
});

function writeMessage6() {
  if (isHolding6) {
    outputDiv6.textContent = " 180Deg TURNING ";
    setTimeout(writeMessage6, 1);
  }
}

