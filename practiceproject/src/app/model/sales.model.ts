export class SalesModel{
    id!: string;
    quantity!: string;
    totalprice!: string;
    salesdate!: Date;
    product!: {

        id: string | undefined;
        name: string | undefined;
        price: string | undefined;
        stock: string | undefined;
       

    }
}