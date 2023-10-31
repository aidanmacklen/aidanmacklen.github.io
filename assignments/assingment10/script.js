const getMovies = async () => {
    const url = "https://portiaportia.github.io/json/movies.json";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const showMovies = async () => {
    let movies = await getMovies();
    let moviesSection = document.getElementById("movies-section");

    movies.forEach((movie) => {
        moviesSection.append(getMovieItem(movie));
    });
};

const getMovieItem = (movie) => {
    const movieSection = document.createElement("section");
    movieSection.classList.add("movie");

    const h3 = document.createElement("h3");
    h3.innerText = movie.title;
    movieSection.append(h3);

    const pDirector = document.createElement("p");
    pDirector.textContent = `Director: ${movie.director}`;
    movieSection.append(pDirector);

    const pYear = document.createElement("p");
    pYear.textContent = `Year: ${movie.year}`;
    movieSection.append(pYear);

    const pGenres = document.createElement("p");
    pGenres.textContent = `Genres: ${movie.genres.join(", ")}`;
    movieSection.append(pGenres);

    const pDescription = document.createElement("p");
    pDescription.textContent = movie.description;
    movieSection.append(pDescription);

    const img = document.createElement("img");
    img.src = `https://portiaportia.github.io/json/images/${movie.img}`;
    movieSection.appendChild(img);

    movieSection.append(getMovieActors(movie));

    return movieSection;
};

const getMovieActors = (movie) => {
    const actorsList = document.createElement("ul");

    movie.actors.forEach((actor) => {
        const actorItem = document.createElement("li");
        actorItem.textContent = actor;
        actorsList.append(actorItem);
    });

    return actorsList;
};

window.onload = () => showMovies();

