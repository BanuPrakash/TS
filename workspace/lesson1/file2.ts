// basic data types of ts
// string, number, boolean, enum, RegEx
// type annotations

let firstName:string = "Roger";

enum BillingSchedule {
    MONTHLY,
    QUARTERLY,
    YEARLY
}

// banu@gmail.com
let emailRegEx = new RegExp(/^[a-zA-Z0-9_]@+[a-z]{3,}\.(com|edu|co\.in)$/)

let email:string ="banu@gmail.com";

if(emailRegEx.test(email)) {
    console.log("Email is Valid!!!")
}

