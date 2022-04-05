// console.log('my name is vijay');
// import { Invoice } from './classes/Invoice.js';
// In that we can simply access the HTML anchor day or we can say we can take anything
// const anchor = document.querySelector('a');
// console.log(anchor);
// In that we can access the anchor tag as well as the property of anchor tag but we cannot access the property by using this syntex for overcome this we can have some methods that we discuss downward
// console.log(anchor.href);// .href shows we can access the property of anchor tag
// This is one method to access the property of anchor tag
// console.log(anchor);
// if(anchor){
//     console.log(anchor.href);
// }
// This is the Second method to accesss the properties of anchor tag
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
// This means that it select HTML form element
// const form = document.querySelector('form')!;
//This means that it select the form element because same class can be in any form that's why it show form element when we hover it
// const form = document.querySelector('.new-item-form')!; 
// To resolve form element problem we use type casting
// const form = document.querySelector('.new-item-form') as HTMLFormElement; 
// console.log(form.children);
// inputs- In that basically we can access the inputs
// const type = document.querySelector('#type') as HTMLSelectElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// Here we grab the from
// form.addEventListener('submit',(e:Event) =>{
//      e.preventDefault();
//      console.log(
//          type.value,
//          tofrom.value,
//          details.value,
//          amount.valueAsNumber
//      );
// })
// Classes
// class Invoice{
//   readonly  client:string;
//     private details:string;
//     public amount:number;
// access modifiers
// constructor(
//     readonly client : string,
//     private details : string,
//     public amount : number,
// ){
//    
// }
// format(){
//  return `${this.client} owes @${this.amount} for ${this.details} `
// }
// }
// interfaces
// interface IsPerson {
//     name : string;
//       age : number;
//       speaks(a:string):void;
//       spend(a:number): number;
// }
// const me: IsPerson = {
//     name:'vijay',
//     age : 22,
//     speaks(text:string): void{
//         console.log(text);
//     },
//     spend(amount:number): number{
//         console.log('I spend',amount);
//     return amount;
//     }   
// };
// // let someone:IsPerson;
// const greetPerson = (person:IsPerson) => {
// console.log('hello',person.name);
// }
// greetPerson(me);
// console.log(me);
// import { Invoice } from './classes/Invoice.js';
// import { ListTemplete } from "../classes/ListTempletes.js";
// import { HasFormatter } from "./interHasFormatter.js";
// import { Payment } from './classes/Payment.js';
import { Invoice } from '../classes/Invoice.js';
import { Payment } from '../classes/Payment.js';
// import {} from '../classes/ListTempletes.js';
let docOne;
let docTwo;
docOne = new Invoice('youshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('lugi', 'work in the lugi website', 300);
// console.log(invOne,invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
// const list = new ListTempletes(ul);
// Here we grab the from
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
// // invOne.client = 'vijay';    
// invOne.amount = 500;
// console.log(invoices);
// let doc : HasFormatter;
// if(type.value === 'invoice'){
//     doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber)
// }else{
//     doc = new Payment(tofrom.value,details.value,amount.valueAsNumber)
// }
// list.render(doc,type.value,'end')
// });
