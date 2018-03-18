import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY } from '../../app/config/api_key';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  constructor(public http: HttpClient) {
  }

  get(){
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
  }

  getbyId(id){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
  }

}
