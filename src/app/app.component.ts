import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineShop';

  searchForm = new FormGroup({
  search: new FormControl('', Validators.required),
  });
  


constructor() {
  //console.log('kebab');
};

onSubmit() {
  // TODO: Use EventEmitter with form value
  console.log(this.searchForm.value);
}
}