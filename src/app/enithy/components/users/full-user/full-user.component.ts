import { Component} from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/enithy/models/User';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent{
  fullUser : User;
  constructor(private router: Router, private activatedRoute : ActivatedRoute) { 
    // ActivatedRoute нкжен только как Observable операция для subscribe иначе будет отображать только одного пользователя
    // и не будет отслеживать изменения
    this.activatedRoute.params.subscribe((/*без параметров*/) => 
    this.fullUser = this.router.getCurrentNavigation().extras.state.user)
    }
}
