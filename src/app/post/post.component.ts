import {Component, OnInit} from '@angular/core';
import {PostService} from '../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any | undefined;
  users: any | undefined;

  constructor(public postService: PostService) {
  }

  ngOnInit(): void {
    this.loadPosts();
    this.loadUsers();
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

  loadUsers(): any {
    this.postService.getUsers().subscribe((res: any) => {
        this.users = res;
        console.log(this.users);
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
