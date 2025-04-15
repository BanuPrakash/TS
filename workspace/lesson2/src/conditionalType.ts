type NonNull<T> = T extends null | undefined  ? never: T


function addProduct(name: NonNull<string>, price: NonNull<number>) {
    console.log(name, price)
}

// addProduct("Mac", null); // error


function getProduct() {
    return {
        "id": 1,
        "name": "iPhone",
        "price" : 89000.00,
        "category": "Mobile"
    }
}

// type Product = {
//     id : number,
//     name : string,
//     price: number
// }
type ReturnTypeOf<T> = T extends (...args:any[]) => infer R ? R : never

type ProductType = ReturnTypeOf<typeof getProduct>

function updatePerson(id:number, name: string, email: string) {

}

type ParamsOf<T> = T extends (...args: infer P) => any ? P: never

type PersonParams =  ParamsOf<typeof updatePerson> 

let methodParas:PersonParams = [32, "Roger", "roger@gmail.com"];


type CapitalizedChars = {
    a: 'A',
    m: 'M',
    s: 'S',
    f: 'F'
}

type Capitalized<S> = S extends `${infer C}${infer T}` ? 
`${C extends keyof CapitalizedChars ? CapitalizedChars[C] : C}${T}` : never

type DaysOfTheWeek = "sunday" | "monday" | "tuesday" | "friday"

// Sunday should be valid and not sunday

type CapitalizedDay = Capitalized<DaysOfTheWeek>

const today: CapitalizedDay = "Friday"


// type SnakeCase<T> = T extends `${infer C}${infer T}` ? `${C}${SnakeCase<T>}` : T

type SnakeCase<S> = S extends `${infer C}${infer T}` ? `${C}_${T}`: S