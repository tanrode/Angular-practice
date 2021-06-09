export class Product{
    id: string;
    name: string;
    description: string;
    price: number;

    constructor(id: string, name: string, description: string, price: number){
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
    }
}

// import * as mongoose from 'mongoose';

// export const prodSchema = new mongoose.Schema({
//     name: {type: String, required: true},
//     description: {type: String, required: true},
//     price: {type: Number, required: true}, 
// });

// export interface Product{
//         id: string;
//         name: string;
//         description: string;
//         price: number;
// }