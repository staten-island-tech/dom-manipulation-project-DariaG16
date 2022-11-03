/* const button = document.getElementById("btn"); //these two do the same thing. this one gets it by id
const text = document.querySelector("#text"); //use this when were getting it by class, in this example we get the id
console.log(text);
 */

const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  empty: document.querySelector(".nothing"), //this does nothing, you can do this in here
  box: document.querySelector("#big-black-box"),
  points: document.querySelectorAll(".point"), //when youre selecting something that isn't a class (list or smtg), you have to use queryselectorALL
};
//console.log(DOMSelectors);

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.textContent = "this is now a big red box";
  text.style.fontSize = "40px";
}
//backgroundAndText(DOMSelectors.box, DOMSelectors.text);

DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});
//when using a nodelist, you can add a foreach

function changeLi() {
  let pointIndex = 1;
  DOMSelectors.points.forEach((point) => {
    //console.log(point); instead of console logging, you can add an EVENT listener
    point.addEventListener("click", function () {
      point.textContent = `Hello I am point ${pointIndex}`;
    });
  });
}
changeLi();
