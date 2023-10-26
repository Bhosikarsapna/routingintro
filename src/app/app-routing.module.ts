import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./shared/components/products/products.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { HomeComponent } from "./shared/components/home/home.component";
import { ContactComponent } from "./shared/components/contact/contact.component";


const appRoute : Routes = [
    {
        path : '', //localhost:4200
        component : HomeComponent
    },
    {
        path : 'home', //localhost:4200/home
        component : HomeComponent
    },
    {
        path : 'products', //localhost:4200/products
        component : ProductsComponent
    },
    {
        path : 'users', //localhost:4200/users
        component : UsersComponent
    },
    {
        path : 'contact', //localhost:4200/users
        component : ContactComponent
    }
]

@NgModule({
     imports : [RouterModule.forRoot(appRoute)],
     exports : [RouterModule]  // for outlet router directive
})
export class AppRoutingModule{

}