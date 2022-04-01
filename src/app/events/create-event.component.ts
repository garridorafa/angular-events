import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService, IEvent } from './shared';

@Component({
  templateUrl: './create-event.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::placeholder {
        color: #999;
      }
    `,
  ],
})
export class CreateEventComponent {
  isDirty: boolean = true;
  newEvent: IEvent | undefined;
  constructor(private eventService: EventService, private router: Router) {}

  saveEvent(formValues: IEvent) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }
}
