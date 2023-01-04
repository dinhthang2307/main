import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(private productService:ProductService){

    }

    @Get()
    async all(){
        return this.productService.all();
    }

    @EventPattern('hello')
    async hello(data: string){
        console.log(data);
    }
}
