import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './modules/routing.module';
import { AppComponent } from './app.component';

// pages
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { PostsComponent } from './pages/admin/posts/posts.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

// components
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

// material
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [AppComponent, LoginComponent, AdminComponent, UsersComponent, PostsComponent, FooterComponent, SidenavComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
