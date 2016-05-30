import {Injectable} from '@angular/core';

@Injectable()
export class Data {
  items: Array<any> = [];

  getData() {
    return this.items;
  }

  updateItem(e) {
    this.items[this.items.indexOf(e)].checked = !e.checked;
  }

  addItem(e) {
    this.items.push(e);
  }

  deleteItem(e) {
    let index = this.items.indexOf(e);
    this.items.splice(index, 1);
  }

}
