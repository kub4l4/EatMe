import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { userRoutes }from "./user.routes"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";
import { ProfileComponent } from "./profile.component";
import { AuthService } from "./auth.service";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations:[
        LoginComponent,
        ProfileComponent
    ],
    providers:[
        AuthService
    ]

})
export class UserModule{

}