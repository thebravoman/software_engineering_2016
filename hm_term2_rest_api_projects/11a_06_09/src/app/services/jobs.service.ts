import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { Job } from './../models/job';

@Injectable()
export class JobsService {
    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http, private router: Router) {
    }

    addJob(job: Job): any{
        return this.http
            .post('/api/jobs', JSON.stringify(job), this.options)
            .toPromise()
            .then(response =>{
                this.router.navigateByUrl('/jobs');
                alert("You have created job successfully.");
                response.json().data 
            })
            .catch(err => console.log(JSON.parse(err._body).error));
  }

  editJobById(job: Job): any {
      return this.http
        .post('/api/jobs/update/' + job.id, JSON.stringify(job), this.options)
        .toPromise()
        .then(response =>{
            this.router.navigateByUrl('/jobs');
            alert("You have edited the job successfully.");
            response.json().data 
        })
        .catch(err => console.log(JSON.parse(err._body).error));
  }

    getAllJobsForPage(page: Number): any {
        return this.http
            .get('/api/jobs/' + page, this.options)
            .toPromise()
            .then((response: Response) => response.json())
            .catch(err => console.log(JSON.parse(err._body).error));
    }

    getJobById(id: string): any {
        return this.http
            .get('/api/jobs/single-job/' + id)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(JSON.parse(err._body).error));
    }

    deleteJobById(id: string): any {
        return this.http
            .post('/api/jobs/delete/' + id, {}, this.options)
            .toPromise()
            .then(response =>{
                this.router.navigateByUrl('/jobs');
                alert("You have deleted job successfully.");
                return response.json().data;
            })
            .catch(err => console.log(JSON.parse(err._body).error));
    }   
}