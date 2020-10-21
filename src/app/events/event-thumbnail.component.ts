import {Component, Input} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
      Time: {{event?.time}}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: \${{event?.price}}</div>
    <div *ngIf="event?.location">
      <span>Location: {{event?.location?.address}}</span>
      <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
      <div *ngIf="event?.imageUrl">
        <span>Image Url: {{event?.imageUrl}}</span>
      </div>
  </div>
  `,
  styles: [`
    .pad-left {
      margin-left: 10px;
    }
    .well div {
      color: #bbb;
    }
    .thumbnail {
      min-height: 220px;
    }
  `]
})
// 4 - Hiding and Showing Content with ngSwitch
export class EventThumbnailComponent {
  @Input() event: any;

  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am') {
      return ['green', 'bold'];
    }
    return [];
  }

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am') {
      return {'color': '#003300', 'font-weight': 'bold'};
    }
    return {};
  }
}
