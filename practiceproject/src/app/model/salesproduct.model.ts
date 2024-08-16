export class SalesProductModel {

    id!: string;
    customername!: string;
    address!: string;

    sale!: {

        id: string | undefined;
        quantity: string | undefined;
        totalprice: string | undefined;
        salesdate: Date | undefined;


    }
    pro!: {
        id: string | undefined;
        name: string | undefined;
        price: string | undefined;
        stock: string | undefined;
    }


}
