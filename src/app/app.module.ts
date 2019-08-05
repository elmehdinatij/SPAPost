import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionPostComponent } from './gestion-post/gestion-post.component';
import { ListPostComponent } from './gestion-post/list-post/list-post.component';
import { UpdatePostComponent } from './gestion-post/update-post/update-post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from 'src/Services/service.posts';
import { UsersService } from 'src/Services/service.users';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GestionPostComponent,
    ListPostComponent,
    UpdatePostComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    PostsService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
