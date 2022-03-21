//Array, tuple, any, enum
enum Role {ADMIN, READ_ONLY, AUTHOR};
const person1:{
    name: string,
    age: number,
    hobbies: string[],
    role: any,
    roletuple: [number, string]
}={
    name:'typescript',
    age: 11,
    hobbies: ['sports', 'cooking'],
    role: Role.AUTHOR,
    roletuple: [2, 'author']
}

let favourriteActivites: any[];
favourriteActivites = [5, 'sports', true];
console.log(favourriteActivites);


if(person1.role===Role.AUTHOR){
    console.log('is author');
}

person1.roletuple.push('admin');
console.log(person1.roletuple);
person1.roletuple[1] = "holmes";
console.log(person1.roletuple);
// person1.roletuple = [0, 'admin', 'user'];
