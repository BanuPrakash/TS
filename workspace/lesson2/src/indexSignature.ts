
type User = {
    [key:string]: string | number
    name: string,
    email : string,
    age : number
}

let user:User = {
    name: 'Roger',
    email: 'roger@gmail.com',
    age: 42
}

console.log(user['name']);

let key = "email";

console.log(user[key]);

user["place"] = "Blore"

for(let key in user) {
    console.log(user[key]);
}