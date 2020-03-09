import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'attribute-comp';
  fullnameInfo : any;


  ngOnInit() {
    this.fullnameInfo = {
      name: 'Full Name',
      description: {
        descriptionContent: ['Mr. Abc Xyz II'],
      },
      trailingLinks: {
        show: true,
        link1Text: 'Edit',
      },
    };
  }
}
