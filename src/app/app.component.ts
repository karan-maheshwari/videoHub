import {Component, OnInit} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'videoHub';
  dbs = null;
  item = null;
  ngOnInit(): void {}
    constructor(db: AngularFireDatabase) {
        this.dbs = db.object('keywords').valueChanges().subscribe(item => this.item = item);
        // this.dbs = db.object('keywords/academy/0').valueChanges().subscribe(item => console.log(item));
        // this.dbs  = db.database.ref();
        // console.log(this.dbs);
    }

  getKeyWords() {
      const keywords = (document.getElementById('search-box') as HTMLInputElement).value;
      const list_of_keywords = keywords.split(' ');
      // console.log(list_of_keywords);
      // console.log(this.dbs.collection.entries());
      // WORKS : console.log(this.item);
      console.log(list_of_keywords.length)
      for (let i = 0; i < list_of_keywords.length; i++) {
          console.log(list_of_keywords[i], this.item[list_of_keywords[i]]);
      }

  }
}

