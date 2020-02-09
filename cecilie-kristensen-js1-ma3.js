// question 1

const sum = (a, b) => a - b;

// question 2

const genresUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(genresUrl)
     .then(function(response) {
         return response.json();
     })
     .then(function(json) {
         for(let i = 0; i < json.results.length; i++) {
             console.log(json.results[i].name);
         }
     })
     .catch(function(error) {
         document.location.href = "error.html";
     });

// question 3 

const animalHeading = document.querySelector("h1");

const outrageousAnimals = animals.replace("cats", "giraffes");

animalsHeading.innerText = outrageousAnimals;

// question 4

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let userId;

if (params.has("userId")) {
    userId = params.get("userId");
    const userIdNumber = parseInt(userId);

    if (userIdNumber < 10) {
        document.location.href = "first.html";
    } else if (userIdNumber >= 10) {
        document.location.href = "second.html";
    }
} else {
    document.location.href = "third.html";
}

// question 5 

function removeButton(details) {
    console.dir(details);

    const container = document.querySelector(".container");
    const button = document.querySelector(".btn");
    container.removeChild(button);
}

// question 6

const list = document.createElement("li");
console.log(list);

list.className = "parrots";
const listContent = document.createTextNode("Parrots");

list.appendChild(listContent);
console.log(list);

cows.after(Parrots);

// question 7 

const gamesUrl = "https://api.rawg.io/api/games/3801";

fetch(gamesUrl)
     .then(function(response) {
         return response.json();

     })
     .then(function(json) {
         createDetails(json);
     })
     .catch(function(error) {
         console.dir(error);
     });
     
