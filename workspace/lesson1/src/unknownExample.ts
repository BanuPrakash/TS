// unknown forces typecheking before using
function doTaskUnknown(cb:unknown) {
    if(typeof cb === 'function') {
        cb();
    } else if(typeof cb === 'string') {
        console.log(cb.toLowerCase());
    }
}