const { useEffect } = require("react");
const { useState } = require("react");



var a = 5;

console.log("var ", a); 

// variable shadowing
function test() {
  let a = "Hello";

  if (true) {
    let a = "Hi";
    console.log(a); ?? Hi
  }

  console.log(a); ??? Hello
}

test();



let x = function name() {
    return true;
}


console.log(sayHi) ????????? hello
console.log(func ) ??????? error


function sayHi() {
    return "Hello"
  }


const func =  functiom sayBye() => {
    return "GoodBye"
  },

  const obj = {
    a: "one",
    b: "two",
    c: "three",
  };

  const {b:"three"} = obj;

  console.log(obj.b);

  

  const obj = {

    a: "one",
  
    b: "two",
  
    a: "three",
  
  };
  
  console.log(obj);

  {
    a: "one",
   
   
     b: "two",
   
   
     a: "three"
   }

   {
    a: "three"
    b: "two",
  }

const a = {};
const b = { key: "b" };
const c = { key: "c" };
console.log(a);  

a[b] = 123;
a[c] = 456;

const [state, setState]= useState(false);


useEffect({anyFunc},[]);