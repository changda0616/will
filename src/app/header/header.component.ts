import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  color = "red";
  title = "chad's verison";
  subtitle = "記載著 Will 在網路世界的學習心得與技術分享"
  constructor() { }

  ngOnInit() {
  }
  changeTitle($event){
    console.log($event);
    this.title = this.title + "!";
  }
}
