import { Component, OnInit } from '@angular/core';
import { NeedDataService } from '../need-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(services:NeedDataService) { 
    this.product=services.products;
  }

  ngOnInit(): void {
  }
product:any;
}
