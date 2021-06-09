"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const product_model_1 = require("./product.model");
class ProductService {
    constructor() {
        this.products = [];
    }
    insertProduct(name, description, price) {
        const id = Math.ceil((Math.random() * 1000)).toString();
        const newProduct = new product_model_1.Product(id, name, description, price);
        this.products.push(newProduct);
        return id;
    }
    getProduct(id) {
        const product = this.products.find(prod => prod.id == id);
        if (!product) {
            throw new common_1.NotFoundException;
        }
        return Object.assign({}, product);
    }
    retrieveAllProducts() {
        return [...this.products];
    }
    updateSpecificProduct(id, name, description, price) {
        const product = this.products.find(prod => prod.id === id);
        if (!product) {
            throw new common_1.NotFoundException;
        }
        product.name = !name ? product.name : name;
        product.description = !description ? product.description : description;
        product.price = !price ? product.price : price;
        return Object.assign({}, product);
    }
    deleteSpecificProduct(id) {
        const prodInd = this.products.findIndex(prod => prod.id === id);
        if (prodInd == -1) {
            throw new common_1.NotFoundException;
        }
        this.products.splice(prodInd, 1);
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=products.service.js.map