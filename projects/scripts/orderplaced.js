const params = new URLSearchParams(window.location.search);



document.getElementById("fname").textContent = params.get("firstname");
document.getElementById("lname").textContent = params.get("lastname");
document.getElementById("email").textContent = params.get("emailaddress");
document.getElementById("phone").textContent = params.get("phoneNo");
document.getElementById("book").textContent = params.get("product");
document.getElementById("address").textContent = params.get("Address");
document.getElementById("quantity").textContent = params.get("number");
document.getElementById("delivery").textContent = params.get("delivery");
document.getElementById("timestamp").textContent = params.get("timestamp");