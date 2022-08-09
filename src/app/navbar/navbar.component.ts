import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Customer } from '../customer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // customer
  // firstName = Customer.firstName;
  constructor() { }

  ngOnInit(): void {
  }

}
