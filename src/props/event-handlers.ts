type JSX_EventHandler<T extends Event = Event> = ((ev: T) => unknown) | null;
type GlobalHandlersMap = GlobalEventHandlersEventMap;

type JSX_EventHandlerMap = {
  [K in keyof GlobalHandlersMap as `on:${K}`]?: JSX_EventHandler<GlobalHandlersMap[K]>;
};

export type { JSX_EventHandler, JSX_EventHandlerMap };