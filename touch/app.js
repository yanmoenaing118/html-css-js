/**
 * TODO:
 * 1. check touch move direction - left, right, up, down
 */
const ball = document.querySelector(".box");

function startup() {
  const el = document.body;
  el.addEventListener("touchstart", handleStart);
  el.addEventListener("touchend", handleEnd);
  el.addEventListener("touchcancel", handleCancel);
  el.addEventListener("touchmove", handleMove);
}

document.addEventListener("DOMContentLoaded", startup);

function handleStart(e) {
  console.log("touchstart");
  const touches = e.changedTouches;

  const keys = Object.keys(touches);
  const values = Object.values(touches);

  keys.forEach((k) => {
    console.log(values[k]);
    ball.style.left = `${values[k].pageX}px`;
    ball.style.top = `${values[k].pageY}px`;
  });
}

function handleEnd() {
  console.log("touchend");
}

function handleCancel() {
  console.log("touchcancel");
}

function handleMove(e) {
  const touches = e.changedTouches;

  const keys = Object.keys(touches);
  const values = Object.values(touches);

  keys.forEach((k) => {
    const x = values[k].pageX;
    const dirameter = 100;
    const degree = (x / (dirameter * Math.PI)) * 360;
    console.log(degree);
    ball.style.transform = `rotateY(${degree}deg)`;
  });
}
