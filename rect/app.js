const main = document.querySelector("main")
// const circle = document.querySelector(".circle");

const react = document.querySelector('.section-two');

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {
    const target = entry.target;
    const interSectionRatio = entry.intersectionRatio;
    const rootBounds = entry.rootBounds;
    const boundingClientRect = entry.boundingClientRect;
    const intersectionRect = entry.intersectionRect;
    const isIntersecting = entry.isIntersecting;


    const str =`
      ${target.textContent}:
      isIntersecting: ${isIntersecting},
      boundingClientRect: x:${boundingClientRect.x}, y:${boundingClientRect.y}, top:${boundingClientRect.top}, bottom: ${boundingClientRect.bottom}
      intersectionRect: ${intersectionRect},
      
      rootBounds: ${rootBounds},
      ratio: ${interSectionRatio},
      --------------------------------------
      `

      console.log(str);
  })

})
