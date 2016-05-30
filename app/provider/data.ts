import {Injectable} from '@angular/core';

@Injectable()
export class Data {
  static items: Array<any> = [];

  getData(){
    return Data.items;
  }

  updateItem(e) {
    Data.items[Data.items.indexOf(e)].checked = !e.checked;
  }

  addItem(e) {
    Data.items.push(e);
  }

}
