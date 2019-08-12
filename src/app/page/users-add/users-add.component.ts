import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service'
import { User } from '../../model/user';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {
  newUser: User = new User();

  constructor(private userService: UserService,
    private rs: Router) { }

  ngOnInit() { }

  onCreate() {
    this.userService.createOne(this.newUser).subscribe(
      response => {
        this.rs.navigateByUrl('/list')
      },
      err => console.error(err)
    )
  }
  onNewCancel() {
    this.newUser = new User();
  }



}
