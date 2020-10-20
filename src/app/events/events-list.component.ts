import {Component} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr>
      <event-thumbnail [event]="event"></event-thumbnail>
    </div>
  `
})
// 3 - Using Template Variables to Interact with Child Component
export class EventsListComponent {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/25/2021',
    time: '10:00 am',
    price: 499.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1056 DT',
      city: 'London',
      country: 'England'
    }
  };
}
