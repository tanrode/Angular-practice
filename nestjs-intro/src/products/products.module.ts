import { Module } from '@nestjs/common';
//import { MongooseModule } from '@nestjs/mongoose';
//import { prodSchema } from './product.model';
import { ProductsController } from './products.controller';
import { ProductService } from './products.service';

@Module({
  imports: [],// imports: [MongooseModule.forFeature([{name: 'Product', schema: prodSchema}])],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductModule {}
