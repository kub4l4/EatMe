import { Injectable } from "@angular/core";
import { IUser } from "./user.models";

@Injectable()
export class AuthService {
    correntUser: IUser;


    loginUser(userName: string, password: string){
        this.correntUser = {
            id: 1,
            userName: userName,
            firstName: 'John',
            lastName: 'Papa'
        }
    }
    isAuthenticated(){
        return !!this.correntUser;
    }

    updateCurrentUser(firstName:string, lastName:string){
        this.correntUser.lastName = lastName
        this.correntUser.firstName = firstName
    }



}