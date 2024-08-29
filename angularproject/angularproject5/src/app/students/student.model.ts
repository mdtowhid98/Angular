

export class StudentModel{

    id!: number;
  name!: string;
  email!: string;
  cellNo!: string;


  location!:{

    id: string |undefined;
  name: string |undefined;
  city: string |undefined;
  state: string |undefined;
  photo: string |undefined;
  availableUnits: number |undefined;
  wifi: boolean |undefined;
  laundry: boolean |undefined;


  }
}