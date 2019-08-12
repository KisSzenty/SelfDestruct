import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav/nav.component';
import { IndexComponent } from './page/index/index.component';
import { UsersListComponent } from './page/users-list/users-list.component';
import { UsersEditComponent } from './page/users-edit/users-edit.component';
import { UsersAddComponent } from './page/users-add/users-add.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';
import { AboutUsComponent } from './page/about-us/about-us.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    UsersListComponent,
    UsersEditComponent,
    UsersAddComponent,
    FilterPipe,
    SorterPipe,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
