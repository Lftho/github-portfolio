import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Repository } from './repository';
import { Organization } from './organization';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private userUrl: string = '';

  constructor(private httpApi: HttpClient) {
    this.userUrl = `${environment.apiUrl}/users/${environment.username}`
  }

  getUser(): Observable<User> {
    const user = this.httpApi.get<User>(this.userUrl);

    return user;
  }

  getRepos(): Observable<Repository[]> {
    const repos = this.httpApi.get<Repository[]>(this.userUrl + '/repos');

    return repos;
  }

  getOrganizations(): Observable<Organization[]> {
    const organizations = this.httpApi.get<Organization[]>(this.userUrl + '/orgs');

    return organizations;
  }
}
