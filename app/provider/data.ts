import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';


@Injectable()
export class Data {
  header: Headers = new Headers({ 'Content-Type': 'application/json' });
  options: RequestOptions = new RequestOptions({ headers: this.header });
  api: string = 'http://localhost:3000/api/todo';
  items: any;

  constructor(public http: Http) {

  }

  getData(done) {
    this.http.get(this.api)
    .map(res => res.json())
    .subscribe(
      data => done(data)
    );
  }

  updateItem(e) {
    e.checked = !e.checked;
    let body = JSON.stringify(e);
    this.http.put(this.api + '/' + e._id, body, this.options).subscribe(data => {}, err => console.log(err));
  }

  addItem(e) {
    let body = JSON.stringify(e);
    this.http.post(this.api, body, this.options).subscribe(data => {}, err => console.log(err));
  }

  deleteItem(e) {
    this.http.delete(this.api + '/' + e._id).subscribe(data => {}, err => console.log(err));
  }

}
