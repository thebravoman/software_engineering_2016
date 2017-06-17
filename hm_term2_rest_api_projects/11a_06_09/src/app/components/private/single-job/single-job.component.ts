import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { JobsService } from './../../../services/jobs.service';
import { Job } from './../../../models/job';

@Component({
  selector: 'app-single-job',
  templateUrl: './single-job.component.html',
  styleUrls: ['./single-job.component.css']
})
export class SingleJobComponent implements OnInit {
  private job: Job;

  constructor(private jobsService: JobsService, private route: ActivatedRoute) {
    this.job = new Job('', 0, 0, '', '', '');
    let id = this.route.params['_value'].id;
    this.jobsService.getJobById(id)
      .then(job => {
        this.setCurrentJob(job);
      });
  } 

  ngOnInit(): void {
  }

  setCurrentJob(job: any): void {
    this.job.title = job.title;
    this.job.workHours = job.workHours;
    this.job.salary = job.salary;
    this.job.description = job.description;
    this.job.author = job.author;
    this.job.pictureUrl = job.pictureUrl;
  } 

  deleteJob(): void{
    this.jobsService.deleteJobById(this.route.params['_value'].id);
  }
}
