import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'body', 'title', 'userId'];
  dataSource = [];

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.fetch('posts').subscribe((posts: any) => {
      console.log(posts);
      this.dataSource = posts;
    });
    window.dispatchEvent(new Event('resize'));
  }

}
