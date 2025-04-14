import { filter } from './lib';

let products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

let nos: number[] = [6, 1, 5, 9, 3, 10];

let evens: number[] = filter(nos, (no: number) => no % 2 == 0);

console.log(evens);
// @ts-ignore
let fruits = filter(products, (p) => p.stocked == true);
console.log(fruits)

// @ts-ignore
let names: string[] = map(products, (p) => p.name);
// Apple, DragonFruit
let doubles: number[] = map(nos, (no: number) => no * 2);
// 12, 2, 10,