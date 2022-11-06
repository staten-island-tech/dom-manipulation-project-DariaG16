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
};

DOMSelectors.button.addEventListener("click", function () {
  //when the button clicks, do this function:
  let doughType = DOMSelectors.doughTypetxt.value;
  let rarity = DOMSelectors.raritytxt.value;
  let skill = DOMSelectors.skilltxt.value;
  let clothes = DOMSelectors.clothestxt.value;
  let expression = DOMSelectors.expressiontxt.value; // we get the value of whatever the user typed in the text box named "expression"
  DOMSelectors.doughType.insertAdjacentHTML("afterend", `<p>${doughType}</p>`); //whatever is put in the doughtype box comes out under it

  DOMSelectors.doughType.value = ""; //resetting the text box to clear every time you click the button
});

/* const cat = "meow";
DOMSelectors.box.insertAdjacentHTML("afterend", `<h1>We are an ${cat} </h1>`); //2 arguments: where were putting it and what were putting in it. */
