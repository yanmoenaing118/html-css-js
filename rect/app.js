const scrollArea = document.querySelector("#areaOne");
const sections = document.querySelectorAll(".section-one");

const options = {
  root: scrollArea,
  rootMargin: "10px",
  threshold: 1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(getIntersectionMeta(entry));
  });
}, options);

sections.forEach((el) => observer.observe(el));

/** Area two start */
const scrollAreaTwo = document.querySelector("#areaTwo");
const sectionsTwo = document.querySelectorAll(".section-two");

const optionsTwo = {
  root: scrollAreaTwo,
  rootMargin: "100px 0px 100px 0px",
  threshold: 1,
};

const observerTwo = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(getIntersectionMeta(entry));
  });
}, optionsTwo);

sectionsTwo.forEach((el) => observerTwo.observe(el));

function getIntersectionMeta(entry) {
  const boundingClientRect = entry.boundingClientRect;
  const isIntersecting = entry.isIntersecting;
  const intersectionRatio = entry.intersectionRatio;
  const intersectionRect = entry.intersectionRect;
  const rootBounds = entry.rootBounds;
  const target = entry.target;
  const time = entry.time;

  return {
    name: target.textContent,
    boundingClientRect,
    isIntersecting,
    intersectionRatio,
    intersectionRect,
    rootBounds,
    target,
    time,
  };
}

function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}
