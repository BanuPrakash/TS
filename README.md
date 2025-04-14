# TypeScript

```

Banuprakash C
Full Stack Architect,
Co-founder & CTO, Lucida Technologies Pvt Ltd.,
Corporate Trainer,
Emails: banuprakashc@yahoo.co.in; banuprakash.cr@gmail.com
https://www.linkedin.com/in/banu-prakash-50416019/
https://github.com/BanuPrakash/TS

```
Softwares Required:
```
Visual Studio Code, Chrome Web Browser and NodeJS Latest LTS
```

Day 1:
```
Contents for Day 1:

* Introduction, typescript, tsconfig
* Basic Types
* Arrays and tuples

* Functions
 - type assertion and type predicate
 - function overloading
 - void operator
   
* Complex types using type: type intersection, union, extracting type, recursive type, Using type definition files .d.ts [skipLibCheck]

* Generic Functions


* Template literal types build on string literal types, and have the ability to expand into many strings via unions.


* Branded Types for validation, type specificity and preventing accedental mixing
* Conditional Types

* interfaces and classes.

* Index Signature
* keyof 

```

JS Engine : V8, Rhino, Nashorn, Chakra

Typescript, Dart, CoffeeScript, LiveScript 

Babel --> babel-loader, @babel/core, @babel/preset-env, @babel/preset-react

NodeJS uses CommonJS module system [module.exports and require()]

ESM module [ export and import]

========

TypeScript: language on top of JS
* statically typed
* better documentation
* Contract between developers.

===============

npm i -g typescript

* tsc
* definitions

npm init --y

npm i typescript

tsc --init

tsc first.ts ====> first.js

 "outDir": "./dist",      
   "noEmitOnError": false, 

    "target": "es2016",                                 
    "lib": ["ES2023", "DOM"],  
    types: ["jquery"]

npm i vitest

JEST / Jasmine / Mocha / vitest for Unit testing

using global variables in typescript

npm i jquery
npm i vitest

npm i jest @types/jest

$("<div />)

"types": ["jQuery" , "vitest/globals"],  