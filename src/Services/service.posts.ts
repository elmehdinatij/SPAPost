import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../Models/model.posts';

@Injectable()
export class PostsService {

    constructor(private httpclient: HttpClient) {

    }

    getPosts() {
        return this.httpclient.get('https://jsonplaceholder.typicode.com/posts');
    }

    getPost(id: number) {
        return this.httpclient.get('https://jsonplaceholder.typicode.com/posts/' + id);
    }

    savePost(post: Post) {
        return this.httpclient.post('https://jsonplaceholder.typicode.com/posts', post);
    }

    updatePost(post: Post) {
        return this.httpclient.put('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
    }

}