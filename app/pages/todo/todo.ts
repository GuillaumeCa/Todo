import {Page} from 'ionic-angular';
import {Data} from '../../provider/data';


@Page({
  templateUrl: 'build/pages/todo/todo.html',
  providers: [Data]
})
export class TodoPage {
  items: Array<any>;
  data: Data;
  constructor(data: Data) {
    this.items = data.getData()
    this.data = data;
  }

}
