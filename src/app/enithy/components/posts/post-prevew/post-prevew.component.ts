import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/enithy/models/Post';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-post-prevew',
  templateUrl: './post-prevew.component.html',
  styleUrls: ['./post-prevew.component.css']
})
export class PostPrevewComponent {
  @Input()
  post:Post;
  constructor(private router: Router, private activatedRoute : ActivatedRoute) {}
  goToDetails(id):void {
    this.router.navigate(['details', id], {
      relativeTo: this.activatedRoute,
      state: {post: this.post}
    })
  }
}
