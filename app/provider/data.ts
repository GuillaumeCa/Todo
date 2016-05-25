import {Injectable} from '@angular/core';

@Injectable()
export class Data {
  static items: Array<any> = [{
    title: 'a',
    checked: false
  },{
      title: 'a',
      checked: false
  }];

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
    // for (let i = 0; i < Data.items.length; i++) {
    //     if (Data.items[i] == e) {
    //       Data.items[i]
    //     }
    // }
    Data.items = Data.items.splice(Data.items.indexOf(e), 1);
  }
}
