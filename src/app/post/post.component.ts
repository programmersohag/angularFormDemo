import {Component, OnInit} from '@angular/core';
import {PostService} from '../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any | undefined;

  constructor(public postService: PostService) {
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): any {
    this.postService.getPosts('').subscribe((res: any) => {
        this.posts = res;
      },
      error => {
        if (error.error.error) {
          alert(error.error.error);
        } else {
          alert('CONNECTION TIMED OUT');
        }
      }
    );
  }

}
