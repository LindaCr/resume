import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Resume';
  name: string= 'Linda Crook';
  address: string= "1032 Buckskin Trail, Xenia, Ohio 45385";
  phone: string= "937-830-9337";
  email: string= "lindacrook.44@gmail.com";
}
