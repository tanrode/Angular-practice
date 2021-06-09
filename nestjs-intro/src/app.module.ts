import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';
//import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductModule /*, MongooseModule.forRoot('mongodb+srv://tanrode:tanu13@Ro06@nestjs-crud.fkkml.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')*/],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
