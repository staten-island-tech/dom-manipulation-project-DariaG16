/* const button = document.getElementById("btn"); //these two do the same thing. this one gets it by id
const text = document.querySelector("#text"); //use this when were getting it by class, in this example we get the id
console.log(text);
 */

const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  empty: document.querySelector(".nothing"), //this does nothing, you can do this in here
  box: document.querySelector(".big-black-box"),
  point: document.querySelectorAll(".point"), //when youre selecting something that isn't a class (list or smtg), you have to use queryselectorALL
};
//console.log(DOMSelectors);

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.innerHTML = "this is now a big red box";
}
backgroundAndText(DOMSelectors.box, DOMSelectors.text);
