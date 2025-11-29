const np = document.getElementById("modal-np");
const br = document.getElementById("modal-br");
const sl = document.getElementById("modal-sl");
const au = document.getElementById("modal-au");

document.getElementById("open-np").addEventListener("click", (e) => {
    e.preventDefault();
    np.showModal();
});

document.getElementById("open-br").addEventListener("click", (e) => {
    e.preventDefault();
    br.showModal();
});

document.getElementById("open-sl").addEventListener("click", (e) => {
    e.preventDefault();
    sl.showModal();
});

document.getElementById("open-au").addEventListener("click", (e) => {
    e.preventDefault();
    au.showModal();
});

document.querySelectorAll(".close").forEach(button => {
button.addEventListener("click", () => {
    button.closest("dialog").close();
});
});



document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("timestamp").value = new Date().toLocaleString();
});