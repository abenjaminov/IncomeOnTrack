import {ISessionView} from "@income-on-track/shared";

export enum EventType {
  onSessionClicked= 'onSessionClicked',
  onSessionSaved= 'onSessionSaved',
}

export interface IEventPayload {
  type: EventType
  data: any
}

export type OnSessionClickedData = {
  session: ISessionView
}

export interface OnSessionClickedEventPayload extends IEventPayload {
  type: EventType.onSessionClicked
  data: OnSessionClickedData
}

export type EventPayloads = {
  [EventType.onSessionClicked]: OnSessionClickedData
  [EventType.onSessionSaved]: void
}
