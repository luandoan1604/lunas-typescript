"use strict";
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('moving at speed: ' + speed);
}
let a = { type: 'bird', flyingSpeed: 100 };
let b = { type: 'horse', runningSpeed: 200 };
moveAnimal(a);
moveAnimal(b);
