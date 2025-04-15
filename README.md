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


* Index Signature
* keyof 

* Template literal types build on string literal types, and have the ability to expand into many strings via unions.


* Branded Types for validation, type specificity and preventing accedental mixing
* Mapped Type

* Conditional Types

* interfaces and classes.


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

```
npm i jquery
npm i vitest

npm i jest @types/jest

$("<div />)

"types": ["jQuery" , "vitest/globals"],  

```

basic types:
* string
* number
* boolean
* RegExp
* function
* any
* unknown
* undefined
* null

any or unknown can be used where we don't know in advance the type of data.

let result:any = makeApiCall(); // makeApiCall is a JS function

* void type
* void operator ==> evalutes an expression to undefined

let data; // undefined

let response = null;

npm i @types/node

=======

Type Assertions and Type Predicates

// strict

```
let product  = {
  "name" : "A",
  "price" : 5555
  update: function(d) {
    this.price = d;
  }
}

product.update(5211); // works
let ref = product.update; //
ref(9999);

// strict is false, --> updates global object's price
``

Union Type:

let data:string | number = "Hello";

data = 100;

=====================================

Generic Functions <T>
* HOF: High order functions:
* function which returns a function
* function which accepts a function

filter(predicateFn)
map(transformFn)
reduce(aggregateFn)
forEach(consumerFn)

https://rxmarbles.com/

ts-node --> REPL

npx ts-node hof1.ts

React.memo()

=============

Complex types:
* type
* interface
* class 

type --> structure of object

```
type Product = {
  "name": strring,
  "price" : number,
  "category"?: string
}

function addProduct(p: Product) {

}

addProduct({"name": "iPhone", "price": 89000.00});

```

type intersection [&]

```
type User = {
  "name": string,
  "email": string
}

type Admin = User & {
  "role": string
}

```
type Union [ | ]

```
type Address = string | string[];

let address:Address = "5 M G Road";
address: ["1 Main Road", "8 HR Road"];

```

Branded Type:
* Validation
* Avoid accedental mixing of types


Template literal types build on string literal types, and have the ability to expand into many strings via unions.

JavaScript template string

let data = `
  <div class="card">
      <div class="title">
      ${product.title}
    </div>
  </div>
`
Day 2:
```
* tuple
* record type

* Recursive Type
* Extracting Type
* Conditional Types:
type ConditionalType = SomeType extends OtherType ? TrueType : FalseType
* infer 
* Mapped Type: generic type using union of keys [keyof] to create a type


* interface and class
* using JS in TS
* Decorators
* webpack
* React typesript
```

Day 2:
Tuple types.
A tuple is a typed array with a pre-defined length and types for each index

let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

```

  const React = (
      let state: number;
      function useState(initialValue:number): [number, (data:number) => void] {
          state = state | initialValue;

          setState(data) {
            state = data;
          }

          return [state, setState];
      }
      function render(component) {

      }
      return {
        useState,
        render
      }
  )(); //IIFE

function App() {
  let [state, useState] = React.useState();
}

```

Recursive Type:

```
let data:[][] = [[2,3,5],  [5,6,1]];

type NumberArray = number [] | NumberArray[]

let data:NumberArray = [[2,3,5],  [5,6,1]];
data = [[[4,55,1]]]
```

Conditional Type:

type ConditionalType = SomeType extends OtherType ? TrueType : FalseType

used along with "infer" to deduce a new type

```
class MyOwn {

}
class Rectangle<T extends Number, MyOwn> {
  T width;
  T breadth;
}

new Rectangle("A", "B"); // valid
new Rectangle(4,1);
new Rectangle(4.1, 25.11);
new Rectangle(new MyOwn(4), new MyOwn(55)); // valid

T extends {}

T extends Product

class Product {}
class Mobile extends Product {} // inheritance
class Tv extends Product();
```

Mapped Type
* Mapped Type: generic type using union of keys [keyof] to create a type

===========

Record Type
Constructs an object type whose property keys are Keys and whose property values are Type. 
This utility can be used to map the properties of a type to another type.

All keys are required

```
  type Streams = "Java" | "React"

  type User = {
    "id": number,
    "name": string
  }

  let registrations:Record<Streams, User[]> = {
      "Java": [
        {id: 1, "name": "A"}, {id:2, "name": "B"}
      ],
      "React": [
         {id: 23, "name": "E"}, {id:21, "name": "AB"}
      ]

  } 

  type RegType = {
    [key in Streams]: User[]
  }
```
interfaces and classes

interfaces can be used instead of type to declare the shape of object.
interfaces are specific for object types

type MyType  = number;

type can be used to extract a type from object

```
  let product = {
      "id": 44,
      "name": "Mac",
      "supplier": {
        "name": "Apple",
        "place" : "Redmond"
      }
  }

type Supplier = typeof product.supplier

  interface Product {
    "id": number,
    "name": string
  }

```

interfaces can be used for realization relationship [ contract]

```
https://github.com/chentsulin/awesome-react-renderer
  interface Renderer {
    render(): JSX
  }

  class ReactDOM implements Renderer {
    //
    render() {

    }
  }

  class ReactTv implements Renderer {
    // 
    render() {

    }
  }
```
type NewType<T> = T extends Comparable ? "A": "B"

==========================

Decorators: helps adding metadata to class type

Approach 1: by React

// Specialization 
class ProductCard extends Component {

}

Approach 2: by Angular

@Component({
  "template": `<div> ${this.product.name}</div>` 
})
class ProductCard  {
  product:Product;

}


@Observable
class ProductState {

}
```

======

"experimentalDecorators": true, 

Class Decorator functions: should take constructor as argument

function Component(target:any) {
  target.prototype.template = `<div>Hello</div>`
}

@Component
public class Product {

}

let product = new Product();

product['template']

Property Decorator: Field Decorator
function (target:any, propertyKey:string) {}

Method level decorator
function (target:any, methodName: string, descriptor?:PropertyDescriptor)

============================

Simple Typescript based react application to use hooks.

Existing application:
npm i typescript
tsc --init

Using JS in TS.

changing jsx to "tsx" will fail because of type definitions

typings.d.ts
declare module React {
  createElement(arg:any) => JSX
}

https://github.com/DefinitelyTyped/DefinitelyTyped

```
npm i react 

npm i @types/react
```

yarn create react-app samplereact --template typescript

npm i axios @types/axios bootstrap react-bootstrap react-router-dom