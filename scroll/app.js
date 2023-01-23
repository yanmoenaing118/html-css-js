const sectionTwo = document.querySelector(".section-two");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const target = entry.target;
      const isIntersecting = entry.isIntersecting;
      const img = target.querySelector(".image");
      const ratio = entry.intersectionRatio;
      console.log(ratio);
      if (isIntersecting) {
        console.log(isIntersecting);
        const tY = ratio;
        console.log(tY);
        img.style.transform = `translateY(${200 * ratio}px)`;
      } else {
        // img.style.transform = `translateY(0px)`
      }
    });
  },
  {
    threshold: buildThresholdList(20),
  }
);

observer.observe(sectionTwo);

function buildThresholdList(numSteps) {
  let thresholds = [];

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}
