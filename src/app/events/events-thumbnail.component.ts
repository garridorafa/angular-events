import { Component, Input } from '@angular/core';
import { IEvent } from './shared';

@Component({
  selector: 'events-thumbnail',
  template: `
    <div [routerLink]="['/events', event?.id]" class="well hoverwell thumbnail">
      <h2>{{ event?.name | uppercase }}</h2>
      <div>Date: {{ event?.date | date }}</div>
      <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
        Time: {{ event?.time }}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: {{ event?.price | currency: 'USD' }}</div>
      <div *ngIf="event?.location">
        <span>Location: {{ event?.location?.address }}</span>
        <span class="pad-left"
          >{{ event?.location?.city }}, {{ event?.location?.country }}</span
        >
      </div>
      <div *ngIf="event?.onlineUrl">Online URL: {{ event?.onlineUrl }}</div>
    </div>
  `,
  styles: [
    `
      .green {
        color: #003300 !important;
      }
      .bold {
        font-weight: bold;
      }
      .thumbnail {
        min-height: 210px;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
    `,
  ],
})
export class EventsThumbnailsComponent {
  @Input() event: IEvent | undefined;

  getStartTimeClass(): any {
    const isEarlyStart = this.event?.time === '8:00 am';

    return {
      green: isEarlyStart,
      bold: isEarlyStart,
    };
  }
}
