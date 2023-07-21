import {EventPayloads, EventType, IEventPayload} from "@shared/types/events";
import {useState} from "react";
import {create} from "zustand";


type EventStore = {
  subscribers: Record<EventType, ((payload: any) => void)[]>;
  subscribe: <T extends EventType>(eventType: T, callback: (payload: EventPayloads[T]) => void) => (() => void);
  emit: <T extends EventType>(eventType: T, payload: EventPayloads[T]) => void;
}

export const useEventInternal = create<EventStore>((set, get) => ({
  subscribers: {
    [EventType.onSessionClicked]: [],
    [EventType.onSessionSaved]: [],
  },
  subscribe: (eventType, callback) => {
    set((state) => {
      const subscribers = state.subscribers[eventType] || [];
      return { ...state, subscribers: { ...state.subscribers, [eventType]: [...subscribers, callback] } };
    });

    return () => {
      set((state) => {
        const subscribers = state.subscribers[eventType] || [];
        return {
          ...state,
          subscribers: { ...state.subscribers, [eventType]: subscribers.filter((cb) => cb !== callback) },
        };
      });
    };
  },

  emit: (eventType, payload) => {
    const subscribers = get().subscribers[eventType] || [];
    subscribers.forEach((callback) => callback(payload));
  },
}));

export const useEvent = <T extends EventType>(eventType: T) => {
  const { subscribe: _subscribe, emit: _emit } = useEventInternal();

  const subscribe = (callback: (payload: EventPayloads[T]) => void) => {
    return _subscribe(eventType, callback);
  }

  const emit = (payload: EventPayloads[T]) => {
    _emit(eventType, payload);
  }

  return {
    subscribe,
    emit,
  }
}
