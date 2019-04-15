import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'username', 'email'];
  dataSource = [];

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.fetch('users').subscribe((users: any) => {
      console.log(users);
      this.dataSource = users;
    });
    window.dispatchEvent(new Event('resize'));
  }

}
