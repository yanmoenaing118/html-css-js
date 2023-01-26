const main = document.querySelector("main")
// const circle = document.querySelector(".circle");

const react = document.querySelector('.section-two');
const meta = document.querySelector('.meta');

const wWidth = window.innerWidth;
const wHeight = window.innerHeight;

console.log(`width: ${wWidth}, height: ${wHeight}`)

console.log(react);


function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {
    const target = entry.target;
    const interSectionRatio = entry.intersectionRatio;
    const rootBounds = entry.rootBounds;
    const boundingClientRect = entry.boundingClientRect;
    const intersectionRect = entry.intersectionRect;
    const isIntersecting = entry.isIntersecting;


    const str =`
    <pre>
isIntersecting: ${isIntersecting},

boundingClientRect: x:${boundingClientRect.x}, y:${boundingClientRect.y}, top:${boundingClientRect.top}, bottom: ${boundingClientRect.bottom}

intersectionRect: x:${intersectionRect.x}, y:${intersectionRect.y}, top:${intersectionRect.top}, bottom: ${intersectionRect.bottom},

rootBounds:${JSON.stringify(rootBounds)},

ratio: ${interSectionRatio},
time: ${entry.time}
      </pre>
      `

      // console.log(str);
      meta.innerHTML = str;

      // console.log(fibonacci(Math.round(boundingClientRect.top)));
      
  })

}, {
  root: main,
  rootMargin: "0px 0px 100px 0px",
  threshold: buildThreshold(100)
})


observer.observe(react);

function buildThreshold(steps) {
  return new Array(steps).fill(0).map((el,idx) => (idx + 1)/ steps)
}