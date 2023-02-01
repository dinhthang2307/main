import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { PromiseProvider, Document } from "mongoose";


export type ProductDocument= Product & Document;
@Schema()
export class Product {
  @Prop()
  title: string;
  @Prop()
  image: string;
  @Prop()
  like: number;
  @Prop()
  id: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);