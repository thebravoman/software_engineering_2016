import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../../services/users.service'
import { User } from './../../../models/user'

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})

export class MyProfileComponent implements OnInit {
  private user: User;

  constructor(private usersService: UsersService) {
    this.user = new User('', '', '', '', '', '');
    
    let username = localStorage['currentUser'];

    this.usersService.getUserByUsername(username)
      .then(response => {
        let dbUser = response.json();
        
        this.user.email = dbUser.email;
        this.user.firstName = dbUser.firstName;
        this.user.lastName = dbUser.lastName; 
        this.user.password = dbUser.password;
        this.user.username = dbUser.username;
        this.user.profilePictureUrl = dbUser.profilePictureUrl;
      });
  }

  ngOnInit(): void { }
}
