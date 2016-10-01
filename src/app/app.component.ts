import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keywords: string = 'test';
  submit(keywords:string){
      this.keywords = keywords;
  }
}
