import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEvent, ISession } from '../shared';
import { EventService } from '../shared/event.service';

@Component({
  templateUrl: './event-details.component.html',
  styles: [
    `
      .container {
        padding: 0 20px;
      }
      .event-image {
        height: 100px;
      }
      a {
        cursor: pointer;
      }
    `,
  ],
})
export class EventsDetailsComponent implements OnInit {
  event: IEvent | undefined;
  addMode: boolean = false;
  filterBy: string = 'all';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  addSession() {
    this.addMode = true;
  }
  saveNewSession(session: ISession) {
    if (this.event) {
      const previousId = this.event?.sessions?.length;
      session.id = previousId ? previousId + 1 : 1;
      this.event?.sessions.push(session);
      this.eventService.updateEvent(this.event);
      this.addMode = false;
    }
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
