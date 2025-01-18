import type { JSX_AbstractElement } from "$/typings/element/abstract-element.ts";
import type { JSX_EventHandler } from "$/typings/element/event-handlers.ts";

interface JSX_HTMLElement<T extends HTMLElement = HTMLElement> extends JSX_AbstractElement<T> {
  accessKey: string;
  autocapitalize: "" | "off" | "none" | "on" | "sentences" | "words" | "characters";
  contentEditable: string;
  dir: "" | "auto" | "ltr" | "rtl";
  enterKeyHint: "" | "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
  hidden: boolean | "until-found";
  inert: boolean;
  inputMode: string;
  is: string;
  lang: string;
  popover: "auto" | "manual" | null;
  spellcheck: boolean;
  title: string;
  translate: boolean;
}

/* FORM */

interface JSX_PopoverInvokerElement<T extends HTMLElement> extends JSX_HTMLElement<T> {
  disabled: boolean;
  formAction: string;
  formEnctype: string;
  formMethod: string;
  formNoValidate: boolean;
  name: string;
  popoverTargetAction: string;
  popoverTarget: string | null;
  value: string;
}

interface JSX_HTMLButtonElement extends JSX_PopoverInvokerElement<HTMLButtonElement> {
  formTarget: string;
  type: string;
}

interface JSX_HTMLFormElement extends JSX_HTMLElement<HTMLFormElement> {
  acceptCharset: string;
  action: string;
  autocomplete: AutoFillBase;
  encoding: string;
  enctype: string;
  method: string;
  name: string;
  noValidate: boolean;
  rel: string;
  target: string;
}

interface JSX_HTMLFieldSetElement extends JSX_HTMLElement<HTMLFieldSetElement> {
  disabled: boolean;
  name: string;
}

interface JSX_HTMLInputElement extends JSX_PopoverInvokerElement<HTMLInputElement> {
  accept: string;
  align: string;
  alt: string;
  autocomplete: AutoFill;
  capture: string;
  checked: boolean;
  defaultChecked: boolean;
  defaultValue: string;
  dirName: string;
  formTarget: string;
  height: number;
  indeterminate: boolean;
  list: string;
  max: number | string;
  maxLength: number;
  min: number | string;
  minLength: number;
  multiple: boolean;
  pattern: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  selectionEnd: number | null;
  selectionStart: number | null;
  size: number;
  src: string;
  step: number | "any";
  type: string;
  width: number;
}

interface JSX_HTMLLabelElement extends JSX_HTMLElement<HTMLLabelElement> {
  htmlFor: string;
}

interface JSX_HTMLMeterElement extends JSX_HTMLElement<HTMLMeterElement> {
  high: number;
  low: number;
  max: number;
  min: number;
  optimum: number;
  value: number;
}

interface JSX_HTMLOptGroupElement extends JSX_HTMLElement<HTMLOptGroupElement> {
  disabled: boolean;
  label: string;
}

interface JSX_HTMLOptionElement extends JSX_HTMLElement<HTMLOptionElement> {
  defaultSelected: boolean;
  disabled: boolean;
  label: string;
  selected: boolean;
  value: string;
}

interface JSX_HTMLOutputElement extends JSX_HTMLElement<HTMLOutputElement> {
  defaultValue: string;
  name: string;
  value: string;
}

interface JSX_HTMLProgressElement extends JSX_HTMLElement<HTMLProgressElement> {
  max: number;
  value: number;
}

interface JSX_HTMLSelectElement extends JSX_HTMLElement<HTMLSelectElement> {
  autocomplete: AutoFill;
  disabled: boolean;
  length: number;
  multiple: boolean;
  name: string;
  required: boolean;
  selectedIndex: number;
  size: number;
  value: string;
}

interface JSX_HTMLTextAreaElement extends JSX_HTMLElement<HTMLTextAreaElement> {
  autocomplete: AutoFill;
  cols: number;
  defaultValue: string;
  dirName: string;
  disabled: boolean;
  maxLength: number;
  minLength: number;
  name: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  rows: number;
  selectionDirection: "forward" | "backward" | "none";
  selectionEnd: number;
  selectionStart: number;
  wrap: string;
  value: string;
}

