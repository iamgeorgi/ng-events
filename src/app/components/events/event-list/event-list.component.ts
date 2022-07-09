import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  constructor(private eventService: EventService) { }
  events: any;

  ngOnInit(): void {
    this.events = this.eventService.getEvents()
  }
}
