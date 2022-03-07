import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';

import { EventService } from './shared/event.service';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <events-thumbnail
            (click)="handleThumbnailClick(event.name)"
            [event]="event"
          ></events-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent implements OnInit {
  events: any[] | undefined;

  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {}

  handleThumbnailClick(eventName: string) {
    this.toastr.success(eventName);
  }

  ngOnInit() {
    this.events = this.eventService.getEvent();
  }
}
