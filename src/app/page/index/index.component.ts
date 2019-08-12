import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service'
import { User } from 'src/app/model/user';
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  userList: User[] = [];
  likeApple: number = 0;
  likeBanana: number = 0;
  isActive: number;
  isPassive: number;
  totalBalance: number = 0;


  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getAll().subscribe(
      users => {
        this.userList = users;
        this.likeApple = users.filter(user => user.favoriteFruit === 'apple').length;
        this.likeBanana = users.filter(user => user.favoriteFruit === 'banana').length;
        this.isActive = users.filter(user => user.isActive === true).length;
        this.isPassive = users.filter(user => user.isActive === false).length;
        users.forEach(user => { this.totalBalance += parseFloat(user.balance.replace("$", "").replace(",", "")) })
      })

  }

}
