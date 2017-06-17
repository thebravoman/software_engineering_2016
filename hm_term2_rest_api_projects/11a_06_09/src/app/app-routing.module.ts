import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/public/register/register.component';
import { LoginComponent } from './components/public/login/login.component';
import { HowToUseComponent } from './components/public/how-to-use/how-to-use.component';
import { AboutUsComponent } from './components/public/about-us/about-us.component';
import { HomeComponent } from './components/public/home/home.component';
import { NotLoggedInGuard } from './services/not.logged.in.guard';
import { MyProfileComponent } from './components/private/my-profile/my-profile.component';
import { UpdateInfoComponent } from './components/private/update-info/update-info.component';
import { JobsComponent } from './components/private/jobs/jobs.component';
import { SingleJobComponent } from './components/private/single-job/single-job.component';
import { AddJobComponent } from './components/private/add-job/add-job.component';
import { EditJobComponent } from './components/private/edit-job/edit-job.component';

import { FooterComponent } from './components/public/footer/footer.component';
import { LoggedInGuard } from'./services/logged.in.guard';

const routes: Routes = [
  {
    "path": '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    "path": 'home',
    component: HomeComponent,
  },
  {
    "path": 'login',
    component: LoginComponent,
    canActivate: [LoggedInGuard]
  },
  {
    "path": 'register',
    component: RegisterComponent,
    canActivate: [LoggedInGuard]
  },
  {
    "path": 'how-to-use',
    component: HowToUseComponent
  },
  {
    "path": 'about-us',
    component: AboutUsComponent
  },
  {
    "path": 'my-profile',
    component: MyProfileComponent,
    canActivate: [NotLoggedInGuard]
  },
  {
    "path": 'update-info',
    component: UpdateInfoComponent,
    canActivate: [NotLoggedInGuard]
  },
  {
    "path": 'jobs',
    component: JobsComponent,
    canActivate: [NotLoggedInGuard]
  },
  {
    "path": 'jobs/single-job/:id',
    component: SingleJobComponent,
    canActivate: [NotLoggedInGuard]
  },
  {
    "path": 'add-job',
    component: AddJobComponent,
    canActivate: [NotLoggedInGuard]
  },
  {
    "path": 'jobs/single-job/:id/edit-job',
    component: EditJobComponent,
    canActivate: [NotLoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routedComponents = [ RegisterComponent, LoginComponent, HowToUseComponent, AboutUsComponent, HomeComponent, FooterComponent, MyProfileComponent, UpdateInfoComponent, JobsComponent, SingleJobComponent, AddJobComponent];