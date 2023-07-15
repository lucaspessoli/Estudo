import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  carro = {
    ano: 2015,
    cor: "vermelho"
  }

  title = 'primeiro-projeto';
}
