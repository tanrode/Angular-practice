import { Body, Controller, Get, Post, Param, Patch, Delete } from "@nestjs/common";
import { ProductService } from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductService) {

    }

    @Post('add-product')
    addProduct(@Body('name') prodName: string, @Body('description') prodDesc: string, @Body('price') prodPrice: number){
        const generatedId = this.productsService.insertProduct(prodName,prodDesc,prodPrice);
        return {id: generatedId};
        // const prodId = await this.productsService.insertProduct(prodName, prodDesc, prodPrice);
        // return {id: prodId, name: prodName, description: prodDesc, price: prodPrice};
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string){
        return this.productsService.getProduct(prodId);
    }

    @Get()
    getAllProducts(){
        const products = this.productsService.retrieveAllProducts();
        return products;
    }
    
    @Patch(':id')
    updateProduct(@Param('id') prodId: string, @Body('name') prodName: string, @Body('description') prodDesc: string, @Body('price') prodPrice: number){
        return this.productsService.updateSpecificProduct(prodId,prodName,prodDesc,prodPrice);
    }

    @Delete(':id')
    deleteProduct(@Param('id') prodId: string){
        this.productsService.deleteSpecificProduct(prodId);
        return null;
    }
}