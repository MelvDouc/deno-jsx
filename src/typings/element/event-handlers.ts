type JSX_EventHandler<T extends Event = Event> = ((ev: T) => unknown) | null;
type GEHMap = GlobalEventHandlersEventMap;

type JSX_GlobalEventHandlers = {
  [K in keyof GEHMap as `on:${K}`]: JSX_EventHandler<GEHMap[K]>;
};

export type { JSX_EventHandler, JSX_GlobalEventHandlers };