import { LocationModel } from "./location.model";

export class HotelModel{


id!:number;
name!:string;
address!:string;
rating!:string;
minPrice!:number;
maxPrice!:number;
image!:string;
location!:LocationModel;

}