export class departmentModel {
    id!: number;
    name!: string;
    faculty!: {
        id: number;
        name: string;
        totalSeat: number;
    }
}