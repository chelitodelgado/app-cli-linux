import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AOS from 'aos';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent  implements OnInit {
  public categories: any[] = [];
  public filteredCategories: any[] = [];
  public loading: boolean = false;

  constructor( 
    private router: Router, 
    private _http: HttpService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    setTimeout(() => {
      this.loading = true;
    }, 1000);
    
    this._http.getUniqueCategories().subscribe(
      (data) => {
        this.categories = data;
        this.filteredCategories = [...this.categories];
        this.loading = false;
      },
      (error) => {
        console.error('Error al cargar las categorías:', error);
        this.loading = false;
      }
    );
  } 

  onSearch(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredCategories = this.categories.filter((category) => {
      return (
        category.name.toLowerCase().includes(query) ||
        category.description.toLowerCase().includes(query)
      );
    });
  }

  details(uuid: string) {
     this.router.navigate(['/inicio/detalle', uuid]);
  }

}
