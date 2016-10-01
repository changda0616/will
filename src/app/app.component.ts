import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private datasvc: DataService ){
  }

  cur:number = 221.22000;

  keywords: string = 'test';
  submit(keywords:string){
      this.keywords = keywords;
  }
}
