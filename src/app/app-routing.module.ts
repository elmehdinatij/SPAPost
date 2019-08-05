import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { User } from '../Models/model.users';
import { Post } from '../Models/model.posts';
import { GestionPostComponent } from './gestion-post/gestion-post.component';
import { ListPostComponent } from './gestion-post/list-post/list-post.component';
import { UpdatePostComponent } from './gestion-post/update-post/update-post.component';

const routes: Routes = [
  {
    path: 'gestionpost', component: GestionPostComponent,
    children:
    [
      { path: 'update-post', component: UpdatePostComponent },
      { path: 'list-post', component: ListPostComponent },
      { path: 'update-post/:id', component: UpdatePostComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
