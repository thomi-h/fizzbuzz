const button = document.getElementById("button");

const result = document.getElementById("result");

const buttonClick = () => {
  const input = document.getElementById("input");
  const para = document.createElement("p");
  const inputValue = input.value;
  if (inputValue == 0) {
    const textNode = document.createTextNode("invalid input");
    para.style.color = "red";
    para.appendChild(textNode);
  } else if (inputValue % 5 == 0 && inputValue % 3 == 0) {
    const textNode = document.createTextNode("FizzBuzz!");
    para.appendChild(textNode);
  } else if (inputValue % 3 == 0) {
    const textNode = document.createTextNode("Fizz!");
    para.appendChild(textNode);
  } else if (inputValue % 5 == 0) {
    const textNode = document.createTextNode("Buzz!");
    para.appendChild(textNode);
  } else {
    const textNode = document.createTextNode(inputValue);
    para.appendChild(textNode);
  }
  result.appendChild(para);
  input.value = "";
};

button.addEventListener("click", () => {
  buttonClick();
});
