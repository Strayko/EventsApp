// USEFUL THINGS
// longhand syntax
// {provide: EventRouteActivator, useClass: EventRouteActivator},
// use only api which we need from Logger class
// {provide: MinimalLogger, useExisting: Logger}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { EventsAppComponent } from './events-app.component';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator,
} from './events/index';

import {NavBarComponent} from './nav/navbar.component';
import {
  JQ_TOKEN,
  TOASTR_TOKEN,
  Toastr,
  CollapsableWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common';
import {appRoutes} from './routes';
import {RouterModule} from '@angular/router';
import {Error404Component} from './errors/404.component';
import {AuthService} from './user/auth.service';

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator,
    CollapsableWellComponent
  ],
  providers: [
    EventService,
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQ_TOKEN, useValue: jQuery},
    EventRouteActivator,
    EventListResolver,
    AuthService,
    VoterService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState}
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
