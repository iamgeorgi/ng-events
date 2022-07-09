import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EventService } from './services/event.service';
import { EventComponent } from './components/events/event/event.component';
import { EventListComponent } from './components/events/event-list/event-list.component';
import { EventDetailComponent } from './components/events/event-detail/event-detail.component';
import { HomeComponent } from './components/home/home.component';
import { HighlightDirective } from './directives/navigate-to.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventComponent,
    EventListComponent,
    EventDetailComponent,
    HomeComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
