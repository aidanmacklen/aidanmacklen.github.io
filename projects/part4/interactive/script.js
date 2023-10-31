const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
};

const jewelryForm = document.getElementById("jewelry-form");
const jewelryEntries = document.getElementById("jewelry-entries");
const jewelryList = document.getElementById("jewelry-list");

jewelryForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const material = document.getElementById("material").value;
    const size = document.getElementById("size").value;
    const gem = document.getElementById("gem").value;

    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>Material:</strong> ${material}, <strong>Size:</strong> ${size}, <strong>Gem:</strong> ${gem}`;
    jewelryList.appendChild(listItem);

    document.getElementById("material").value = "";
    document.getElementById("size").value = "";
    document.getElementById("gem").value = "";

  
    jewelryEntries.style.display = "block";
});
