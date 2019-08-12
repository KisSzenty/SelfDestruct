import { Component, OnInit, Output, Input } from '@angular/core';
import { UserService } from '../../service/user.service'
import { User } from '../../model/user';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Output() newUser: User;
  filterPhrase: string = '';
  orderDirection: number = 1;
  orderKey: string = '';
  changeCounter: number = 0;
  userList: User[] = [];

  Szerkeszt(user) {
    this.newUser = user;
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(
      users => this.userList = users)
  }
  onDelete(user: User) {
    if (confirm('Nehogyanmá biztosan?')) {
      this.userService.deleteOne(user.id).subscribe(
        response => {
          let index = this.userList.indexOf(user)
          this.userList.splice(index, 1)
          this.changeCounter++;
        },
        err => console.error(err)
      );
    }
  }

  setSorterKey(key: string): void {
    if (key === this.orderKey) {
      this.orderDirection = this.orderDirection === 1 ? -1 : 1;
    } else {
      this.orderDirection = 1;
    }
    this.orderKey = key;
  }
}
