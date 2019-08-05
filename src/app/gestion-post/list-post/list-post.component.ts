import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from 'src/Services/service.posts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  listPost : any;

  constructor(public httpclient: HttpClientModule, public router: Router, public postService: PostsService) {
    this.postService.getPosts().subscribe((data: any) => {
      this.listPost = data;
    });
   }

   onEditPost(event) {
    this.router.navigate(['./gestionpost/update-post/', event.id]);
  }

  ngOnInit() {
  }

}
