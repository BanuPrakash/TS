// OCP, Closed for Change Open for extension
export function filter<T>(elems: T[], predicateFn: (elem: T) => boolean) {
    let result = [];
    for (let i = 0; i < elems.length; i++) {
        if (predicateFn(elems[i])) {
            result.push(elems[i]);
        }
    }
    return result;
}

export function map<T, R>(elems: T[], transformFn: (elem: T) => R) {
    let result: R[] = [];
    for (let i = 0; i < elems.length; i++) {
        result.push(transformFn(elems[i]));
    }
    return result;
}

export function memo<T extends ((...args: any[]) => any)>(fn: T) {
    let cache = new Map<string, ReturnType<T>>();
    return function (...args: Parameters<T>): ReturnType<T> { // returned function can access all members of outer fn --> Closure
        let key = JSON.stringify(args);
        if (!cache.has(key)) {
            cache.set(key, fn(args));
        }
        return cache.get(key) as ReturnType<T>;
    }
}