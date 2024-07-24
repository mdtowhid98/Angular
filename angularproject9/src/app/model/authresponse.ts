import { userModel } from "./user.model";

export interface Authresponse {
    token:string;
    user:userModel;
}
