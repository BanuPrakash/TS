
type Product = {
    "name" : string,
    "price" : number
}

type Person = {
    "name" : string,
    age : number
}

function isProduct(data: any): boolean {
    if(typeof data.price == 'number') {
        return true;
    }
    return false;
}

// function isPerson(data: any): boolean {
//     if(typeof data.age == 'number') {
//         return true;
//     }
//     return false;
// }


function isPerson(data: any): data is Person {
    if(typeof data.age == 'number') {
        return true;
    }
    return false;
}

function doTask(data:any) {
    if(isPerson(data)) {
        console.log(data.age) ;
    }
    if(isProduct(data)) {
        console.log((data as Product).price) ;
    }
}

doTask({"name": "iPhone", price : 89000.00});
doTask({"name": "Jack", price : 34});