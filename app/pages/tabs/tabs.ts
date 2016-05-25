import {Page} from 'ionic-angular';
import {TodoPage} from '../todo/todo';
import {DonePage} from '../done/done';

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class Tabs {
  todoRoot: any = TodoPage;
  doneRoot: any = DonePage;
}
