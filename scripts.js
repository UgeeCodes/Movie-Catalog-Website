/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */


// const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
// const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
// const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
// let titles = [
//     "Fresh Prince of Bel Air",
//     "Curb Your Enthusiasm",
//     "East Los High"
// ];
// import * as movies_json from "./movies.json";

// console.log("TEST", data);
// const require = createRequire(import.meta.url);
// const movies_json = require('./data.json');
const movies_json = [
    {
        "Title": "The Avengers",
        "Year": "2012",
        "imdbID": "tt0848228",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
        "Title": "Avengers: Endgame",
        "Year": "2019",
        "imdbID": "tt4154796",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
    },
    {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
        "Title": "Avengers: Age of Ultron",
        "Year": "2015",
        "imdbID": "tt2395427",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
    },
    {
        "Title": "The Avengers",
        "Year": "1998",
        "imdbID": "tt0118661",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTQ4NmIzMTktOTdjOC00NzE4LWIzNTgtODkwNzM5ZjUzZDkxXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg"
    },
    {
        "Title": "The Avengers: Earth's Mightiest Heroes",
        "Year": "2010–2012",
        "imdbID": "tt1626038",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
    },
    {
        "Title": "Ultimate Avengers: The Movie",
        "Year": "2006",
        "imdbID": "tt0491703",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"
    },
    {
        "Title": "Ultimate Avengers II",
        "Year": "2006",
        "imdbID": "tt0803093",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
        "Title": "The Avengers",
        "Year": "1961–1969",
        "imdbID": "tt0054518",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWQwZTdjMDUtNTY1YS00MDI0LWFkNjYtZDA4MDdmZjdlMDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
    },
    {
        "Title": "Avengers Assemble",
        "Year": "2012–2019",
        "imdbID": "tt2455546",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg"
    },
    {
        "Title": "Godzilla",
        "Year": "2014",
        "imdbID": "tt0831387",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDFmYTM4NzAtNWM0ZC00MGJlLWEyYzQtYzA3ZTFiNzc1YjllXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg"
    },
    {
        "Title": "Godzilla vs. Kong",
        "Year": "2021",
        "imdbID": "tt5034838",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
    },
    {
        "Title": "Godzilla: King of the Monsters",
        "Year": "2019",
        "imdbID": "tt3741700",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOGFjYWNkMTMtMTg1ZC00Y2I4LTg0ZTYtN2ZlMzI4MGQwNzg4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Godzilla",
        "Year": "1998",
        "imdbID": "tt0120685",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjFlOTI2OGQtMzg0YS00ZGE4LTkwMjEtZDUzYThlOTU5YjQ5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        "Title": "Godzilla Minus One",
        "Year": "2023",
        "imdbID": "tt23289160",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTI5MjNjMTMtN2NiNC00YjBlLTgzMWQtMGRhZDZkYmY1NGU2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg"
    },
    {
        "Title": "Godzilla",
        "Year": "1954",
        "imdbID": "tt0047034",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzI2ZWUwMWYtOGRjMC00YjNiLTg5MTktZDU0NDk5MjY4Zjc2XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
    },
    {
        "Title": "Shin Godzilla",
        "Year": "2016",
        "imdbID": "tt4262980",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODQ4ZmIzNWMtY2NiYi00MmM1LWFjMGQtMDE0Nzc1NzhjNjEyXkEyXkFqcGdeQXVyNDUwNzM4MzQ@._V1_SX300.jpg"
    },
    {
        "Title": "King Kong vs. Godzilla",
        "Year": "1963",
        "imdbID": "tt0056142",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGExNmFhMDItZDBiZC00MWUyLWEwYjEtYTgyYzIzNTQyZTYwXkEyXkFqcGdeQXVyMTIyNjQ1OTMy._V1_SX300.jpg"
    },
    {
        "Title": "Godzilla x Kong: The New Empire",
        "Year": "2024",
        "imdbID": "tt14539740",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BN2VjZmI4NTctMmVjMy00NTc0LWE1YzAtMTE0MTg1ZDY2NmQyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Mothra vs. Godzilla",
        "Year": "1964",
        "imdbID": "tt0058379",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjBkNjk0NDAtNDcxYy00NDI3LThjM2QtYjRhOTY1NmM0N2NhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        "Title": "Barbie",
        "Year": "2023",
        "imdbID": "tt1517268",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    },
    {
        "Title": "Batman v Superman: Dawn of Justice",
        "Year": "2016",
        "imdbID": "tt2975590",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        "Title": "Superman Returns",
        "Year": "2006",
        "imdbID": "tt0348150",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDUzZGRhNzktYTZkMC00YWFiLTljMDEtMTk2OWJhYzAyYmY2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
    },
    {
        "Title": "Superman",
        "Year": "1978",
        "imdbID": "tt0078346",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
        "Title": "Superman II",
        "Year": "1980",
        "imdbID": "tt0081573",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDQzNjQwZjYtNjUzOS00MzAzLTg5NDYtN2MyNjVlYjhhYWFlXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg"
    },
    {
        "Title": "Superman III",
        "Year": "1983",
        "imdbID": "tt0086393",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzI3ZDllMTctNmI2Mi00OGQ4LTk2ZTQtYTJhMjA5ZGI2YmRkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
    },
    {
        "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
        "Year": "2016",
        "imdbID": "tt18689424",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
    },
    {
        "Title": "Superman IV: The Quest for Peace",
        "Year": "1987",
        "imdbID": "tt0094074",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmIwZWY1YTYtNDlhOS00NDRmLWI4MzItNjk2NDc1N2NhYzNlXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
    },
    {
        "Title": "Superman & Lois",
        "Year": "2021–2024",
        "imdbID": "tt11192306",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzdmYjAyODUtMTFkOS00MDg1LTljMDAtNzhiYTg5NjY1NjM5XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg"
    },
    {
        "Title": "Lois & Clark: The New Adventures of Superman",
        "Year": "1993–1997",
        "imdbID": "tt0106057",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTU1ZGFjNzEtZWYzZC00ZmI0LTg2NmMtN2YyNTY4YzhlODIyXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg"
    },
    {
        "Title": "Superman/Batman: Apocalypse",
        "Year": "2010",
        "imdbID": "tt1673430",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
        "Title": "The Lord of the Rings: The Rings of Power",
        "Year": "2022–",
        "imdbID": "tt7631058",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGFlMzI0YmEtZDEzNy00NWY1LTgzNDEtMTg2MzQ4OWFlNmNjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_SX300.jpg"
    },
    {
        "Title": "The Power of the Dog",
        "Year": "2021",
        "imdbID": "tt10293406",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZGRhYjE2NWUtN2FkNy00NGI3LTkxYWMtMDk4Yjg5ZjI3MWI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
    },
    {
        "Title": "Power Rangers",
        "Year": "2017",
        "imdbID": "tt3717490",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTA5MzU1NDI4NzBeQTJeQWpwZ15BbWU4MDUxMDQ0NDEy._V1_SX300.jpg"
    },
    {
        "Title": "Project Power",
        "Year": "2020",
        "imdbID": "tt7550000",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzBhOWU4ODAtZDYzYi00NDU1LWIzZWUtNDZmMDgxODljZTVmXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_SX300.jpg"
    },
    {
        "Title": "Absolute Power",
        "Year": "1997",
        "imdbID": "tt0118548",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDFlNTZmOGYtYmE0ZC00OTE4LWI5YzctNmZmZDU3M2ZiMmI4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    },
    {
        "Title": "Power",
        "Year": "2014–2020",
        "imdbID": "tt3281796",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTg0NDMyMzEzOF5BMl5BanBnXkFtZTgwNTIzODQxMjI@._V1_SX300.jpg"
    },
    {
        "Title": "Mighty Morphin Power Rangers",
        "Year": "1995",
        "imdbID": "tt0113820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BN2I2Y2I5N2MtMzJhMy00NzE2LThlMzEtNGE0ODA4M2JhOWNiXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg"
    },
    {
        "Title": "Mighty Morphin Power Rangers",
        "Year": "1993–1996",
        "imdbID": "tt0106064",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWVjMWRjNjktY2I5Yy00NzllLWFiNmMtOTQyZGE3OTNmNzM4XkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_SX300.jpg"
    },
    {
        "Title": "She-Ra and the Princesses of Power",
        "Year": "2018–2020",
        "imdbID": "tt7745956",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGIzOGQxZDEtOTVhNC00YzgyLWE2ZjItNDM5YjQ0MTZlZTUwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
        "Title": "Power Book II: Ghost",
        "Year": "2020–2024",
        "imdbID": "tt10732104",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZGIwMTU4YmMtY2ViZi00MjAzLTlmYTQtZTIyOWI0ZDA3YmE4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
    },
]
let favorite_movies = {};
let watched_movies = {};
let movies = {};
let sorted_movies = [];
let seen_movies = new Set();
let favorite_flag = false;
let movie_flag = true;
let watched_flag = false;

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.
function changeMovie() {
    movie_flag = true;
    favorite_flag = false;
    watched_flag = false;
    let cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    showCards();
}