/* Navigation */

interface JSX_NavigationElement<T extends HTMLElement> extends JSX_HTMLElement<T> {
  download: string;
  hash: string;
  hostname: string;
  href: string;
  password: string;
  pathname: string;
  ping: string;
  port: string;
  protocol: string;
  referrerPolicy: string;
  rel: string;
  search: string;
  username: string;
  target: string;
}

interface JSX_HTMLAnchorElement extends JSX_NavigationElement<HTMLAnchorElement> {
  hreflang: string;
  type: string;
}

interface JSX_HTMLAreaElement extends JSX_NavigationElement<HTMLAreaElement> {
  alt: string;
  coords: string;
  shape: "rect" | "circle" | "poly" | "default" | string;
}

interface JSX_HTMLMapElement extends JSX_HTMLElement<HTMLMapElement> {
  name: string;
}

/* Media */

interface JSX_HTMLMediaElement<T extends HTMLMediaElement> extends JSX_HTMLElement<T> {
  autoplay: boolean;
  controls: boolean;
  crossOrigin: string | null;
  currentTime: number;
  defaultMuted: boolean;
  defaultPlaybackRate: number;
  disableRemotePlayback: boolean;
  loop: boolean;
  muted: boolean;
  "on:encrypted": JSX_EventHandler<MediaEncryptedEvent>;
  "on:waitingforkey": JSX_EventHandler<Event>;
  playbackRate: number;
  preload: "none" | "metadata" | "auto" | "";
  preservesPitch: boolean;
  src: string;
  srcObject: MediaProvider | null;
  volume: number;
}

interface JSX_HTMLAudioElement extends JSX_HTMLMediaElement<HTMLAudioElement> { }

interface JSX_HTMLEmbedElement extends JSX_HTMLElement<HTMLEmbedElement> {
  height: number;
  src: string;
  type: string;
  width: number;
}

interface JSX_HTMLSourceElement extends JSX_HTMLElement<HTMLSourceElement> {
  height: number;
  media: string;
  sizes: string;
  src: string;
  srcset: string;
  type: string;
  width: number;
}

interface JSX_HTMLTrackElement extends JSX_HTMLElement<HTMLTrackElement> {
  default: boolean;
  kind: string;
  label: string;
  src: string;
  srclang: string;
}

interface JSX_HTMLVideoElement extends JSX_HTMLMediaElement<HTMLVideoElement> {
  disablePictureInPicture: boolean;
  height: number;
  "on:enterpictureinpicture": JSX_EventHandler<Event>;
  "on:leavepictureinpicture": JSX_EventHandler<Event>;
  playsInline: boolean;
  poster: string;
  width: number;
}

// ===== ===== ===== ===== =====
// HEAD
// ===== ===== ===== ===== =====

interface JSX_HTMLBaseElement extends JSX_HTMLElement<HTMLBaseElement> {
  href: string;
  target: string;
}

interface JSX_HTMLLinkElement extends JSX_HTMLElement<HTMLLinkElement> {
  as: string;
  blocking: string;
  crossOrigin: string | null;
  disabled: boolean;
  fetchPriority: "auto" | "high" | "low";
  href: string;
  hreflang: string;
  integrity: string;
  media: string;
  referrerPolicy: string;
  rel: string;
  type: string;
}

interface JSX_HTMLMetaElement extends JSX_HTMLElement<HTMLMetaElement> {
  content: string;
  httpEquiv: string;
  media: string;
  name: string;
}

interface JSX_HTMLScriptElement extends JSX_HTMLElement<HTMLScriptElement> {
  async: boolean;
  crossOrigin: string | null;
  defer: boolean;
  href: string;
  integrity: string;
  noModule: boolean;
  referrerPolicy: string;
  src: string;
  type: string;
}

interface JSX_HTMLStyleElement extends JSX_HTMLElement<HTMLStyleElement> {
  disabled: boolean;
  media: string;
  title: string;
}

