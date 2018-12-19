import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  apiUrl: string = env.api_url;
  jsonPath: string;

  constructor(private http: HttpClient) {
  }

  get(uri: string, token: string = '') {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return this.http.get(this.apiUrl + uri, headers);
  }

  post(uri: string, value) {
    return this.http.post(this.apiUrl + uri, value);
  }
}
