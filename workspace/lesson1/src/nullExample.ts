import fs from 'fs'

fs.readFile("a.txt", (err, data) => {
    if(err !== null) {
        console.log(data);
    }
});