// ===== ===== ===== ===== =====
// LIST
// ===== ===== ===== ===== =====

interface JSX_HTMLLiElement extends JSX_HTMLElement<HTMLLIElement> {
  value: string;
}

interface JSX_HTMLOlElement extends JSX_HTMLElement<HTMLOListElement> {
  reversed: boolean;
  start: number;
  type: string;
}

/* Table */

interface JSX_HTMLTableElement extends JSX_HTMLElement<HTMLTableElement> {
  caption: HTMLTableCaptionElement | null;
}

interface JSX_HTMLTableCellElement extends JSX_HTMLElement<HTMLTableCellElement> {
  abbr: string;
  colSpan: number;
  headers: string;
  rowSpan: number;
  scope: string;
}

interface JSX_HTMLTableColElement extends JSX_HTMLElement<HTMLTableColElement> {
  span: number;
}

// ===== ===== ===== ===== =====
// OTHERS
// ===== ===== ===== ===== =====

interface JSX_HTMLCanvasElement extends JSX_HTMLElement<HTMLCanvasElement> {
  height: number;
  width: number;
}

interface JSX_HTMLDataElement extends JSX_HTMLElement<HTMLDataElement> {
  value: string;
}

interface JSX_HTMLDetailsElement extends JSX_HTMLElement<HTMLDetailsElement> {
  open: boolean;
}

interface JSX_HTMLDialogElement extends JSX_HTMLElement<HTMLDialogElement> {
  open: boolean;
  returnValue: string;
}

interface JSX_HTMLIFrameElement extends JSX_HTMLElement<HTMLIFrameElement> {
  allow: string;
  allowFullscreen: boolean;
  /**
   * @deprecated Use the CSS `border` property instead.
   */
  frameBorder: string;
  height: string;
  loading: string;
  name: string;
  referrerPolicy: ReferrerPolicy;
  sandbox: string;
  src: string;
  srcdoc: string;
  width: string;
}

interface JSX_HTMLImgElement extends JSX_HTMLElement<HTMLImageElement> {
  alt: string;
  crossOrigin: string | null;
  decoding: "async" | "sync" | "auto";
  fetchPriority: "auto" | "high" | "low";
  height: number;
  isMap: boolean;
  loading: "eager" | "lazy";
  referrerPolicy: ReferrerPolicy;
  sizes: string;
  src: string;
  srcset: string;
  useMap: string;
  width: number;
}

interface JSX_HTMLModElement extends JSX_HTMLElement<HTMLModElement> {
  cite: string;
  dateTime: string;
}

interface JSX_HTMLObjectElement extends JSX_HTMLElement<HTMLObjectElement> {
  data: string;
  height: string;
  name: string;
  type: string;
  width: string;
}

interface JSX_HTMLQuoteElement extends JSX_HTMLElement<HTMLQuoteElement> {
  cite: string;
}

interface JSX_HTMLSlotElement extends JSX_HTMLElement<HTMLSlotElement> {
  name: string;
}

interface JSX_HTMLTimeElement extends JSX_HTMLElement<HTMLTimeElement> {
  dateTime: string;
}

