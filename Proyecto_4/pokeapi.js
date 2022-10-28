const container = document.querySelector(".pokemon-container");
function fetchPokemon(id) {
  let Nrandom = Math.floor(Math.random()*(((900)-(1))+1)+1);
  fetch(`https://pokeapi.co/api/v2/pokemon/${Nrandom}/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      createPokemon(data);
    });
}

function fetchPokemons() {
  for (let i = 1; i <= 1 + 5; i= i+1) {
    fetchPokemon(i);
  }
}
function createPokemon(pokemon) {
  const carta = document.createElement("div");
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  carta.appendChild(cardContainer);
  const CPoke = document.createElement("div");
  CPoke.classList.add("pokemon-block");
  const ImgPokemon = document.createElement("div");
  ImgPokemon.classList.add("ImgPokemon");
  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;
  ImgPokemon.appendChild(sprite);
  const nombrePokemon = document.createElement("p");
  nombrePokemon.classList.add("nombrePokemon");
  nombrePokemon.textContent = pokemon.name;
  CPoke.appendChild(ImgPokemon);
  CPoke.appendChild(nombrePokemon);
  const cardBack = document.createElement("div");
  cardBack.classList.add("pokemon-block-back");
  cardContainer.appendChild(CPoke);
  cardContainer.appendChild(cardBack);
  container.appendChild(carta);
}

fetchPokemons();
function recargar () {
  window.location.href = window.location.href;
}