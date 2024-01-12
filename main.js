// select elements
var c = document.getElementById("myCanvas");
var input = document.getElementById("num");
var btn = document.getElementById("go");

var ctx = c.getContext("2d");

// Recusive function to draw triangles
function drawT(n, p1, p2, p3) {
  if(n === 0) { // base case
    
    // draw triangle
    ctx.moveTo(p1[0], p1[1]);
    ctx.lineTo(p2[0], p2[1]);
    ctx.lineTo(p3[0], p3[1]);
    ctx.lineTo(p1[0], p1[1]);
    ctx.stroke();

  }else {
    const p12 = [(p1[0] + p2[0])/2, (p1[1] + p2[1])/2]; // get mid point of line p1, p2
    const p23 = [(p2[0] + p3[0])/2, (p2[1] + p3[1])/2]; // get mid point of line p2, p3
    const p13 = [(p1[0] + p3[0])/2, (p1[1] + p3[1])/2]; // get mid point of line p1, p3

    drawT(n-1, p1, p12, p13); // recusive call
    drawT(n-1, p12, p2, p23); // recusive call
    drawT(n-1, p13, p23, p3); // recusive call
  }
}

// add event to the go button to begin drawing
btn.addEventListener("click", () => {

  // clear old drawing
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.beginPath();

  if(input.value > 0) {
    drawT(input.value, [250, 0], [0, 500], [500, 500]);
  }else {
    alert("Enter positive number");
  }
});
