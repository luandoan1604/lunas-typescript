function handleData(obj: {id:number, name:string, image:string}) {
    let app = document.querySelector("#app");
    let str:string = '';
    let div = document.createElement("div");
    div.className = "item";
    str += `<span> #${obj.id} </span>`;
    str += `<img src="${obj.image}">`;
    str += `<h3>${obj.name}</h3>`;
    div.innerHTML = str;
    app?.appendChild(div)
}

let url: string = 'https://pokeapi.co/api/v2/pokemon/';

const pokemons: number = 20;

function getAPI(url: string, pokemons: number) {
    let arrRandom: Array<number> = [];
    while(true) {
        let random: number = Math.floor(Math.random() * pokemons) + 1;
        if(arrRandom.includes(random) == false) {
            arrRandom.push(random);
            window.fetch(url + random)
            .then(res => {
                return res.json();
            })
            .then(data => {
                let id: number = random;
                let name: string = data.forms[0].name; console.log(name);
                let img: string = data.sprites.front_shiny; console.log(img);
                let newPokemon: {
                    id: number,
                    name: string,
                    image: string, 
                    type: string
                } = {
                    id: id,
                    name: name,
                    image: img,
                    type: ''
                }
                console.log(newPokemon);
                handleData(newPokemon);
            })
        }
        if(arrRandom.length >= pokemons) {
            break;
        }
        console.log(arrRandom);
    }
}
getAPI(url, pokemons);
