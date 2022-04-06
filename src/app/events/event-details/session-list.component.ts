import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ISession } from '../shared';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[] | undefined;
  @Input() filterBy: string;
  visibleSessions: ISession[] = [];

  filterSessions(filterBy: string) {
    if (filterBy === 'all') {
      this.visibleSessions = this.sessions?.slice(0) ?? [];
    } else {
      this.visibleSessions =
        this.sessions?.filter(
          (s) => s.level.toLocaleLowerCase() === filterBy
        ) ?? [];
    }
  }

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }
}
