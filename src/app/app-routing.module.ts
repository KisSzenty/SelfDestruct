import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { UsersAddComponent } from './page/users-add/users-add.component';
import { UsersListComponent } from './page/users-list/users-list.component';
import { UsersEditComponent } from './page/users-edit/users-edit.component';
import { AboutUsComponent } from './page/about-us/about-us.component';


const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "list",
    component: UsersListComponent
  },
  {
    path: "edit/:id",
    component: UsersEditComponent
  },
  {
    path: "add",
    component: UsersAddComponent
  },
  {
    path: "about",
    component: AboutUsComponent
  },
  {
    path: "**",
    component: IndexComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
