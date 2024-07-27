import { UserModule } from "./user/user.module";

export interface Authresponse {
    token:string;
    user:UserModule;
}
