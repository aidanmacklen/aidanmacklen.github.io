class Toy {
    constructor(imageFileName, name, description, price, ageRange, rating) {
        this.imageFileName = imageFileName;
        this.name = name;
        this.description = description;
        this.price = price;
        this.ageRange = ageRange;
        this.rating = rating;
    }

    get details() {
        return `
            <h2>${this.name}</h2>
            <h3>Price:</h3>
            <p>${this.price}</p>
            <h3>Age Range:</h3>
            <p>${this.ageRange}</p>
            <h3>Rating:</h3>
            <p>${this.rating}</p>
        `;
    }

    getToyItem() {
        const toyItem = document.createElement("div");
        toyItem.classList.add("toy-item");

        const image = document.createElement("img");
        image.src = `images/${this.imageFileName}`;
        image.alt = this.name;
        image.classList.add("toy-image");

        const details = document.createElement("div");
        details.classList.add("toy-details");
        details.innerHTML = this.details;

        toyItem.appendChild(image);
        toyItem.appendChild(details);

        return toyItem;
    }
}

const toys = [
    new Toy("bear-toy.jpg", "Bear", "Bear toy", "$19.99", "Ages 3-6", "4/5"),
    new Toy("car-toy.jpg", "Car", "Toy car", "$29.99", "Ages 5+", "3/5"),
    new Toy("donut-toy.jpg", "Donut", "donut toy", "$9.99", "Ages 0-3", "2/5"),
    new Toy("plane-toy.jpg", "Plane", "Toy plane", "$39.99", "Ages 8+", "1/5"),
    new Toy("rockinghorse-toy.jpg", "Rocking Horse", "Rocking horse toy", "$49.99", "Ages 2-6", "3/5"),
    new Toy("rubberducky-toy.jpg", "Rubber Ducky", "Rubber ducky toy", "$5.99", "Ages 0-5", "5/5"),
];

const toyContainer = document.getElementById("toy-container");

toys.forEach((toy) => {
    const toyItem = toy.getToyItem();
    toyContainer.appendChild(toyItem);
});