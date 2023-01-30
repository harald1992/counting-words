import { Component } from '@angular/core';
import { RoutingService } from './services/routing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counting-words';

  constructor(routingService: RoutingService) { }

}
