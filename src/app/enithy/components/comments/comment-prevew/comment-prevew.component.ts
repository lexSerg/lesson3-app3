import { Component, Input,} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { relative } from 'path';
import { Comment } from 'src/app/enithy/models/Comment';

@Component({
  selector: 'app-comment-prevew',
  templateUrl: './comment-prevew.component.html',
  styleUrls: ['./comment-prevew.component.css']
})
export class CommentPrevewComponent{
  @Input()
  comment : Comment;
  constructor(private router:Router, private activatedRoute: ActivatedRoute) { }
  goToDetails(id:number): void {
    this.router.navigate(['details/', id], {
      relativeTo:this.activatedRoute,
      state : {comment : this.comment}
    }) 
  }
}
