import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.scss'],
})
export class DetailsCategoryComponent  implements OnInit, OnChanges {

  @Input() commandsByCategory: any;
  public loading: boolean = false;
  public commands: any[] = [];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = true;
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['commandsByCategory']) {
      this.commands = changes['commandsByCategory'].currentValue;
      console.log(this.commands);
    }
  }

}
