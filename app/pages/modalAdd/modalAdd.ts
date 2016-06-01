import {Modal, NavController, Page, ViewController} from 'ionic-angular';
import {Data} from '../../provider/data';
import {TodoPage} from '../todo/todo';

@Page({
  templateUrl: 'build/pages/modalAdd/modalAdd.html'
})
export class ModalAdd {
  task: string = "";
  desc: string = "";
  constructor(private viewCtrl: ViewController, private data: Data) {
  }

  close() {
    this.viewCtrl.dismiss();
  }

  save() {
    this.data.addItem({
      name: this.task,
      description: this.desc,
      checked: false
    });

    this.viewCtrl.dismiss();
  }
}
