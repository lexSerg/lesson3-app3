import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../models/User';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  users : User[] = [];
  constructor(private activatedRoute : ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => {
      this.users = value.usersData;
      console.log(value);
    });
  }
}

