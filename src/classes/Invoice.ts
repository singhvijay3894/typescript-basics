// Modules-In modules we can import things or export the things
import {HasFormatter} from '../interfaces/HasFormatter.js';
export class Invoice implements HasFormatter{
    // access modifiers
        constructor(
            readonly client : string,
            private details : string,
            public amount : number,
        ) {}
        
        format(){
             return `${this.client} owes @${this.amount} for ${this.details}`;
        }
    }