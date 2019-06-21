import { Routes } from "@angular/router";
import { DataComponent } from "../data/data.component";
import { UserManagementComponent } from "../user-management/user-management.component"

export const appRouter:Routes = [
    {
        path:"data",
        component:DataComponent,
    },
    {
        path:"user-management",
        component:UserManagementComponent
    },
    {
        path:"",
        redirectTo:"data",
        pathMatch:"full"
    }
]