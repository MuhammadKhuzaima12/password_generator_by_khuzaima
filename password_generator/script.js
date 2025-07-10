var slider = document.getElementById("length");
var display = document.getElementById("sliderValue");

slider.addEventListener("input", () => {
  var value = slider.value;
  display.textContent = value;
});

var password1 = document.getElementById("password");

var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");

var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var numberChars = "0123456789";
var symbolChars = "!@#$%^&*()_+{}[]|:;<>,.?/~`-=";

function generatePassword() {
  var characters = "";
  if (uppercaseEl.checked) {
    characters += upperChars;
  }
  if (lowercaseEl.checked) {
    characters += lowerChars;
  }
  if (numbersEl.checked) {
    characters += numberChars;
  }
  if (symbolsEl.checked) {
    characters += symbolChars;
  }

  if (characters === "") {
    password1.value = "Select at least 1 option";
    return;
  }

  var password = "";
  for (var i = 0; i < slider.value; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  password1.value = password;
}

function copyPassword() {
  navigator.clipboard.writeText(password1.value);
}
