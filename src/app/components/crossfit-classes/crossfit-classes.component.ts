import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crossfit-classes',
  templateUrl: './crossfit-classes.component.html',
  styleUrls: ['./crossfit-classes.component.css']
})
export class CrossfitClassesComponent implements OnInit {

    name = 'Jordan';
    classes = [];

  ngOnInit() {
      this.classes = [{
          id: 0,
          dateTime: new Date(),
          duration: 20,
          athletes: [{
              name: 'Justin',
              member: false
          }]
      }, {
          id: 1,
          dateTime: new Date().setDate(24),
          duration: 20,
          athletes: [{
              name: 'Jason',
              member: true
          }]
      }];
  }

}
