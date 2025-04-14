
function addNumbers(a: number, b: number) :number {
    return a + b;
}

let result:number = addNumbers(4,5);

// function overloading

function addData(a:number, b: number): number;

function addData(a:string, b: string) :string ;

function addData(a: unknown, b: unknown) {
    if(typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if( typeof b === 'string' && typeof a === 'string') {
        return a + b;
    }
}

console.log(addData(4, 5));
console.log(addData("Hello", "World"));

// optional parameter

function addValues(a: number, b: number, c?: number) {
    if(typeof c === 'undefined') {
        c = 0;
    }
    return a + b + c;
}

addValues(2,4);
addValues(4,2,6);
