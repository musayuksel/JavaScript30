const someNestedElements = document.querySelectorAll('div');

// const consoleElement = (e) => {
//   e.stopPropagation(); // prevents further propagation of the current event in the capturing and bubbling phases
//   console.log(e.target); //arrow fun will capture correct clicked element
// };

function consoleElement() {
  console.log(this);
  //capture:false//default
  // if I click the three, it will console three two, one etc

  //capture:true
  // one two three
}

someNestedElements.forEach((element) =>
  element.addEventListener('click', consoleElement, {
    capture: true,
    once: true, //call once then remove event listener
  })
);
