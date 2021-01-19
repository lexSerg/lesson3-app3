import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/enithy/models/Comment';

@Component({
  selector: 'app-full-comment',
  templateUrl: './full-comment.component.html',
  styleUrls: ['./full-comment.component.css']
})
export class FullCommentComponent {
  comment : Comment;
  constructor(private activatedRoute : ActivatedRoute, private router : Router) {
    this.activatedRoute.params.subscribe(() => 
      this.comment = this.router.getCurrentNavigation().extras.state.comment)
   }
}
