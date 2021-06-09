import { Injectable, NotFoundException } from "@nestjs/common";
//import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from './product.model';

//@Injectable()
export class ProductService {
    products: Product[] = [];

    //constructor(@InjectModel('Product') private readonly productModel: Model<Product>){}

    insertProduct(name: string, description: string, price: number){
        const id = Math.ceil((Math.random()*1000)).toString();
        const newProduct = new Product(id,name,description,price);
        this.products.push(newProduct);
        return id;
        // const newProd = new this.productModel({name, description, price});
        // const result = await newProd.save();
        // console.log(result);
        // return result.id as String;
    }

    getProduct(id: string){
        const product = this.products.find(prod => prod.id == id );
        if(!product){
            throw new NotFoundException;
        }
        return {...product};
        // const product = await this.productModel.findById(id);
        // if(!product){
        //     throw new NotFoundException;
        // }
        // console.log(product);
        // return product;
    }

    retrieveAllProducts(){
        return [...this.products];
        // const product = this.products.find();
        // if(!product){
        //     throw new NotFoundException;
        // }
        // const products = await this.productModel.find().exec();
        // return products.map((prod) => ({id: prod.id, name: prod.name, description: prod.description, price: prod.price}));
    }

    updateSpecificProduct(id: string, name: string, description: string, price: number){
        const product = this.products.find(prod => prod.id === id);
        if(!product){
            throw new NotFoundException;
        }
        product.name = !name ? product.name : name;
        product.description = !description ? product.description : description;
        product.price = !price ? product.price : price;

        return {...product};
    }

    deleteSpecificProduct(id: string){
        const prodInd = this.products.findIndex(prod => prod.id === id);
        if(prodInd == -1){
            throw new NotFoundException;
        }
        this.products.splice(prodInd,1);
    }

}