import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable} from 'rxjs';
import { Profile } from './profile.model';




@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Profile[]>{
    return this.httpClient.get<Profile[]>(environment.apiUrl);
  }

}
