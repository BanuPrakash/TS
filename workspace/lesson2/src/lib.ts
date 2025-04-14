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

export function map<T,R>(elems:T[], transformFn: (elem:T) => R) {
    let result:R[] = [];
    for(let i = 0 ; i < elems.length; i++) {
            result.push(transformFn(elems[i]));
        }
    return result;
}

export function memo<T,R>(fn:Function){
    let cache = new Map<T,R>(); 
    return function(...args:any) { // returned function can access all members of outer fn --> Closure
        let key  = args.join();
        if(!cache.has(key)){
            cache.set(key, fn(args));
        }
        return cache.get(key);
    }
}