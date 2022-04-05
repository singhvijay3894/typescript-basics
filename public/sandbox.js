"use strict";
// let  character = "vijay";
// let age = 22;
// let isBlackBelt = false ;
// character = 20;
// character = "singh";
// age = "panwar";
// age = 23;
// isBlackBelt = "somethingelse";
// isBlackBelt = true;
// conclusion is that - we can always change the  value but we cannot chnage  the type once we declare any type it is fixed it cannot be changed in ts.
// const circ = (diameter:number) => {
//     return diameter*Math.PI;
// }
// console.log(circ(2));
// console.log(character);
//  const input = document.querySelectorAll('input');
//  console.log(input);
//  input.forEach(input => {
//       console.log(input);
//  })
// Array
// In that case we only push the string only we cannot push the numbers.
// let names = ['vijay','singh','panwar'];
// names.push('anil');
// names.push(3);
// names[0] = 3;
// In that case we can only push the numbers only we cannot the strings.
// let numbers = [10,20,30,40];
// numbers.push(25);
// numbers[1]='vijay';
// In that case we can push both like w can push numbers as well as strings also.
// let mixed = ['vijay',4,'singh',8,9];
// mixed.push('viint');
// mixed[0]=3; 
// Objects
// let ninja = {
//     name : 'mario',
//     Belt : 'Black',
//     age : 30
// }
// ninja.age = 40;
// ninja.name = "vinit";
// ninja.age = "bhavesh";
// ninja.name = 20;
// ninja.skills = ['fighting','sneaking'];
// ninja = {
//     name : 'bhavesh',
//     Belt : 'orange',
//     age : 30
// }
// explicit types
// let character : string;
// let age : number;
// let isLoggedIn: boolean;
// age = 'vijay'; we cannot do that
// age = 30; We can do it
// isLoggedIn = 12; we cannot do that
// isLoggedIn = true;w can do this
// array
// let ninjas: string[];
// ninjas = [20]; Not allowed
// ninjas = ['vijay','vinit','Bhavesh']; Allowed
// array
// In that we can push the elements by using []
// let ninjas: string[]=[];
// ninjas = [20]; Not allowed
// ninjas = ['vijay','vinit','Bhavesh']; Allowed
// ninjas.push('ankit');
// union type = In union type we can store the more then one data like we can store strings and numbers also
// When we declare something like this string|number|boolean this is called union type
// let mixed:(string|number)[] = [];
// mixed = ['vijay','vinit','Bhavesh'];
// mixed.push('hello'); 
// mixed.push(10); 
// console.log(mixed);
// let mixed:(string|number|boolean)[] = [];
// mixed.push('hello'); Allowed
// mixed.push(10); Allowed
// mixes.push(true); Allowed
// let uid: string|number|boolean;
// uid = 'vijay';
// uid = 20;
// console.log(uid);
// Objects
// let ninja1:object;
// ninja1 ={name:'vijay',age:30};
// ninja1 = 'hello'// Not allowed
// let ninjaTwo : {
//     name: string,
//     age : Number,
//     beltColour: string
// }
// ninjaTwo = {
//     name : "Vijay",
//     age : 22,
//     beltColour : 'Black'
// }
// console.log(ninjaTwo);
// conclusion : for this explicit type we can declare the type 
// Dynamics types= This means that we can declare the any data types and in future we can also change it like w can decalre number so in that variable we can take boolean also this is called dynamic type
// let age : any = 25;
//  age = true;
//  age = 55;
//  console.log(age);
//  age = 'hello';
//  console.log(age);
//  age={
//      name:'Vijay'
//  }
//  console.log(age);
// let mixed : any[]=[]
// mixed.push(5);
// mixed.push('mario');
// mixed.push(true);
// console.log(mixed); 
// let ninja : {name: any,age: any};
//  ninja = {
// name : '23',
// age : 'panwar'
// }
// console.log(ninja);
// console.log("test");
// console.log("vijay");
// Function
// let greet = () => {
//     console.log("hello world");
// }
// let greet : Function;
//  greet = () => {
//     console.log("hello world");
// }
// const add = (a:number,b: number, c: string | number) => {
// console.log(a+b);
// }
// add(5,10,10);
