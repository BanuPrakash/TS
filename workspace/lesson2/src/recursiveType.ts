
 
type Json = string | number | boolean  | {[key:string]: Json} | Json[]

let data: Json = [{"name": "Roger", "age": 33, "address": {
    "street": 1,
    "city": 'BLORE'
}}]