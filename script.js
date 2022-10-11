// const prompt = require(`prompt-sync`)();

// const { default: axios } = ("axios");

// async function main(){
//     let response = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu");
//     console.log(response.data);
// }
// main()

let btnSearch = document.querySelector(`#btnSearch`).addEventListener(`click`, async ()=>{
    let urlWithout = "https://pokeapi.co/api/v2/pokemon/";
    let displayName = document.querySelector("#namePokeDisplay");
    let inputText = document.querySelector("#inputPoke").value;
    let fullURL = (await axios.get(urlWithout+inputText+`/`)).data;
    displayName.innerText = `${fullURL.name}`.toUpperCase();
    document.querySelector(`#frontMale`).src = fullURL.sprites.front_default;
    document.querySelector(`#frontFemale`).src = fullURL.sprites.front_female;
    document.querySelector(`#frontShiny`).src = fullURL.sprites.front_shiny;
    document.querySelector(`#frontFemaleShiny`).src = fullURL.sprites.front_shiny_female;
});