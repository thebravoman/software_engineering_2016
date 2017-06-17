import { Component, OnInit } from '@angular/core';

import { UsersService } from './../../../services/users.service';
import { User } from './../../../models/user'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: User;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.model = new User('', '', '', '', '', '');
  }

  add(): void {
    this.userService.addUser(this.model);
  }

}
