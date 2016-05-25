import {Page} from 'ionic-angular';
import {Data} from '../../provider/data';


@Page({
  templateUrl: 'build/pages/done/done.html',
  providers: [Data]
})
export class DonePage {
  items: Array<any>;
  constructor(data: Data) {
    this.items = data.getData();
  }
}
