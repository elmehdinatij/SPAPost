import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Post } from 'src/Models/model.posts';
import { PostsService } from 'src/Services/service.posts';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gestion-post',
  templateUrl: './gestion-post.component.html',
  styleUrls: ['./gestion-post.component.css']
})
export class GestionPostComponent implements OnInit {
  myform: FormGroup;
  userId : FormControl;
  id : FormControl;
  title : FormControl;
  body : FormControl;
  post: Post = new Post();
  constructor() { }

  ngOnInit() {
  }

}
