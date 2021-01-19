import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../models/User';

@Component({
  selector: 'app-user-prevew',
  templateUrl: './user-prevew.component.html',
  styleUrls: ['./user-prevew.component.css']
})
export class UserPrevewComponent implements OnInit {
  @Input()
  user : User;
  constructor(private router : Router, private activatedRoute : ActivatedRoute) { }
  goToDetails(id):void {
    this.router.navigate(['details', id], {
      relativeTo: this.activatedRoute,
      state: {user : this.user}
    })
  }
 
  ngOnInit(): void {
  }

}
