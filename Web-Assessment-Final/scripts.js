const display = document.querySelector("#display");

const inputSize = document.querySelector("#input-size");
const showSize = document.querySelector("#show-size");

const inputFont = document.querySelector("#select-font");
const showFont = document.querySelector("#show-font");

const inputColor = document.querySelector("#input-color");
const showColor = document.querySelector("#show-color");

const inputBackgroundColor = document.querySelector("#input-bg-color");
const showBackgroundColor = document.querySelector("#show-bg-color");

const enterText = document.querySelector("#enter-text");
const showEnterText = document.querySelector("#show-enter-text");

inputSize.addEventListener("input", handleInput);
inputFont.addEventListener("input", handleInput);
inputColor.addEventListener("input", handleInput);
inputBackgroundColor.addEventListener("input", handleInput);
enterText.addEventListener("input", handleInput);

function handleInput(e) {
  const fontSize = inputSize.value + "px";
  display.style.fontSize = fontSize;
  showSize.innerHTML = fontSize;

  const fontFamily = inputFont.value;
  display.style.fontFamily = fontFamily;
  showFont.innerHTML = fontFamily;

  const color = inputColor.value;
  display.style.color = color;
  showColor.innerHTML = color;

  const backgroundColor = inputBackgroundColor.value;
  display.style.backgroundColor = backgroundColor;
  showBackgroundColor.innerHTML = backgroundColor;

  const text = enterText.value;
  display = display + `${enterText}`;
  display.innerHTML = text;
}

handleInput();
