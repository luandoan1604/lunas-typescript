"use strict";
function handleData(obj) {
    let app = document.querySelector("#app");
    let str = '';
    let div = document.createElement("div");
    div.className = "item";
    str += `<span> #${obj.id} </span>`;
    str += `<img src="${obj.image}">`;
    str += `<h3>${obj.name}</h3>`;
    div.innerHTML = str;
    app === null || app === void 0 ? void 0 : app.appendChild(div);
}
let url = 'https://pokeapi.co/api/v2/pokemon/';
const pokemons = 20;
function getAPI(url, pokemons) {
    let arrRandom = [];
    while (true) {
        let random = Math.floor(Math.random() * pokemons) + 1;
        if (arrRandom.includes(random) == false) {
            arrRandom.push(random);
            window.fetch(url + random)
                .then(res => {
                return res.json();
            })
                .then(data => {
                let id = random;
                let name = data.forms[0].name;
                console.log(name);
                let img = data.sprites.front_shiny;
                console.log(img);
                let newPokemon = {
                    id: id,
                    name: name,
                    image: img,
                    type: ''
                };
                console.log(newPokemon);
                handleData(newPokemon);
            });
        }
        if (arrRandom.length >= pokemons) {
            break;
        }
        console.log(arrRandom);
    }
}
getAPI(url, pokemons);
