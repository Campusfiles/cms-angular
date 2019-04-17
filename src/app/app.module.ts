import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// MODULE
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ROUTING
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './modules/routing.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { PostsComponent } from './pages/admin/posts/posts.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, AdminComponent, UsersComponent, PostsComponent, FooterComponent, SidenavComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, MatTableModule, ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
