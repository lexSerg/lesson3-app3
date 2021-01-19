import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/enithy/models/Post';
import { DataService } from 'src/app/enithy/services/data.service';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent {
  post: Post;
  constructor(private activatedRoute : ActivatedRoute, private router : Router) { 
    this.activatedRoute.params.subscribe(() =>
    this.post = this.router.getCurrentNavigation().extras.state.post);
  }


}
