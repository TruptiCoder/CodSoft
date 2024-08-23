let string = "";
let text = "";
let screen = document.querySelector(".text");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelectorAll(".clear");
let cut = document.querySelector(".cut");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      text = eval(string);
      screen.value = text;
    } else if (e.target.innerHTML == "%") {
      text = text + "%";
      string = string + "/100*";
      screen.value = text;
    } else if (e.target.innerHTML == ".") {
      let contain = false;
      for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) == ".") {
          contain = true;
        }
      }
      if (!contain) {
        string = string + e.target.innerHTML;
        text = text + e.target.innerHTML;
        screen.value = text;
      }
    } else {
      string = string + e.target.innerHTML;
      text = text + e.target.innerHTML;
      screen.value = text;
    }
  });
});

clear.forEach((btn) => {
  btn.addEventListener("click", () => {
    string = "";
    text = "";
    screen.value = text;
  });
});

cut.addEventListener("click", () => {
  string = string.toString().slice(0, -1);
  text = text.toString().slice(0, -1);
  screen.value = text;
});
