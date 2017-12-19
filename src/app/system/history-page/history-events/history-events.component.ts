import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../shared/models/category.model';
import { WISLAEvent } from '../../shared/models/event.model';

@Component({
  selector: 'wisla-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss']
})
export class HistoryEventsComponent implements OnInit {
  @Input() categories: Category[] = [];
  @Input() events: WISLAEvent[] = [];
  searchValue = '';
  searchPlaceholder = 'Summ';
  searchField = 'amount';

  constructor() { }

  ngOnInit() {
      this.events.forEach((e) => {
        e.catName = this.categories.find(c => c.id === e.category).name;
      });
  }

  getEventClass(e: WISLAEvent) {
    return {
      'label': true,
      'label-danger': e.type === 'outcome',
      'label-success': e.type === 'income'
    };
  }

  changeCriteria(field: string) {
    const namesMap = {
      amount: 'Summ',
      date: 'Date',
      category: 'Category',
      type: 'Type'
    };
    this.searchPlaceholder = namesMap[field];
    this.searchField = field;
  }

} 
