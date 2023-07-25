import {ICalendarDayView, ISessionView} from "@income-on-track/shared";

export enum EventType {
  onSessionClicked= 'onSessionClicked',
  onSessionSaved= 'onSessionSaved',
  onAddSessionClicked= 'onAddSessionClicked',
}

export interface IEventPayload {
  type: EventType
  data: any
}

export type OnSessionClickedData = {
  session: ISessionView
}

export type onAddSessionClickedData = {
  dayView: ICalendarDayView
}

export type EventPayloads = {
  [EventType.onSessionClicked]: OnSessionClickedData
  [EventType.onSessionSaved]: void
  [EventType.onAddSessionClicked]: onAddSessionClickedData
}
