import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "chad's verison";
  subtitle = "記載著 Will 在網路世界的學習心得與技術分享"
  constructor() { }

  ngOnInit() {

  }
  num: number = 10;



  changeTitle( $event: MouseEvent ){
    console.log($event);
    this.num += 555;
    if($event.shiftKey){
      this.title = this.title + "!";
    }
  }
  changeStyle(){
    return { 'color' : "#"+this.num }
  };

}
