import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';

import { Event, RouterEvent, Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router) {
    this.otherFunction();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe(
        (event: any) => {
          console.log(event);
        });


  }

  otherFunction() {
    console.log('routingService constructor');

  }
}
