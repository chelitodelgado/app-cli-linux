import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public title: string = 'Inicio';
  public description: string ='Consulta la linea de comandos de linux.';

  constructor() {}

}
