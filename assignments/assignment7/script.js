let margin = 0;
let isRunning = true;

const movingimg = () => {
  const runningman = document.getElementById("running");
  margin += 1;
  runningman.style.marginLeft = margin + "px";
  if (margin % 10 === 0) {
    isRunning = !isRunning;
    runningman.style.display = isRunning;
  }
  if (margin < 500) {
    requestAnimationFrame(movingimg);
  }
};

const fillbar = () => {
    const amountDonated = parseInt(document.getElementById("txt-funds").value);
    const errormes = document.getElementById("error-rec");
    const rectangle = document.getElementById("rectangle");
  
    rectangle.classList.remove("twenfive", "fifty", "sevenfive", "onehun");
  
    if (amountDonated <= 2500) {
      rectangle.classList.add("twenfive");
    } else if (amountDonated >= 2501 && amountDonated <= 5000) {
      rectangle.classList.add("fifty");
    } else if (amountDonated >= 5001 && amountDonated <= 7500) {
      rectangle.classList.add("sevenfive");
    } else if (amountDonated >= 7501 && amountDonated <= 10000) {
      rectangle.classList.add("onehun");
    } else {
      errormes.innerHTML = "Please enter a valid number";
    }
  };
  
  window.onload = () => {
    document.getElementById("button-display").onclick = fillbar;
    document.getElementById("running").onclick = movingimg;
  };
  
