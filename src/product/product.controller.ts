import { HttpService } from '@nestjs/axios';
import { Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy, EventPattern } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(private productService:ProductService,
        private httpService: HttpService){

    }

    @Get()
    async all(){
        return this.productService.all();
    }

    @Post(':id/like')
    async like(@Param('id') id: number){
        // const product = await this.productService.findOne(id);
        //     return this.productService.update(id, {
        //     like: product.like+1
        // });

        this.httpService.post(`http://localhost:8001/api/products/${id}/like`, {}).subscribe(
            res=>{
                console.log(res)
            }
        )
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
