import {Page} from 'ionic-angular';
import {Data} from '../../provider/data';

@Page({
  templateUrl: 'build/pages/done/done.html'
})
export class DonePage {

  items: Array<any>;

  constructor(private data: Data) {
    this.items = data.items;
  }

  loadData() {
    this.data.getData(data => {
      this.items = data;
    });
  }

  private onPageDidEnter(){
    this.loadData();
  }

}
