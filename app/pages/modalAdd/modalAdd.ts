import {Modal, NavController, Page, ViewController} from 'ionic-angular';
import {Data} from '../../provider/data';

@Page({
  templateUrl: 'build/pages/modalAdd/modalAdd.html'
})
export class ModalAdd {
  task: string = "";
  constructor(private viewCtrl: ViewController, private data: Data) {
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
