 // OCP, Closed for Change Open for extension
export function filter<T>(elems: T[], predicateFn:(elem:T) => boolean) {
    let result = [];
    for(let i = 0 ; i < elems.length; i++) {
        if(predicateFn(elems[i])) {
            result.push(elems[i]);
        }
    }
    return result;
}

export function map() {
    
}