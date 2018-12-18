import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { PostsComponent } from './pages/admin/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UsersComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
