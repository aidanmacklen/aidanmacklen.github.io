const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
};

// Update your script.js file

// Function to fetch and display the image from the JSON file
const displayImage = async () => {
    const jsonDataUrl = "https://aidanmacklen.github.io/json/data.json";

    try {
        const response = await fetch(jsonDataUrl);
        const data = await response.json();

        // Get the image filename from the JSON data
        const imageFilename = data.image;

        // Create an image element
        const img = document.createElement("img");
        img.src = imageFilename;
        img.alt = "Selfie";

        // Add the image to the 'img-container' div
        const imgContainer = document.getElementById("img-container");
        imgContainer.appendChild(img);
    } catch (error) {
        console.error(error);
    }
};

// Call the function to display the image
displayImage();

  