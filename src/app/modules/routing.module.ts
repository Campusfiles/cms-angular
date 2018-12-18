import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { AdminComponent } from '../pages/admin/admin.component';
import { PostsComponent } from '../pages/admin/posts/posts.component';
import { UsersComponent } from '../pages/admin/users/users.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'posts', component: PostsComponent },
      { path: 'users', component: UsersComponent },
      { path: '', component: PostsComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
