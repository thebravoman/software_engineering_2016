import { Component, OnInit } from '@angular/core';

import { UsersService } from './../../../services/users.service';
import { User } from './../../../models/user';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {
  model: any;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.model = new User('', '', '', '', '', '');
  }

  update(): void {
    this.model.userToChange = JSON.parse(localStorage['currentUser']).username;
    this.userService.updateUser(this.model)
      .then(user => console.log(user));
  }

}
