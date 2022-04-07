function Logger(constructor: Function){
    console.log('logging...');
    console.log(constructor);
}

@Logger class Person{
    name = 'max';
    constructor(){
        console.log('creating person object...');
    }
}

const pers = new Person();

console.log(pers);