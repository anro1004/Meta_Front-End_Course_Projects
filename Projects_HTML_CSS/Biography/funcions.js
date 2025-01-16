const count = document.getElementById("counterButton");

count.addEventListener("click", function () {
  // Si el texto actual no es un número (NaN), lo inicializamos a 0
  if (isNaN(count.innerText)) {
    count.innerText = 0;
  }
  // Si es un número, lo incrementamos
  else if (count.innerText < 10) {
    count.innerText = parseInt(count.innerText) + 1;
  } else {
    count.innerText = "Count";
  }
});

const inputArtist = document.getElementById("inputArtist");
const addButtonArtist = document.getElementById("addButtonArtist");
const artistList = document.getElementById("artistList");

addButtonArtist.addEventListener("click", function () {
  if (inputArtist.value !== "") {
    const newArtist = document.createElement("li");
    newArtist.innerText = inputArtist.value;
    artistList.appendChild(newArtist);
    inputArtist.value = "";
  } else {
    alert("Por favor, ingresa un nombre de artista.");
    inputArtist.value = "";
  }
});

const inputFilm = document.getElementById("inputFilm");
const addButtonFilm = document.getElementById("addButtonFilm");
const filmList = document.getElementById("filmList");

addButtonFilm.addEventListener("click", function () {
  if (inputFilm.value !== "") {
    const newFilm = document.createElement("li");
    newFilm.innerText = inputFilm.value;
    filmList.appendChild(newFilm);
    inputFilm.value = "";
  } else {
    alert("Por favor, ingresa un nombre de film.");
    inputFilm.value = "";
  }
});
