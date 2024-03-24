alert("เว็บไซต์นี้ทำเพื่อจุดประสงค์ทางการศึกษาเท่านั้น")

// ระบบ cart button
const NumberCart = document.getElementById("NumberCart");
let CartButtonCount = 0;

const CartButton = document.querySelectorAll(".cart-button");

CartButton.forEach(button => {
  button.addEventListener("click", () => {
    CartButtonCount++;
    NumberCart.textContent = CartButtonCount;
  });
});
// ระบบ cart button

// ระบบ บอกจำนวน
const CartIcon = document.getElementById("CartIcon");

CartIcon.addEventListener("click", function() {
  alert("คุณมีของในตระกร้าทั้งหมด " + CartButtonCount + " ชิ้น");
});