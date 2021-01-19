import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/enithy/models/Comment';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent {
  comments: Comment[];
  constructor(private activatedRoute : ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.comments = value.commentsData);
   }

}
