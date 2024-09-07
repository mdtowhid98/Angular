import { CategoryModel } from "./category.model";

export class MedicineModel{

    id!:number;
    name!:string;
    manufacturer!:string;
    price!:number;
    quantity!:number;
    expiryDate!:Date;
    category!:CategoryModel;

}