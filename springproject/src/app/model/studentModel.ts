export class StudentModel {

    id!: number;
    name!: string;
    email!: string;
    cell!: string;
    gender!: string;
    dob!: Date;

    department!: {
        id: number;
        name: string;

        faculty: {
            id: number;
            name: string;
            totalSeat: number;
        }
    }



}