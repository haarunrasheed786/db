import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NavComponent} from "./nav/nav.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {OrderComponent} from "./order/order.component";
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'nav', component: NavComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Dashboard/Orders', component: OrderComponent},
  {path: 'Dashboard/Users', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
