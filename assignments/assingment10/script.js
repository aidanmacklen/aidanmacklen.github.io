/*const getBreweries = async () => {
    const url = "https://api.openbrewerydb.org/breweries";
  
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showBreweries = async () => {
    let breweries = await getBreweries();
    let breweriesSection = document.getElementById("breweries-section");
  
    breweries.forEach((brewery) =>
      breweriesSection.append(getBreweryItem(brewery))
    );
  };
  
  const getBreweryItem = (brewery) => {
    const brewerySection = document.createElement("section");
    brewerySection.classList.add("brewery");
  
    const a = document.createElement("a");
    a.href = brewery.website_url;
    brewerySection.append(a);
  
    const h3 = document.createElement("h3");
    h3.innerText = brewery.name;
    a.append(h3);
  
    const p = document.createElement("p");
    p.textContent = `${brewery.brewery_type} Brewery`;
    a.append(p);
  
    a.append(getBreweryAddress(brewery));
  
    const iframe = document.createElement("iframe");
  
    iframe.src = `https://maps.google.com/maps?q=${brewery.latitude},${brewery.longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    brewerySection.append(iframe);
    return brewerySection;
  };
  
  const getBreweryAddress = (brewery) => {
    const p = document.createElement("p");
    p.innerHTML = `${brewery.street}<br> ${brewery.city}, ${brewery.state}<br> ${brewery.country} ${brewery.postal_code}`;
    return p;
  };
  
  window.onload = () => showBreweries();*/

  /*const getMovies = async () => {
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

    movies.forEach((movie) =>
        moviesSection.append(getMovieItem(movie))
    );
};

const getMovieItem = (movie) => {
    const movieSection = document.createElement("section");
    movieSection.classList.add("movie");

    const a = document.createElement("a");
    a.href = `https://portiaportia.github.io/json/${movie.img}`;
    movieSection.append(a);

    const h3 = document.createElement("h3");
    h3.innerText = movie.title;
    a.append(h3);

    const p = document.createElement("p");
    p.textContent = `Director: ${movie.director}, Year: ${movie.year}`;
    a.append(p);

    const description = document.createElement("p");
    description.textContent = movie.description;
    a.append(description);

    a.append(getMovieActors(movie));

    return movieSection;
};

const getMovieActors = (movie) => {
    const actorsList = document.createElement("ul");
    actorsList.classList.add("actors-list");

    movie.actors.forEach((actor) => {
        const actorItem = document.createElement("li");
        actorItem.textContent = actor;
        actorsList.append(actorItem);
    });

    return actorsList;
};

window.onload = () => showMovies();*/

/*const getMovies = async () => {
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
        moviesSection.append(getMovieDirector(movie));
        moviesSection.append(getMovieYear(movie));
        moviesSection.append(getMovieGenres(movie));
        moviesSection.append(getMovieDescription(movie));
        moviesSection.append(getMovieActors(movie));
    });
};

const getMovieItem = (movie) => {
    const h3 = document.createElement("h3");
    h3.innerText = movie.title;
    return h3;
};

const getMovieDirector = (movie) => {
    const p = document.createElement("p");
    p.textContent = `Director: ${movie.director}`;
    return p;
};

const getMovieYear = (movie) => {
    const p = document.createElement("p");
    p.textContent = `Year: ${movie.year}`;
    return p;
};

const getMovieGenres = (movie) => {
    const p = document.createElement("p");
    p.textContent = `Genres: ${movie.genres.join(", ")}`;
    return p;
};

const getMovieDescription = (movie) => {
    const p = document.createElement("p");
    p.textContent = movie.description;
    return p;
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

window.onload = () => showMovies();*/

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

    const img = document.createElement("img");
    img.src = movie.img;
    movieSection.appendChild(img);

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

