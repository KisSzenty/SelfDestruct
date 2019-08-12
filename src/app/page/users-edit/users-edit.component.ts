import { Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from '../../service/user.service'
import { User } from '../../model/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  newUser: User = new User();

  constructor(
    private ar: ActivatedRoute,
    private userService: UserService,
    private rs: Router
  ) {
    this.ar.params.forEach(params => {
      this.userService.getAll().forEach(
        allUsers => {
          this.newUser = allUsers.filter(user => user.id == params.id)[0]
          console.log(this.newUser);
        }
      )
    });

  }
  ngOnInit() { }

  onUpdate(user: any) {
    if (confirm('Jól meggondoltad?')) {
      this.userService.updateOne(this.newUser).subscribe(
        response => {
          this.rs.navigateByUrl('/list')

        },
        err => console.log(err)
      )
    }
  }




}
