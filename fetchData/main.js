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
