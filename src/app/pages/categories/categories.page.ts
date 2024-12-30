import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  public title: string = 'Categorias';
  public description: string = 'Consulta todas las categorias.';

  constructor() { }

  ngOnInit() {
  }

}
