import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Role } from '../role.model';
import { TokenModule } from '../token/token.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule { 
  id!: number;
    name!: string;
    email!: string;
    password!: string;
    cell!: string;
    address!: string;
    dob!: Date;
    gender!: string;
    image!: string;
    active!: boolean;
    lock!: boolean;
    role!: Role;
  
    tokens!: TokenModule[];
}
