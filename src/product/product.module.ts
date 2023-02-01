import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './product.model';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
  imports:[
    MongooseModule.forFeature([{name: 'Product', schema: ProductSchema}]), 
    HttpModule],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {

}
