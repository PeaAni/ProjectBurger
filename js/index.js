// alert("เว็บไซต์นี้ทำเพื่อจุดประสงค์ทางการศึกษาเท่านั้น")

const counterSpan = document.getElementById("NumberCart");
let count = 0;

const buttons = document.querySelectorAll(".cart-button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    count++;
    counterSpan.textContent = count;
  });
});