import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { JobsService } from './../../../services/jobs.service';
import { Job } from './../../../models/job';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})

export class EditJobComponent implements OnInit {
  private currentJob: Job;

  constructor(private jobsService: JobsService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.params['_value'].id;
    this.currentJob = new Job('', 0, 0, '', '', '');
    this.currentJob.id = id;
    this.jobsService.getJobById(id)
      .then(job => {
        this.setCurrentJob(job);
      });
  }

  editJob(): void {
    this.jobsService.editJobById(this.currentJob);
  }

  setCurrentJob(job: any): void {
    this.currentJob.title = job.title;
    this.currentJob.workHours = job.workHours;
    this.currentJob.salary = job.salary;
    this.currentJob.description = job.description;
    this.currentJob.author = job.author;
    this.currentJob.pictureUrl = job.pictureUrl;
  } 
}
