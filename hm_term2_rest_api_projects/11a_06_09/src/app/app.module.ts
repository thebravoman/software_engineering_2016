import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule, routedComponents } from './app-routing.module'
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/public/navigation/navigation.component';
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

import { JobsService } from './services/jobs.service';
import { LoggedInGuard } from './services/logged.in.guard';
import { NotLoggedInGuard } from './services/not.logged.in.guard';
import { UsersService } from './services/users.service';
import { AuthenticationService } from './services/authentication.service';

import { SortPipe } from './pipes/sort.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { RemoveSpacesPipe } from './pipes/remove-spaces.pipe';
import { FilterByRolePipe } from './pipes/filter-by-role.pipe';

import { HightlightItemDirective } from './directives/hightlight-item.directive';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    routedComponents,
    HowToUseComponent,
    AboutUsComponent,
    HomeComponent,
    FooterComponent,
    MyProfileComponent,
    UpdateInfoComponent,
    JobsComponent,
    SingleJobComponent,
    AddJobComponent,
    SortPipe,
    CapitalizePipe,
    RemoveSpacesPipe,
    FilterByRolePipe,
    HightlightItemDirective,
    EditJobComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UsersService, AuthenticationService, LoggedInGuard, NotLoggedInGuard, JobsService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
