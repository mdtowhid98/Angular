import { HotelModel } from "./hotel.model";

export class RoomModel{

    id!:number;
    roomType!: string;
    image!:string;
    price!: number;
    area!: number;
    adultNo!: number;
    childNo!: number;
    avilability!: boolean;
    
    hotel!:HotelModel;


}