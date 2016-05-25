import {Modal, NavController, Page, ViewController} from 'ionic-angular';
import {Data} from '../../provider/data';

@Page({
  templateUrl: 'build/pages/modalAdd/modalAdd.html',
  providers: [Data]
})
export class ModalAdd {
  viewCtrl: any;
  data: Data;
  task: any;
  constructor(viewCtrl: ViewController, data: Data) {
    this.viewCtrl = viewCtrl;
    this.data = data;
  }

  close() {
    this.viewCtrl.dismiss();
  }

  save() {
    this.data.addItem({
      title: this.task,
      checked: false
    })
    this.viewCtrl.dismiss();
  }
}
