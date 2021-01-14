import { Component, OnInit } from '@angular/core';
import {Student} from '../model/student';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  constructor() {
    console.log('My hero is called ' + this.myHero.name);
  }

  // TODO: Remove this when we're done
  get diagnostic(): any { return JSON.stringify(this.model); }

  myHero =  new Student(42, 'SkyDog',
    'Fetch any object at any distance',
    'Leslie Rollover');

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Student(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  ngOnInit(): void {
  }

  onSubmit(f: NgForm): void {
    console.log(f.value);
    console.log(f.valid);
    this.submitted = true;
  }

  newHero(): void {
    this.model = new Student(42, '', '');
  }

}
