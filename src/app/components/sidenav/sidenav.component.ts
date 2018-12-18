import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  hardcodedImage = 'https://t2.genius.com/unsafe/221x221/https%3A%2F%2Fimages.genius.com%2Fb30254ea38c5a371d6606b4d6819a6ee.638x638x1.jpg';
  constructor() { }

  ngOnInit() {
  }

}
