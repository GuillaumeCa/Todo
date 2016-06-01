import {Page} from 'ionic-angular';
import {Data} from '../../provider/data';
import {Modal, NavController} from 'ionic-angular'
import {ModalAdd} from '../modalAdd/modalAdd';

@Page({
  templateUrl: 'build/pages/todo/todo.html'
})
export class TodoPage {

  items: Array<any>;

  constructor(private data: Data, private nav: NavController) {
  }

  loadData() {
    this.data.getData(data => {
      this.items = data;
      console.log(data);
    });
  }
  private onPageDidEnter(){
    this.loadData();
  }

  showModal() {
    let modal = Modal.create(ModalAdd);
    this.nav.present(modal);
  }

  update(e) {
    this.data.updateItem(e);
  }

  delete(e) {
    this.data.deleteItem(e);
  }

}
