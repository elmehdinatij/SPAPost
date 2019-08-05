import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/model.users';

@Injectable()
export class UsersService {

    constructor(private httpclient: HttpClient) {

    }

    getUsers() {
        return this.httpclient.get('https://jsonplaceholder.typicode.com/users');
    }

    getUser(id: number) {
        return this.httpclient.get('https://jsonplaceholder.typicode.com/users/' + id);
    }

}