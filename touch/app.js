/**
 * TODO: 
 * 1. check touch move direction - left, right, up, down
 */

function startup() {
    const el = document.getElementById('container');
    el.addEventListener('touchstart', handleStart);
    el.addEventListener('touchend', handleEnd);
    el.addEventListener('touchcancel', handleCancel);
    el.addEventListener('touchmove', handleMove);
  }
  
  document.addEventListener("DOMContentLoaded", startup);


  function handleStart(e) {
    console.log('touchstart');

  }

  function handleEnd() {
    console.log('touchend');
  }

  function handleCancel() {
    console.log('touchcancel')
  }


  function handleMove(e) {
    const touches = e.changedTouches;
    const ball = document.querySelector('.box');

    const keys = Object.keys(touches);
    const values = Object.values(touches);

    keys.forEach( k => {
        console.log(values[k])
        ball.style.left = `${values[k].pageX}px`
        ball.style.top = `${values[k].pageY}px`
    })


  }