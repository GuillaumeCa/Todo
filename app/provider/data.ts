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
    for (let i = 0; i < Data.items.length; i++) {
        if (Data.items[i] == e) {
          Data.items[i].checked = !e.checked;
        }
    }
  }
}
