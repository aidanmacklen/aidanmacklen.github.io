const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
};

const displayImage = async () => {
    const jsonDataUrl = "https://aidanmacklen.github.io/json/data.json";

    try {
        const response = await fetch(jsonDataUrl);
        const data = await response.json();

        const imageFilename = data.iframe;

        const img = document.createElement("iframe");
        iframe.src = imageFilename;

        const imgContainer = document.getElementById("image");
        imgContainer.appendChild(img);
    } catch (error) {
        console.error(error);
    }
};

displayImage();