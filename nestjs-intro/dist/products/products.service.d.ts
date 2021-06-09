import { Product } from './product.model';
export declare class ProductService {
    products: Product[];
    insertProduct(name: string, description: string, price: number): string;
    getProduct(id: string): {
        id: string;
        name: string;
        description: string;
        price: number;
    };
    retrieveAllProducts(): Product[];
    updateSpecificProduct(id: string, name: string, description: string, price: number): {
        id: string;
        name: string;
        description: string;
        price: number;
    };
    deleteSpecificProduct(id: string): void;
}
