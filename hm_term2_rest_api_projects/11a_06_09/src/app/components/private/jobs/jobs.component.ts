import { Component, OnInit } from '@angular/core';

import { Job } from './../../../models/job';
import { JobsService } from './../../../services/jobs.service'; 
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  private jobs: Job[] = [];
  private pages: number[] = [];

  constructor(private jobsService: JobsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.changePage(1);  
  }

  changePage(page: number): void {
    page = +page;
    this.jobsService.getAllJobsForPage(page)
      .then(result => {
        this.pages = [];
        for (let i = 1; i <= result.totalPages; i += 1) {
          this.pages.push(i);
        }

        this.jobs = [];
        for (let i = 0; i < result.jobs.length; i += 1) {
          let job = result.jobs[i];
          let currentJob: Job = new Job(job.title, job.workHours, job.salary, job.description, job.author, job.pictureUrl);
          currentJob.id = job._id;

          this.jobs.push(currentJob);
        }
      }); 
  }
}