function changeFavorite() {
    movie_flag = false;
    favorite_flag = true;
    watched_flag = false;
    let cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    console.log(favorite_movies);
    showFavoriteCards();
}

function changeWatched() {
    movie_flag = false;
    favorite_flag = false;
    watched_flag = true;
    let cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    showWatchedCards();
}

function filter_movies() {
    console.log("Done Did");
    // console.log(movies);
    for (const movie in movies_json) {
        // console.log(movies_json[movie]);
        const temp = {
            title: movies_json[movie]["Title"],
            year: movies_json[movie]["Year"],
            type: movies_json[movie]["Type"],
            poster: movies_json[movie]["Poster"],
        };
        movies[movies_json[movie]["Title"]] = temp;
        sorted_movies.push(movies_json[movie]["Title"]);
        // console.log(temp);
    }
    sorted_movies.sort();
    // console.log(movies);
}


// This function adds cards the page to display the data in the array
function showCards() {
    filter_movies();
    seen_movies = new Set();
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    for (let i = 0; i < sorted_movies.length; i++) {
        // console.log(sorted_movies[i]);
        let title = sorted_movies[i];
        if (!seen_movies.has(title)) {
            seen_movies.add(title);
        }
        else {
            continue;
        }


        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = movies[sorted_movies[i]]["poster"];
        let releasedDate = movies[sorted_movies[i]]["year"];
        let genre = movies[sorted_movies[i]]["type"];
        // console.log(imageURL);

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL, releasedDate, genre); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function showFavoriteCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    for (const movie in favorite_movies) {
        // console.log(sorted_movies[i]);
        let title = favorite_movies[movie]["title"];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = favorite_movies[movie]["poster"];
        let releasedDate = favorite_movies[movie]["year"];
        let genre = favorite_movies[movie]["type"];
        // console.log(imageURL);

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL, releasedDate, genre); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function showWatchedCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    for (const movie in watched_movies) {
        // console.log(sorted_movies[i]);
        let title = watched_movies[movie]["title"];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = watched_movies[movie]["poster"];
        let releasedDate = watched_movies[movie]["year"];
        let genre = watched_movies[movie]["type"];
        // console.log(imageURL);

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL, releasedDate, genre); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

// This function adds 4 random movie images to the carousel
function showCarousel() {
    filter_movies()
    const carousel_container = document.getElementById("mycarousel");
    // carousel_container.innerHTML = "";
    const templateCarousel = document.querySelector(".carousel-item");

    for (let i = 0; i < 9; i++) {
        let j = Math.floor(Math.random() * sorted_movies.length);

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = movies[sorted_movies[j]]["poster"];

        const nextCarousel = templateCarousel.cloneNode(true); // Copy the template carousel
        editCarouselItemContent(nextCarousel, imageURL); // Edit title and image
        carousel_container.appendChild(nextCarousel); // Add new carousel to the container
    }
}

function editCarouselItemContent(carousel, newImageURL) {

    const carouselImage = carousel.querySelector("img");
    carouselImage.src = newImageURL;

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
}

function editCardContent(card, newTitle, newImageURL, newReleasedDate, newGenre) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h6");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    const cardGenre = card.querySelector(".first");
    const cardDate = card.querySelector(".second");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";
    cardGenre.textContent = "Type: " + newGenre;
    cardDate.textContent = "Released Date: " + newReleasedDate;

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    // console.log("new card:", newTitle, "- html: ", card);
}

function addToFavorites(event) {
    const parentElement = event.target.parentNode;
    const cardName = parentElement.querySelector("h6").textContent;
    console.log(cardName);
    favorite_movies[cardName] = movies[cardName];
    
}

function addToWatched(event) {
    const parentElement = event.target.parentNode;
    const cardName = parentElement.querySelector("h6").textContent;
    console.log(cardName);
    watched_movies[cardName] = movies[cardName];
}

// This calls the addCards() function when the page is first loaded
if (movie_flag) {
    document.addEventListener("DOMContentLoaded", showCarousel);
    document.addEventListener("DOMContentLoaded", showCards);
}
else if (favorite_flag) {
    document.addEventListener("DOMContentLoaded", showFavoriteCards);
}
else if (watched_flag) {
    document.addEventListener("DOMContentLoaded", showWatchedCards);
}


function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}