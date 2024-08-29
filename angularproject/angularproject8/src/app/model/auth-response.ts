import { userModel } from "./user.model";

export interface AuthResponse {

token:string;
user:userModel;

}
