import { Component } from '@angular/core';
import { NavigationComponent } from './components/public/navigation/navigation.component';
import { RegisterComponent } from './components/public/register/register.component';
import { LoginComponent } from './components/public/login/login.component';
import { HowToUseComponent } from './components/public/how-to-use/how-to-use.component';
import { AboutUsComponent } from './components/public/about-us/about-us.component';
import { HomeComponent } from './components/public/home/home.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { MyProfileComponent } from './components/private/my-profile/my-profile.component';
import { UpdateInfoComponent } from './components/private/update-info/update-info.component';
import { JobsComponent } from './components/private/jobs/jobs.component';
import { SingleJobComponent } from './components/private/single-job/single-job.component';
import { AddJobComponent } from './components/private/add-job/add-job.component';
import { EditJobComponent } from './components/private/edit-job/edit-job.component';

@Component({
  selector: `app-root`,
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`]
})
export class AppComponent {

  ngOnInit() {
  }
}
