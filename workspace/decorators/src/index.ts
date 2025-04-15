import Book from "./Book";

let book = new Book();
book.price = -10;

import Lib from "./Lib";
let compute = new Lib();
console.time("a");
    console.log(compute.fibanocci(40));
console.timeEnd("a")
console.time("b");
    console.log(compute.fibanocci(40));
console.timeEnd("b")

