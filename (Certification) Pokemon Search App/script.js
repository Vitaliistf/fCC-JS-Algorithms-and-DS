const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

const pokemonId = document.getElementById("pokemon-id");
const pokemonName = document.getElementById("pokemon-name");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const spriteContainer = document.getElementById("sprite-container");
const pokemonCard = document.querySelector(".pokemon-card");

searchButton.addEventListener("click", async () => {
  types.innerHTML = "";
  spriteContainer.innerHTML = "";

  const name = searchInput.value;
  const id = Number(name);
  let pokemon;
  if (isNaN(id)) {
    pokemon = await findByName(name);
  } else {
    pokemon = await findById(name);
  }

  if (!pokemon.hasOwnProperty("id")) {
    window.alert("Pokémon not found");
  } else {
    populateCard(pokemon);
    pokemonCard.style.display = "block";
  }
});

const findById = async (id) => {
  return await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${id}`)
  .then(resp => resp.json())
  .catch(err => window.alert("Pokémon not found"));
}

const findByName = async (name) => {
  return await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${name.toLowerCase()}`)
  .then(resp => resp.json())
  .catch(err => window.alert("Pokémon not found"));
}

const populateCard = (pokemon) => {
  pokemonId.innerText = pokemon.id;
  pokemonName.innerText = pokemon.name.toUpperCase();
  weight.innerText = pokemon.weight;
  height.innerText = pokemon.height;
  types.innerHTML = pokemon.types.map(obj => `
  <span class="type-card">${obj.type.name.toUpperCase()}</span>`).join("");
  hp.innerText = pokemon.stats[0].base_stat;
  attack.innerText = pokemon.stats[1].base_stat;
  defense.innerText = pokemon.stats[2].base_stat;
  specialAttack.innerText = pokemon.stats[3].base_stat;
  specialDefense.innerText = pokemon.stats[4].base_stat;
  speed.innerText = pokemon.stats[5].base_stat;



  const img = document.createElement("img");
  img.id = "sprite";
  img.src = pokemon.sprites.front_default;
  spriteContainer.appendChild(img);
}