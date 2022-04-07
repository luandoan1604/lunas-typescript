interface Bird{
    type: 'bird';
    flyingSpeed: number;
}

interface Horse{
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    let speed;
    switch (animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
        break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('moving at speed: ' + speed);
}

let a:Bird={type:'bird',flyingSpeed:100};
let b:Horse={type:'horse',runningSpeed:200};
moveAnimal(a);
moveAnimal(b);