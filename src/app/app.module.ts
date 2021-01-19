import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './enithy/components/users/all-users/all-users.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './enithy/components/home/home.component';
import { UserPrevewComponent } from './enithy/components/users/user-prevew/user-prevew.component';
import { FullUserComponent } from './enithy/components/users/full-user/full-user.component';
import { AllPostsComponent } from './enithy/components/posts/all-posts/all-posts.component';
import { PostPrevewComponent } from './enithy/components/posts/post-prevew/post-prevew.component';
import { FullPostComponent } from './enithy/components/posts/full-post/full-post.component';
import { AllCommentsComponent } from './enithy/components/comments/all-comments/all-comments.component';
import { CommentPrevewComponent } from './enithy/components/comments/comment-prevew/comment-prevew.component';
import { FullCommentComponent } from './enithy/components/comments/full-comment/full-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    HomeComponent,
    UserPrevewComponent,
    FullUserComponent,
    AllPostsComponent,
    PostPrevewComponent,
    FullPostComponent,
    AllCommentsComponent,
    CommentPrevewComponent,
    FullCommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
