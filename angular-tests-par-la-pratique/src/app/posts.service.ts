import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  recupererTousLesPosts(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
