const DOMSelectors = {
  info: document.querySelector(`info`),
  doughType: document.querySelector(`#doughType`),
  input: document.querySelector(`#input`),
  button: document.querySelector(`#btn`),
  doughTypetxt: document.querySelector(`#doughTypetxt`),
  raritytxt: document.querySelector(`#raritytxt`),
  skilltxt: document.querySelector(`#skilltxt`),
  clothestxt: document.querySelector(`#clothestxt`),
  expressiontxt: document.querySelector(`#expressiontxt`),
  output: document.querySelector(`#output`),
  images: document.querySelector(`images`),
};

DOMSelectors.button.addEventListener("click", function () {
  //when the button clicks, do this function:
  let doughType = DOMSelectors.doughTypetxt.value;
  let rarity = DOMSelectors.raritytxt.value;
  let skill = DOMSelectors.skilltxt.value;
  let clothes = DOMSelectors.clothestxt.value;
  let expression = DOMSelectors.expressiontxt.value; // we get the value of whatever the user typed in the text box named "expression"

  DOMSelectors.output.insertAdjacentHTML(
    `beforeend`,
    `<p>${doughType}</p> <p>${rarity}</p>  <p>${skill}</p>  <p>${clothes}</p>  <p>${expression}</p>`
  ); //whatever is put in the doughtype box comes out under it
  DOMSelectors.doughTypetxt.value = "";
  DOMSelectors.raritytxt.value = "";
  DOMSelectors.skilltxt.value = "";
  DOMSelectors.clothestxt.value = "";
  DOMSelectors.expressiontxt.value = "";
  //resetting the text box to clear every time you click the button
});

function showImage(images) {
  images.style.visibility = "visible";
}
DOMSelectors.button.addEventListener("click", showImage(images));

/* const cat = "meow";
DOMSelectors.box.insertAdjacentHTML("afterend", `<h1>We are an ${cat} </h1>`); //2 arguments: where were putting it and what were putting in it. */

//REMOVING THE COOKIE

function makeCookie() {
  //make the card
  //get delete button
  //querySelectorAll returns node list of buttons
  //foreach button add an event listener.
  //function (e) for event.target
}
