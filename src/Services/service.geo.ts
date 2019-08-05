import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Geo } from '../Models/model.geo';

@Injectable()
export class GeosService {

    constructor(private httpclient: HttpClient) {

    }

}