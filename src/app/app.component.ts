import { Component } from '@angular/core';
import { image } from './image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'finalIntegration';
  temp = image;
}
