const ratio = document.querySelector(".ratio");
const scrollDirection = document.querySelector(".scrollDirection");
const targetPosition = document.querySelector(".targetPositon");

const WINDOW_HEIGHT = window.innerHeight;
const WINDOW_WIDTH = window.innerWidth;

console.log(`
WINDOW_WIDTH: ${WINDOW_WIDTH}
WINDOW_HEIGHGT: ${WINDOW_HEIGHT}
`);

const target = document.querySelector(".section_3");
const {
  x: targetX,
  y: targetY,
  top: targetTop,
  right: targetRight,
  bottom: targetBotom,
  left: targetLeft,
} = target.getBoundingClientRect();

console.log(targetPosition);

console.log(target);

window.addEventListener("scroll", function (e) {
  const {
    x: targetX,
    y: targetY,
    top: targetTop,
    right: targetRight,
    bottom: targetBotom,
    left: targetLeft,
    height: targetHeight,
  } = target.getBoundingClientRect();

  const isIntersecting = targetBotom > 0;

  const intersectingArea = WINDOW_HEIGHT - Math.abs(targetTop);

  // Calculate the intersection width and height
  const intersectionWidth =
    Math.min(target.right, this.window.innerWidth) - Math.max(target.left, 0);
  const intersectionHeight =
    Math.min(target.bottom, this.window.innerHeight) - Math.max(target.top, 0);

  // Calculate the intersection ratio
  const intersectionArea = intersectionWidth * intersectionHeight;
  const elementArea = target.width * target.height;
  const intersectionRatio = intersectionArea / elementArea;

  updateMeta({
    targetX,
    targetY,
    targetTop,
    targetRight,
    targetBotom,
    targetLeft,
    isIntersecting,
    targetHeight,
    intersectionRatio
  });
});

function updateMeta(meta) {
  targetPosition.innerHTML = `
  <pre>
  ---------------------
  TARGET position
  x: ${meta.targetX},
  y: ${meta.targetY},
  top: ${meta.targetTop},
  right: ${meta.targetRight},
  bottom: ${meta.targetBotom},
  left: ${meta.targetLeft}
  height: ${meta.targetHeight}
  ---------------------
  isIntersecting: ${meta.isIntersecting},
  intersectionRatio: ${meta.intersectionRatio}
  </pre>
  
    `;
}
