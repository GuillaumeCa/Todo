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

  deleteItem(e) {
    Data.items = Data.items.splice(Data.items.indexOf(e), 1);
  }

  cleanItem() {
    let cleanItems = [];
    Data.items.forEach(function(item, i) {
      if (!item.checked) {
        cleanItems.push(item);
      }
    });
    return cleanItems;
  }
}
