const DOMSelectors = {
  info: document.querySelector(`info`),
  output: document.querySelector(`#output`),
  doughType: document.querySelector(`#doughType`),
  input: document.querySelector(`#input`),
  button: document.querySelector(`#btn`),
  doughTypetxt: document.querySelector(`#doughTypetxt`),
  raritytxt: document.querySelector(`#raritytxt`),
  skilltxt: document.querySelector(`#skilltxt`),
  clothestxt: document.querySelector(`#clothestxt`),
  expressiontxt: document.querySelector(`#expressiontxt`),
  images: document.querySelector(`images`),

  choco: document.querySelector(`#choco`),
  vanilla: document.querySelector(`#vanilla`),
  ginger: document.querySelector(`#ginger`),
  suit: document.querySelector(`#suit`),
  dress: document.querySelector(`#dress`),
  cape: document.querySelector(`#cape`),
  smiling: document.querySelector(`#smiling`),
  frowning: document.querySelector(`#frowning`),
  angry: document.querySelector(`#angry`),

  darkBtn: document.querySelector(`#Darkbtn`),
  vanillaBtn: document.querySelector(`#Vanillabtn`),
  gingerBtn: document.querySelector(`#Gingerbtn`),
  suitBtn: document.querySelector(`#Suitbtn`),
  dressBtn: document.querySelector(`#Dressbtn`),
  capeBtn: document.querySelector(`#Capebtn`),
  smilingBtn: document.querySelector(`#Smilingbtn`),
  frowningBtn: document.querySelector(`#Frowningbtn`),
  angryBtn: document.querySelector(`#Angrybtn`),
};
DOMSelectors.button.addEventListener("click", function () {
  //when the button clicks, do this function:
  let rarity = DOMSelectors.raritytxt.value;
  let skill = DOMSelectors.skilltxt.value;
  // we get the value of whatever the user typed in the text box named "expression"

  DOMSelectors.output.insertAdjacentHTML(
    `beforeend`,
    `
    <h2>Cookie:</h2>
    <p>Rarity: ${rarity}</p>  <p>Skill Type: ${skill}</p>`
  ); //whatever is put in the doughtype box comes out under it
  DOMSelectors.raritytxt.value = "";
  DOMSelectors.skilltxt.value = "";
  //resetting the text box to clear every time you click the button
  DOMSelectors.output.insertAdjacentHTML(
    `afterend`,
    `<button id="delete" >REMOVE COOKIE</button>`
  ); //whatever is put in the doughtype box comes out under it
});

//buttons
DOMSelectors.darkBtn.addEventListener("click", function () {
  let choco = DOMSelectors.choco;
  choco.style.visibility = "visible";
});
DOMSelectors.vanillaBtn.addEventListener("click", function () {
  let vanilla = DOMSelectors.vanilla;
  vanilla.style.visibility = "visible";
  vanilla.style.backgroundcolor = "red";
});
DOMSelectors.gingerBtn.addEventListener("click", function () {
  let ginger = DOMSelectors.ginger;
  ginger.style.visibility = "visible";
});
DOMSelectors.suitBtn.addEventListener("click", function () {
  let suit = DOMSelectors.suit;
  suit.style.visibility = "visible";
});
DOMSelectors.dressBtn.addEventListener("click", function () {
  let dress = DOMSelectors.dress;
  dress.style.visibility = "visible";
});
DOMSelectors.capeBtn.addEventListener("click", function () {
  let cape = DOMSelectors.cape;
  cape.style.visibility = "visible";
});
DOMSelectors.smilingBtn.addEventListener("click", function () {
  let smiling = DOMSelectors.smiling;
  smiling.style.visibility = "visible";
});
DOMSelectors.frowningBtn.addEventListener("click", function () {
  let frowning = DOMSelectors.frowning;
  frowning.style.visibility = "visible";
});
DOMSelectors.angryBtn.addEventListener("click", function () {
  let angry = DOMSelectors.angry;
  angry.style.visibility = "visible";
});

/* const cat = "meow";
DOMSelectors.box.insertAdjacentHTML("afterend", `<h1>We are an ${cat} </h1>`); //2 arguments: where were putting it and what were putting in it. */

//REMOVING THE COOKIE

/* var deleteBtn = document.getElementById("delete");
deleteBtn.onclick = function () {
  DOMSelectors.output.remove();
  deleteBtn.remove();
}; */

/* function makeCookie() {
  //make the card
  //get delete button
  //querySelectorAll returns node list of buttons
  //foreach button add an event listener.
  //function (e) for event.target
} */

/* document.getElementByyId("form").addEventListener(
  "submit",
  function (e) {
    e.preventDefault();
  }

  //get user input
  //make an object
  //push to html
);
 */
