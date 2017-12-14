import { Component, OnInit, Input } from '@angular/core';
import { Bill } from '../../shared/models/bill.model';

@Component({
  selector: 'wisla-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() bill: Bill;
  @Input() currency: any;

  dollar: number;
  euro: number;

  constructor() { }

  ngOnInit() {
    const { rates } =this.currency;
    this.dollar = rates['USD'] * this.bill.value;
    this.euro = rates['EUR'] * this.bill.value;    
    console.log(this.currency);
  }

}
