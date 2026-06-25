import { Routes } from '@angular/router';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:"add", component:AddInventoryComponent,canActivate: [authGuard]},
    {path:"home", component:InventoryComponent,canActivate: [authGuard]},
    {path:"", component:LoginComponent},
    {path:"register", component:RegisterComponent},
    {path:"add/:id",component:AddInventoryComponent,canActivate: [authGuard]},
    {path:'**',component:PageNotFoundComponent}
];
