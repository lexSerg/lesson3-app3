import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCommentsComponent } from './enithy/components/comments/all-comments/all-comments.component';
import { FullCommentComponent } from './enithy/components/comments/full-comment/full-comment.component';
import { AllPostsComponent } from './enithy/components/posts/all-posts/all-posts.component';
import { FullPostComponent } from './enithy/components/posts/full-post/full-post.component';
import { AllUsersComponent } from './enithy/components/users/all-users/all-users.component';
import { FullUserComponent } from './enithy/components/users/full-user/full-user.component';
import { CommentsResolveService } from './enithy/services/comments-resolve.service';
import { PostsResolveService } from './enithy/services/posts-resolve.service';
import { UsersResolveService } from './enithy/services/users-resolve.service';

const routes: Routes = [
  {
    path: 'users', component: AllUsersComponent,  resolve : {usersData : UsersResolveService},
    children: [{
      path: 'details/:id', component: FullUserComponent,
    }]
  },
  {
    path: 'posts', component: AllPostsComponent, resolve : {postsData : PostsResolveService},
    children: [{
      path: 'details/:id', component : FullPostComponent,
    }]
  },
  {
    path: 'comments', component: AllCommentsComponent, resolve: {commentsData : CommentsResolveService},
    children: [
      {
        path: 'details/:id', component: FullCommentComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
