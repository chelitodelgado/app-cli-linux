import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.page.html',
  styleUrls: ['./terminal.page.scss'],
})
export class TerminalPage implements OnInit {
  public title: string = 'Comandos';
  public description: string = 'Consulta más de 300 comandos de Linux.';
  
  public commands: any[] = [];
  public loading: boolean = false;
  public filteredCommands: any[] = [];

  constructor(
    private _http: HttpService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = true;
    }, 1000);

    this.getCommands();
  }

  getCommands() {
    this._http.getCommands().subscribe(
      (data) => {
        this.commands = data;
        this.filteredCommands = [...this.commands];
        this.loading = false;
      },
      (error) => {
        console.error('Error al cargar los comandos:', error);
        this.loading = false;
      }
    );

  }

  onSearch(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredCommands = this.commands.filter((command) => {
      return (
        command.name.toLowerCase().includes(query) ||
        command.description.toLowerCase().includes(query)
      );
    });
  }

}
