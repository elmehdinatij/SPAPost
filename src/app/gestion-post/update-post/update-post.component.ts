import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Post } from 'src/Models/model.posts';
import { PostsService } from 'src/Services/service.posts';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { User } from 'src/Models/model.users';
import { UsersService } from 'src/Services/service.users';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  myform: FormGroup;
  idpost: number;
  userId: FormControl;
  id: FormControl;
  title: FormControl;
  body: FormControl;
  listUsers: Observable<User>;
  post: Post = new Post();
  idSubscription: Subscription;

  constructor(public postService: PostsService, public router: Router, public activatedRoute: ActivatedRoute, public userService: UsersService) {
    this.idSubscription = this.activatedRoute.params.subscribe(params => {
      this.idpost = params["id"];
    });
    this.userService.getUsers().subscribe((data: any) => {
      this.listUsers = data;
    }, error => {
      console.log(error);
    });
  }

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.userId = new FormControl('', Validators.required),
      this.id = new FormControl(),
      this.title = new FormControl('', [
        Validators.minLength(5),
        Validators.maxLength(100),
        Validators.required
      ]),
      this.body = new FormControl('', Validators.required)
  }

  createForm() {
    this.myform = new FormGroup(
      {
        userId: this.userId,
        id: this.id,
        title: this.title,
        body: this.body
      }
    )

    if (this.idpost > 0) {
      this.postService.getPost(this.idpost).subscribe(
        (data: any) => {
          this.post = {
            id: data.id,
            userId: data.userId,
            title: data.title,
            body: data.body,
          } as any;
          this.myform.setValue(this.post);
        },
        err => {
          console.log(err);
        }
      );
    }

  }

  addAlert() {
    alert('Le post a été ajouté avec succès !');
  }
  updatePost() {
    this.post = this.myform.value;
    this.post.id = this.idpost;
    if (this.idpost > 0) {
      this.postService.updatePost(this.post).subscribe(
        (data: any) => {
          console.log(data);
          alert("Mise à jour effectuée avec succès!");
          this.router.navigate(["./gestionpost/list-post"]);
        },
        err => {
          console.log(err);
          alert("Problème!");
        }
      );
    }
    else {
      this.post = this.myform.value;
      this.postService.savePost(this.post).subscribe(
        (data: any) => {
          this.post = data;
          this.addAlert();
          console.log(this.post);
          this.router.navigate(['./gestionpost/list-post']);
        },
        err => {
          console.log(err);
        }
      );
    }

  }


}
