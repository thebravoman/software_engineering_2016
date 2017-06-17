import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthenticationService {
    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http, private router: Router) {
    }

    login(username: string, password: string): any {
        var user = { username, password };
        return this.http
            .post('/api/authenticate', JSON.stringify(user), this.options)
            .toPromise()
            .then((response: Response) => {
                let token = response.json().id_token;
                let role = response.json().role;
                let groupName = response.json().group;
                if (token) {
                    localStorage.setItem('currentUser', JSON.stringify({ username }));
                    localStorage.setItem('token', JSON.stringify({ token }));
                    localStorage.setItem('role', role);
                    localStorage.setItem('groupName', groupName);

                    alert("You have logged in successfully");
                    this.router.navigateByUrl('/home');

                    return true;
                } 
                else {
                    alert("Wrong password or username. Please try again");
                    return false;
                }
            });
    }

    logout(): void {
        alert("You have successfully logged out");
        localStorage.clear();
    }

    isLoggedIn(): boolean {
        if(localStorage.length > 0) {
            return true;
        }
        else{
            return false;
        }
    }
}