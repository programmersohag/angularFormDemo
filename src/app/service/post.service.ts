import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import ApiEndPoint from '../api-end-point';
import {Post} from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPosts(status: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${ApiEndPoint.baseURL}/posts`, {
      params: { status }
    });
  }
}
