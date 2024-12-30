import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public uuid: string | null = null;
  public commandsByCategory: any[] = [];
  public title: string = ''
  public description: string = ''

  constructor(
    private route: ActivatedRoute,
    private _http: HttpService
  ) { }

  ngOnInit() {
    this.uuid = this.route.snapshot.paramMap.get('uuid');

    if (this.uuid) {
      this.getDetails(this.uuid);
    }
  }

  getDetails(uuid: string) {
    this._http.getCategory(uuid).subscribe((categories) => {
      this.commandsByCategory = categories;
      this.title = this.commandsByCategory[0].category.name;
      this.description = this.commandsByCategory[0].category.description;
    });
  }

}
