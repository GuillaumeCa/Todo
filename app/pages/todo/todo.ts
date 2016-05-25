import {Page} from 'ionic-angular';
import {Modal, NavController} from 'ionic-angular'
import {Data} from '../../provider/data';
import {ModalAdd} from '../modalAdd/modalAdd';

@Page({
  templateUrl: 'build/pages/todo/todo.html',
  providers: [Data]
})
export class TodoPage {
  items: Array<any>;
  data: Data;
  nav: NavController;
  constructor(data: Data, nav: NavController) {
    this.items = data.getData()
    this.data = data;
    this.nav = nav;
  }

  showModal() {
    let modal = Modal.create(ModalAdd);
    this.nav.present(modal);
  }

}
