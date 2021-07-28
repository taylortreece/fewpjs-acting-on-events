const dodger = document.getElementById("dodger")

function moveDodgerLeft() {
    let leftNumber = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumber, 10)
    
    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}

function moveDodgerRight() {
    let leftNumber = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumber, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`
    }
}


document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    } else {
        console.log("Dodger can only move left and right")
    }
});