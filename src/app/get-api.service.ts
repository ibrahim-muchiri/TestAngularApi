import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiData } from './interfaces/Interface'; // Import the interface


@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient
  ) { }

  apiCall(): Observable<ApiData> {
    // Assuming your API call returns data of type ApiData
    return this.http.get<ApiData>('https://jsonplaceholder.typicode.com/todos/1');
  }
}


