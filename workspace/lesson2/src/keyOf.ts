
type UserType = {
    name: string,
    email: string,
    age: number
}

let userType: UserType = {
    name: 'Roger',
    email: 'roger@gmail.com',
    age: 42
}


function getProp<T, K extends keyof T>(obj: T, prop: K) {
         return obj[prop] 
};



console.log(getProp(userType, "email"));


Object.keys(userType).forEach(key => {
    console.log(userType[key as keyof UserType]);
})