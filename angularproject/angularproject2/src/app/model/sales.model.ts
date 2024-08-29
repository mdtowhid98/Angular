export class SalesModel {
    id!: string;
    quantity!: string;
    unitprice!: string;
    totalprice!: string;
    salesdate!: Date;
    product!: {

        id: number | undefined;
        name: string | undefined;
        price: string | undefined;
        stock: string | undefined;

    }
}