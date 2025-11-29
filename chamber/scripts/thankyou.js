const params = new URLSearchParams(window.location.search);

document.getElementById("fname").textContent = params.get("fname");
document.getElementById("lname").textContent = params.get("Lname");
document.getElementById("email").textContent = params.get("email");
document.getElementById("phone").textContent = params.get("phoneno");
document.getElementById("business").textContent = params.get("bname");
document.getElementById("mlevel").textContent = params.get("mlevel");
document.getElementById("timestamp").textContent = params.get("timestamp");