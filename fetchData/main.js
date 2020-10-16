document
  .getElementById("cargaPokemonBtn")
  .addEventListener("click", () => {
    fetch('http://www.omdbapi.com/?apikey=')
      .then(resp => resp.json())
      .then(data => {
        document.getElementById("namePokemon").innerText = data.name;
        data.abilities.map(item => document.write(item.ability.name));
      })
      .catch(() => console.log("La URL está mal"));
  });

// ---------------

async function retrieveTrumpData(keywords) {
  let result = await fetch(`https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${keywords}`)
    .then(response => response.json())
    .then(data => data.message);
  return result;
}

document
  .querySelector("#btnTrump")
  .addEventListener("click", async () => {
    let keywords = document.querySelector("#donald").value;
    let quote = document.createElement("p");
    quote.innerText = await retrieveTrumpData(keywords);
    document.querySelector("#trumpbox").appendChild(quote);
  });