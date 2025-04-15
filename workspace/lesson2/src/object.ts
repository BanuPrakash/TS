
interface Comparable {
    compare(arg: this):  number;
}

// realization
class Product implements Comparable {
    // id: number;
    // name: string;
    // price: number;

    constructor(private id: number, private name: string, private price: number) {
        // this.id = id;
        // this.name = name;
        // this.price = price;
    }
    compare(arg: this): number {
        return this.price - arg.price;
    }

    // methods
    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

// specialization
class Mobile extends Product {
    constructor( id: number,  name: string,  price: number, private connectivity: string) {
        super(id, name, price);
    }

    // getter
    get info() {
        return this.getName() + "," + this.getName() + ", " + this.connectivity;
    }
}

let mobiles:Mobile[] = [
    new Mobile(245,  "Vivo", 50000.00, "4G"),
    new Mobile(245,  "iPhone", 950000.00, "5G"),
    new Mobile(245,  "MotoG", 12000.00, "5G")
]

// OCP
function sort(elems: Comparable[]) {
    for(let i = 0; i < elems.length; i++) {
        for(let j =  i + 1; j < elems.length; j++) {
            if(elems[i].compare(elems[j]) > 0) { 
             let temp:Comparable = elems[i];
             elems[i] = elems[j];
             elems[j]= temp;    
            }
        }
    }
}

sort(mobiles);
console.log(mobiles);