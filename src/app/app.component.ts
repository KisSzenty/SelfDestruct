import { Component, Input, Output } from '@angular/core';
import { UserService } from './service/user.service';
import { from } from 'rxjs';
import { User } from './model/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'selfDestruct';

  // @Output() newUser: User;
  constructor() { }

  ngOnInit() { }
}