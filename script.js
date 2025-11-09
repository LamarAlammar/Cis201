let cartCount = 0;
let totalPrice = 0;
let cartItems = [];
let clickedButtons = new Set(); 

function addToCart(itemName, price) {

  if (clickedButtons.has(itemName)) return; 
  clickedButtons.add(itemName);

  cartCount++;
  totalPrice += price;
  cartItems.push(itemName);
  
  document.getElementById("cartCount").innerText = cartCount;
  document.getElementById("cartPrice").innerText = totalPrice;

 
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = ""; 
  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
  });
}

function checkout() {
  if(cartCount > 0) {
    document.getElementById("orderMessage").innerText = "Order has been sent 🎉";

    cartCount = 0;
    totalPrice = 0;
    cartItems = [];
    clickedButtons.clear(); 
    document.getElementById("cartCount").innerText = cartCount;
    document.getElementById("cartPrice").innerText = totalPrice;
    document.getElementById("cartList").innerHTML = "";
  } else {
    document.getElementById("orderMessage").innerText = "The cart is empty!";
  }
}
function sendMessage() {
  document.getElementById("messageStatus").innerText = "تم إرسال الرسالة 🎉";
  document.getElementById("contactForm").reset();
}

 let cart = "";

        function addCake() {
          let flavor = document.getElementById("flavor").value;
          let size = document.getElementById("size").value;
          let topping = document.getElementById("topping").value;
          let message = document.getElementById("message").value;

          cart = cart + flavor + " - " + size + " - " + topping + " - " + message + "<br>";
          document.getElementById("cart").innerHTML = cart;

          document.getElementById("flavor").value = "";
          document.getElementById("size").value = "";
          document.getElementById("topping").value = "";
          document.getElementById("message").value = "";

          document.getElementById("status").innerText = "Cake has been successfully added to the cart!";
        }