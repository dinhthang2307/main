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

    @EventPattern('product_created')
    async productCreated(product: any){
        await this.productService.create({
            title: product.title,
            image: product.image,
            like: product.likes,
            id: product.id
        });
    }

    @EventPattern('product_updated')
    async productUpdated(product: any){
        await this.productService.update(product.id, {
            title: product.title,
            image: product.image,
            like: product.likes,
            id: product.id
        });
    }

    @EventPattern('product_deleted')
    async productDeleted(id: number){
        await this.productService.delete(id);
    }

    @EventPattern('hello')
    async hello(data: string){
        console.log(data);
    }
}
