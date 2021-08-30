// Your code here

function moveDodgerLeft(event) {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
};

function moveDodgerRight(event) {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);

  if (right < 375 ) {
    dodger.style.left = `${right + 5}px`;
  }
};

