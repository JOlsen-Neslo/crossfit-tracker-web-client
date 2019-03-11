import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-class-view',
    templateUrl: './class-view.component.html',
    styleUrls: ['./class-view.component.css']
})
export class ClassViewComponent implements OnInit {

    classes = [];
    selectedClass = {};

    constructor(private route: ActivatedRoute, private location: Location) {
    }

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

        const id = Number(this.route.snapshot.paramMap.get('id'));
        // this.route.paramMap.subscribe(pmap => this.getHero(pmap.get('id')));
        this.selectedClass = this.classes.find(aClass => {
            return aClass.id === id;
        });
    }

}
