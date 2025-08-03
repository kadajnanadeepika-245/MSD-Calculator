const buttons = document.querySelectorAll(".btn");
let input = "";
let display = document.createElement("div");
display.id = "display";
display.style.background = "black";
display.style.color = "white";
display.style.fontSize = "28px";
display.style.padding = "15px";
display.style.textAlign = "right";
display.style.marginBottom = "10px";
display.style.borderRadius = "10px";
display.style.minHeight = "40px";
display.textContent = "0";
document.getElementById("calculator").prepend(display);
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      input = "";
    } else if (value === "DEL") {
      input = input.slice(0, -1);
    } else if (value === "=") {
      try {
        input = eval(input).toString();
      } catch {
        input = "Error";
      }
    } else {
      input += value;
    }

    display.textContent = input || "0";
  });
});
