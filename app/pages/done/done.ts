import {Page} from 'ionic-angular';
import {Data} from '../../provider/data';


@Page({
  templateUrl: 'build/pages/done/done.html'
})
export class DonePage {

  items: Array<any>;

  constructor(data: Data) {
    this.items = data.getData();
  }
}
