import { ProductService } from "./products.service";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductService);
    addProduct(prodName: string, prodDesc: string, prodPrice: number): {
        id: string;
    };
    getProduct(prodId: string): {
        id: string;
        name: string;
        description: string;
        price: number;
    };
    getAllProducts(): import("./product.model").Product[];
    updateProduct(prodId: string, prodName: string, prodDesc: string, prodPrice: number): {
        id: string;
        name: string;
        description: string;
        price: number;
    };
    deleteProduct(prodId: string): any;
}
