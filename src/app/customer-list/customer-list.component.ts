import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../models/customer';
import { CustomerService } from '../Services/Customer-Service';
import { SearchPipe } from '../pipes/SearchByPipe';
import { AppError } from '../error-handle/app-error';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [SearchPipe]
})
export class CustomerListComponent implements OnInit {

  @Input() customers: Observable<Customer[]>;
  @Input() cus: Customer;
  private searchData: string;
  constructor(private customerService: CustomerService, private router: Router) { }
// get the customer list on init
  ngOnInit() {
    this.searchData = '';
    this.customers = this.customerService.getCustomerList();
  }
  // navigate to customers on add button click
  onAdd() {
    this.router.navigate(['/customers', 'new', 'edit']);
  }
}