export interface JSX_HTMLElementTagNameMap {
  a: JSX_HTMLAnchorElement;
  abbr: JSX_HTMLElement;
  address: JSX_HTMLElement;
  area: JSX_HTMLAreaElement;
  article: JSX_HTMLElement;
  aside: JSX_HTMLElement;
  audio: JSX_HTMLAudioElement;
  b: JSX_HTMLElement;
  base: JSX_HTMLBaseElement;
  bdi: JSX_HTMLElement;
  bdo: JSX_HTMLElement;
  blockquote: JSX_HTMLQuoteElement;
  body: JSX_HTMLElement;
  br: JSX_HTMLElement;
  button: JSX_HTMLButtonElement;
  canvas: JSX_HTMLCanvasElement;
  caption: JSX_HTMLElement;
  cite: JSX_HTMLElement;
  code: JSX_HTMLElement;
  col: JSX_HTMLTableColElement;
  colgroup: JSX_HTMLTableColElement;
  data: JSX_HTMLDataElement;
  datalist: JSX_HTMLElement;
  del: JSX_HTMLModElement;
  details: JSX_HTMLDetailsElement;
  dialog: JSX_HTMLDialogElement;
  dd: JSX_HTMLElement;
  dfn: JSX_HTMLElement;
  div: JSX_HTMLElement;
  dl: JSX_HTMLElement;
  dt: JSX_HTMLElement;
  em: JSX_HTMLElement;
  embed: JSX_HTMLEmbedElement;
  fieldset: JSX_HTMLFieldSetElement;
  figcaption: JSX_HTMLElement;
  figure: JSX_HTMLElement;
  footer: JSX_HTMLElement;
  form: JSX_HTMLFormElement;
  head: JSX_HTMLElement;
  header: JSX_HTMLElement;
  h1: JSX_HTMLElement;
  h2: JSX_HTMLElement;
  h3: JSX_HTMLElement;
  h4: JSX_HTMLElement;
  h5: JSX_HTMLElement;
  h6: JSX_HTMLElement;
  html: JSX_HTMLElement;
  hr: JSX_HTMLElement;
  hgroup: JSX_HTMLElement;
  i: JSX_HTMLElement;
  iframe: JSX_HTMLIFrameElement;
  img: JSX_HTMLImgElement;
  input: JSX_HTMLInputElement;
  ins: JSX_HTMLModElement;
  kbd: JSX_HTMLElement;
  label: JSX_HTMLLabelElement;
  legend: JSX_HTMLElement;
  li: JSX_HTMLLiElement;
  link: JSX_HTMLLinkElement;
  main: JSX_HTMLElement;
  map: JSX_HTMLMapElement;
  mark: JSX_HTMLElement;
  menu: JSX_HTMLElement;
  meta: JSX_HTMLMetaElement;
  meter: JSX_HTMLMeterElement;
  nav: JSX_HTMLElement;
  noscript: JSX_HTMLElement;
  object: JSX_HTMLObjectElement;
  ol: JSX_HTMLOlElement;
  optgroup: JSX_HTMLOptGroupElement;
  option: JSX_HTMLOptionElement;
  output: JSX_HTMLOutputElement;
  p: JSX_HTMLElement;
  picture: JSX_HTMLElement;
  pre: JSX_HTMLElement;
  progress: JSX_HTMLProgressElement;
  q: JSX_HTMLQuoteElement;
  rp: JSX_HTMLElement;
  rt: JSX_HTMLElement;
  ruby: JSX_HTMLElement;
  s: JSX_HTMLElement;
  samp: JSX_HTMLElement;
  script: JSX_HTMLScriptElement;
  search: JSX_HTMLElement;
  section: JSX_HTMLElement;
  select: JSX_HTMLSelectElement;
  slot: JSX_HTMLSlotElement;
  small: JSX_HTMLElement;
  source: JSX_HTMLSourceElement;
  span: JSX_HTMLElement;
  strong: JSX_HTMLElement;
  style: JSX_HTMLStyleElement;
  sub: JSX_HTMLElement;
  summary: JSX_HTMLElement;
  sup: JSX_HTMLElement;
  table: JSX_HTMLTableElement;
  tbody: JSX_HTMLElement;
  td: JSX_HTMLTableCellElement;
  template: JSX_HTMLElement;
  textarea: JSX_HTMLTextAreaElement;
  tfoot: JSX_HTMLElement;
  th: JSX_HTMLTableCellElement;
  thead: JSX_HTMLElement;
  time: JSX_HTMLTimeElement;
  title: JSX_HTMLElement;
  tr: JSX_HTMLElement;
  track: JSX_HTMLTrackElement;
  u: JSX_HTMLElement;
  ul: JSX_HTMLElement<HTMLUListElement>;
  var: JSX_HTMLElement;
  video: JSX_HTMLVideoElement;
  wbr: JSX_HTMLElement;
}

export type HTMLOnlyTagName = keyof JSX_HTMLElementTagNameMap;