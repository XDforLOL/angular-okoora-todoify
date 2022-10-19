import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Item } from "../item";
import * as alertifyjs from 'alertifyjs';
import {animate, style, transition, trigger, state} from "@angular/animations";
import {delay} from "rxjs/operators";
import {AuthenticationService} from "../shared/services/authentication.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [
    trigger('fade', [

      state('false', style({opacity:1})),

      state('true', style({opacity:0})),
      transition('false => true', [
        animate('.3s')
      ]),
      transition('true => false', [
        animate('0.3s')
      ])
    ])
    ]
})
export class TodoComponent {
  constructor(public authService: AuthenticationService) {
  }
  public state:boolean = false;
  title = 'todo';
  filter: 'all' | '5' | '10' | '20' | 'done' = 'all';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];


  changeState(){
    this.state = true;
    setTimeout(() => {
      this.state = false;
    }, 300);

  }

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    if (Number.isInteger(parseInt(this.filter))) {
      return this.allItems.slice(0, parseInt(this.filter));
    }
    return this.allItems.filter((item) => this.filter === 'done' ? item.done : !item.done);
  }
  addItem(description: string) {
    if (description === '') {
      return alertifyjs.error("The following todo is empty" + description).delay(5)
    }
    this.allItems.unshift({
      description,
      done: false
    });
    alertifyjs.success("The following todo was added:" + description).delay(5)
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

}
