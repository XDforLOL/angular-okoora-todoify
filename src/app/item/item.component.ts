import { Component, Input, Output, EventEmitter } from "@angular/core";
// @ts-ignore
import { Item } from '../item';
import * as alertifyjs from 'alertifyjs';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  editable = false;
  @Input() item!: Item;
  @Input() newItem!: string;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: string) {
    window.alert('Changed Todo to:' + description)
    if (!description) return;
    this.editable = false;
    this.item.description = description;

  }

  onCheckboxChange(item: any) {
    item.done = !item.done;
    if (item.done) {
      alertifyjs.success('Changed '+ this.item.description +' to Done!');
    }
    else {
      alertifyjs.warning('Changed '+ this.item.description +' to UnDone!');
    }
  }

}
