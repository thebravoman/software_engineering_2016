import { Component, OnInit } from '@angular/core';

import { JobsService } from './../../../services/jobs.service';
import { Job } from './../../../models/job';


@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  model: Job;

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.model = new Job('', 0, 0, '', '', '');
    this.model.author = JSON.parse(localStorage['currentUser']).username;
  }

  addJob(): void {
    this.jobsService.addJob(this.model);
  }
}
