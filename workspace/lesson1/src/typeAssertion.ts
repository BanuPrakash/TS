
// as keyword for type assertion / type casting
let elem = document.getElementById("btn") as HTMLButtonElement;

elem.type = "reset";


// avoid this in JSX
let elem2 = <HTMLButtonElement>document.getElementById("btn");

