import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'videoHub';
  ngOnInit(): void {}
  getKeyWords() {
      const keywords = (document.getElementById('search-box') as HTMLInputElement).value;
      const list_of_keywords = keywords.split(' ');
      console.log(list_of_keywords);
  }
}

