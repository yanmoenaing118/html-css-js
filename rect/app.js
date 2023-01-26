const main = document.querySelector("main")
// const circle = document.querySelector(".circle");

const react = document.querySelector('.section-two');
const meta = document.querySelector('.meta');

console.log(react);



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
      </pre>
      `

      // console.log(str);
      meta.innerHTML = str;
  })

}, {
  root: main,
  threshold: buildThreshold(100)
})


observer.observe(react);

function buildThreshold(steps) {
  return new Array(steps).fill(0).map((el,idx) => (idx + 1)/ steps)
}