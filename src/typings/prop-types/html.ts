import type { JSX_CommonProps } from "$/typings/prop-types/common.ts";
import type { JSX_EventHandler } from "$/typings/prop-types/event-handlers.ts";

// ===== ===== ===== ===== =====
// COMMON
// ===== ===== ===== ===== =====

interface JSX_HTMLProps<T extends HTMLElement = HTMLElement> extends JSX_CommonProps<T> {
  accessKey?: string;
  autocapitalize?: "" | "off" | "none" | "on" | "sentences" | "words" | "characters";
  contentEditable?: string;
  dir?: "" | "auto" | "ltr" | "rtl";
  enterKeyHint?: "" | "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
  hidden?: boolean | "until-found";
  inert?: boolean;
  inputMode?: string;
  is?: string;
  lang?: string;
  popover?: "auto" | "manual" | null;
  spellcheck?: boolean;
  title?: string;
  translate?: boolean;
}

interface JSX_HTMLMediaProps<T extends HTMLMediaElement> extends JSX_HTMLProps<T> {
  autoplay?: boolean;
  controls?: boolean;
  crossOrigin?: string | null;
  currentTime?: number;
  defaultMuted?: boolean;
  defaultPlaybackRate?: number;
  disableRemotePlayback?: boolean;
  loop?: boolean;
  muted?: boolean;
  "on:encrypted"?: JSX_EventHandler<MediaEncryptedEvent>;
  "on:waitingforkey"?: JSX_EventHandler<Event>;
  playbackRate?: number;
  preload?: "none" | "metadata" | "auto" | "";
  preservesPitch?: boolean;
  src?: string;
  srcObject?: MediaProvider | null;
  volume?: number;
}

interface JSX_NavigationProps<T extends HTMLElement> extends JSX_HTMLProps<T> {
  download?: string;
  hash?: string;
  hostname?: string;
  href?: string;
  password?: string;
  pathname?: string;
  ping?: string;
  port?: string;
  protocol?: string;
  referrerPolicy?: string;
  rel?: string;
  search?: string;
  username?: string;
  target?: string;
}

interface JSX_PopoverInvokerProps<T extends HTMLElement> extends JSX_HTMLProps<T> {
  disabled?: boolean;
  formAction?: string;
  formEnctype?: string;
  formMethod?: string;
  formNoValidate?: boolean;
  name?: string;
  popoverTargetAction?: string;
  popoverTarget?: string | null;
  value?: string;
}

// ===== ===== ===== ===== =====
// a
// ===== ===== ===== ===== =====

interface JSX_HTMLAnchorProps extends JSX_NavigationProps<HTMLAnchorElement> {
  hreflang?: string;
  type?: string;
}

// ===== ===== ===== ===== =====
// area
// ===== ===== ===== ===== =====

interface JSX_HTMLAreaProps extends JSX_NavigationProps<HTMLAreaElement> {
  alt?: string;
  coords?: string;
  shape?: "rect" | "circle" | "poly" | "default" | string;
}

// ===== ===== ===== ===== =====
// audio
// ===== ===== ===== ===== =====

interface JSX_HTMLAudioProps extends JSX_HTMLMediaProps<HTMLAudioElement> { }

// ===== ===== ===== ===== =====
// base
// ===== ===== ===== ===== =====

interface JSX_HTMLBaseProps extends JSX_HTMLProps<HTMLBaseElement> {
  href?: string;
  target?: string;
}

// ===== ===== ===== ===== =====
// blockquote & q
// ===== ===== ===== ===== =====

interface JSX_HTMLQuoteProps extends JSX_HTMLProps<HTMLQuoteElement> {
  cite?: string;
}

// ===== ===== ===== ===== =====
// button
// ===== ===== ===== ===== =====

interface JSX_HTMLButtonProps extends JSX_PopoverInvokerProps<HTMLButtonElement> {
  formTarget?: string;
  type?: string;
}

// ===== ===== ===== ===== =====
// canvas
// ===== ===== ===== ===== =====

interface JSX_HTMLCanvasProps extends JSX_HTMLProps<HTMLCanvasElement> {
  height?: number;
  width?: number;
}

// ===== ===== ===== ===== =====
// col & colgroup
// ===== ===== ===== ===== =====

interface JSX_HTMLTableColProps extends JSX_HTMLProps<HTMLTableColElement> {
  span?: number;
}

// ===== ===== ===== ===== =====
// data
// ===== ===== ===== ===== =====

interface JSX_HTMLDataProps extends JSX_HTMLProps<HTMLDataElement> {
  value?: string;
}

// ===== ===== ===== ===== =====
// del & ins
// ===== ===== ===== ===== =====

interface JSX_HTMLModProps extends JSX_HTMLProps<HTMLModElement> {
  cite?: string;
  dateTime?: string;
}

// ===== ===== ===== ===== =====
// details
// ===== ===== ===== ===== =====

interface JSX_HTMLDetailsProps extends JSX_HTMLProps<HTMLDetailsElement> {
  open?: boolean;
}

// ===== ===== ===== ===== =====
// dialog
// ===== ===== ===== ===== =====

interface JSX_HTMLDialogProps extends JSX_HTMLProps<HTMLDialogElement> {
  open?: boolean;
  returnValue?: string;
}

// ===== ===== ===== ===== =====
// embed
// ===== ===== ===== ===== =====

interface JSX_HTMLEmbedProps extends JSX_HTMLProps<HTMLEmbedElement> {
  height?: number;
  src?: string;
  type?: string;
  width?: number;
}

// ===== ===== ===== ===== =====
// fieldset
// ===== ===== ===== ===== =====

interface JSX_HTMLFieldSetProps extends JSX_HTMLProps<HTMLFieldSetElement> {
  disabled?: boolean;
  name?: string;
}

// ===== ===== ===== ===== =====
// form
// ===== ===== ===== ===== =====

interface JSX_HTMLFormProps extends JSX_HTMLProps<HTMLFormElement> {
  acceptCharset?: string;
  action?: string;
  autocomplete?: AutoFillBase;
  encoding?: string;
  enctype?: string;
  method?: string;
  name?: string;
  noValidate?: boolean;
  rel?: string;
  target?: string;
}

// ===== ===== ===== ===== =====
// iframe
// ===== ===== ===== ===== =====

interface JSX_HTMLIFrameProps extends JSX_HTMLProps<HTMLIFrameElement> {
  allow?: string;
  allowFullscreen?: boolean;
  /**
   * @deprecated Use the CSS `border` property instead.
   */
  frameBorder?: string;
  height?: string;
  loading?: string;
  name?: string;
  referrerPolicy?: ReferrerPolicy;
  sandbox?: string;
  src?: string;
  srcdoc?: string;
  width?: string;
}

// ===== ===== ===== ===== =====
// img
// ===== ===== ===== ===== =====

interface JSX_HTMLImgProps extends JSX_HTMLProps<HTMLImageElement> {
  alt?: string;
  crossOrigin?: string | null;
  decoding?: "async" | "sync" | "auto";
  fetchPriority?: "auto" | "high" | "low";
  height?: number;
  isMap?: boolean;
  loading?: "eager" | "lazy";
  referrerPolicy?: ReferrerPolicy;
  sizes?: string;
  src?: string;
  srcset?: string;
  useMap?: string;
  width?: number;
}

// ===== ===== ===== ===== =====
// input
// ===== ===== ===== ===== =====

interface JSX_HTMLInputProps extends JSX_PopoverInvokerProps<HTMLInputElement> {
  accept?: string;
  align?: string;
  alt?: string;
  autocomplete?: AutoFill;
  capture?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  defaultValue?: string;
  dirName?: string;
  formTarget?: string;
  height?: number;
  indeterminate?: boolean;
  list?: string;
  max?: number | string;
  maxLength?: number;
  min?: number | string;
  minLength?: number;
  multiple?: boolean;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  selectionEnd?: number | null;
  selectionStart?: number | null;
  size?: number;
  src?: string;
  step?: number | "any";
  type?: string;
  width?: number;
}

// ===== ===== ===== ===== =====
// label
// ===== ===== ===== ===== =====

interface JSX_HTMLLabelProps extends JSX_HTMLProps<HTMLLabelElement> {
  htmlFor?: string;
}

// ===== ===== ===== ===== =====
// li
// ===== ===== ===== ===== =====

interface JSX_HTMLLiProps extends JSX_HTMLProps<HTMLLIElement> {
  value?: string;
}

// ===== ===== ===== ===== =====
// link
// ===== ===== ===== ===== =====

interface JSX_HTMLLinkProps extends JSX_HTMLProps<HTMLLinkElement> {
  as?: string;
  blocking?: string;
  crossOrigin?: string | null;
  disabled?: boolean;
  fetchPriority?: "auto" | "high" | "low";
  href?: string;
  hreflang?: string;
  integrity?: string;
  media?: string;
  referrerPolicy?: string;
  rel?: string;
  type?: string;
}

// ===== ===== ===== ===== =====
// map
// ===== ===== ===== ===== =====

interface JSX_HTMLMapProps extends JSX_HTMLProps<HTMLMapElement> {
  name?: string;
}

// ===== ===== ===== ===== =====
// meta
// ===== ===== ===== ===== =====

interface JSX_HTMLMetaProps extends JSX_HTMLProps<HTMLMetaElement> {
  content?: string;
  httpEquiv?: string;
  media?: string;
  name?: string;
}

// ===== ===== ===== ===== =====
// meter
// ===== ===== ===== ===== =====

interface JSX_HTMLMeterProps extends JSX_HTMLProps<HTMLMeterElement> {
  high?: number;
  low?: number;
  max?: number;
  min?: number;
  optimum?: number;
  value?: number;
}

// ===== ===== ===== ===== =====
// object
// ===== ===== ===== ===== =====

interface JSX_HTMLObjectProps extends JSX_HTMLProps<HTMLObjectElement> {
  data?: string;
  height?: string;
  name?: string;
  type?: string;
  width?: string;
}

// ===== ===== ===== ===== =====
// ol
// ===== ===== ===== ===== =====

interface JSX_HTMLOlProps extends JSX_HTMLProps<HTMLOListElement> {
  reversed?: boolean;
  start?: number;
  type?: string;
}

// ===== ===== ===== ===== =====
// option
// ===== ===== ===== ===== =====

interface JSX_HTMLOptionProps extends JSX_HTMLProps<HTMLOptionElement> {
  defaultSelected?: boolean;
  disabled?: boolean;
  label?: string;
  selected?: boolean;
  value?: string;
}

// ===== ===== ===== ===== =====
// optgroup
// ===== ===== ===== ===== =====

interface JSX_HTMLOptGroupProps extends JSX_HTMLProps<HTMLOptGroupElement> {
  disabled?: boolean;
  label?: string;
}

// ===== ===== ===== ===== =====
// output
// ===== ===== ===== ===== =====

interface JSX_HTMLOutputProps extends JSX_HTMLProps<HTMLOutputElement> {
  defaultValue?: string;
  name?: string;
  value?: string;
}

// ===== ===== ===== ===== =====
// progress
// ===== ===== ===== ===== =====

interface JSX_HTMLProgressProps extends JSX_HTMLProps<HTMLProgressElement> {
  max?: number;
  value?: number;
}

// ===== ===== ===== ===== =====
// script
// ===== ===== ===== ===== =====

interface JSX_HTMLScriptProps extends JSX_HTMLProps<HTMLScriptElement> {
  async?: boolean;
  crossOrigin?: string | null;
  defer?: boolean;
  href?: string;
  integrity?: string;
  noModule?: boolean;
  referrerPolicy?: string;
  src?: string;
  type?: string;
}

// ===== ===== ===== ===== =====
// select
// ===== ===== ===== ===== =====

interface JSX_HTMLSelectProps extends JSX_HTMLProps<HTMLSelectElement> {
  autocomplete?: AutoFill;
  disabled?: boolean;
  length?: number;
  multiple?: boolean;
  name?: string;
  required?: boolean;
  selectedIndex?: number;
  size?: number;
  value?: string;
}

// ===== ===== ===== ===== =====
// slot
// ===== ===== ===== ===== =====

interface JSX_HTMLSlotProps extends JSX_HTMLProps<HTMLSlotElement> {
  name?: string;
}

// ===== ===== ===== ===== =====
// source
// ===== ===== ===== ===== =====

interface JSX_HTMLSourceProps extends JSX_HTMLProps<HTMLSourceElement> {
  height?: number;
  media?: string;
  sizes?: string;
  src?: string;
  srcset?: string;
  type?: string;
  width?: number;
}

// ===== ===== ===== ===== =====
// style
// ===== ===== ===== ===== =====

interface JSX_HTMLStyleProps extends JSX_HTMLProps<HTMLStyleElement> {
  disabled?: boolean;
  media?: string;
  title?: string;
}

// ===== ===== ===== ===== =====
// table
// ===== ===== ===== ===== =====

interface JSX_HTMLTableProps extends JSX_HTMLProps<HTMLTableElement> {
  caption?: HTMLTableCaptionElement | null;
}

// ===== ===== ===== ===== =====
// td & th
// ===== ===== ===== ===== =====

interface JSX_HTMLTableCellProps extends JSX_HTMLProps<HTMLTableCellElement> {
  abbr?: string;
  colSpan?: number;
  headers?: string;
  rowSpan?: number;
  scope?: string;
}

// ===== ===== ===== ===== =====
// textarea
// ===== ===== ===== ===== =====

interface JSX_HTMLTextAreaProps extends JSX_HTMLProps<HTMLTextAreaElement> {
  autocomplete?: AutoFill;
  cols?: number;
  defaultValue?: string;
  dirName?: string;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  rows?: number;
  selectionDirection?: "forward" | "backward" | "none";
  selectionEnd?: number;
  selectionStart?: number;
  wrap?: string;
  value?: string;
}

// ===== ===== ===== ===== =====
// time
// ===== ===== ===== ===== =====

interface JSX_HTMLTimeProps extends JSX_HTMLProps<HTMLTimeElement> {
  dateTime?: string;
}

// ===== ===== ===== ===== =====
// track
// ===== ===== ===== ===== =====

interface JSX_HTMLTrackProps extends JSX_HTMLProps<HTMLTrackElement> {
  default?: boolean;
  kind?: string;
  label?: string;
  src?: string;
  srclang?: string;
}

// ===== ===== ===== ===== =====
// video
// ===== ===== ===== ===== =====

interface JSX_HTMLVideoProps extends JSX_HTMLMediaProps<HTMLVideoElement> {
  disablePictureInPicture?: boolean;
  height?: number;
  "on:enterpictureinpicture"?: JSX_EventHandler<Event>;
  "on:leavepictureinpicture"?: JSX_EventHandler<Event>;
  playsInline?: boolean;
  poster?: string;
  width?: number;
}

// ===== ===== ===== ===== =====
// TAG NAME MAP
// ===== ===== ===== ===== =====

export interface JSX_HTMLPropsTagNameMap {
  a: JSX_HTMLAnchorProps;
  abbr: JSX_HTMLProps;
  address: JSX_HTMLProps;
  area: JSX_HTMLAreaProps;
  article: JSX_HTMLProps;
  aside: JSX_HTMLProps;
  audio: JSX_HTMLAudioProps;
  b: JSX_HTMLProps;
  base: JSX_HTMLBaseProps;
  bdi: JSX_HTMLProps;
  bdo: JSX_HTMLProps;
  blockquote: JSX_HTMLQuoteProps;
  body: JSX_HTMLProps;
  br: JSX_HTMLProps;
  button: JSX_HTMLButtonProps;
  canvas: JSX_HTMLCanvasProps;
  caption: JSX_HTMLProps;
  cite: JSX_HTMLProps;
  code: JSX_HTMLProps;
  col: JSX_HTMLTableColProps;
  colgroup: JSX_HTMLTableColProps;
  data: JSX_HTMLDataProps;
  datalist: JSX_HTMLProps;
  del: JSX_HTMLModProps;
  details: JSX_HTMLDetailsProps;
  dialog: JSX_HTMLDialogProps;
  dd: JSX_HTMLProps;
  dfn: JSX_HTMLProps;
  div: JSX_HTMLProps;
  dl: JSX_HTMLProps;
  dt: JSX_HTMLProps;
  em: JSX_HTMLProps;
  embed: JSX_HTMLEmbedProps;
  fieldset: JSX_HTMLFieldSetProps;
  figcaption: JSX_HTMLProps;
  figure: JSX_HTMLProps;
  footer: JSX_HTMLProps;
  form: JSX_HTMLFormProps;
  head: JSX_HTMLProps;
  header: JSX_HTMLProps;
  h1: JSX_HTMLProps;
  h2: JSX_HTMLProps;
  h3: JSX_HTMLProps;
  h4: JSX_HTMLProps;
  h5: JSX_HTMLProps;
  h6: JSX_HTMLProps;
  html: JSX_HTMLProps;
  hr: JSX_HTMLProps;
  hgroup: JSX_HTMLProps;
  i: JSX_HTMLProps;
  iframe: JSX_HTMLIFrameProps;
  img: JSX_HTMLImgProps;
  input: JSX_HTMLInputProps;
  ins: JSX_HTMLModProps;
  kbd: JSX_HTMLProps;
  label: JSX_HTMLLabelProps;
  legend: JSX_HTMLProps;
  li: JSX_HTMLLiProps;
  link: JSX_HTMLLinkProps;
  main: JSX_HTMLProps;
  map: JSX_HTMLMapProps;
  mark: JSX_HTMLProps;
  menu: JSX_HTMLProps;
  meta: JSX_HTMLMetaProps;
  meter: JSX_HTMLMeterProps;
  nav: JSX_HTMLProps;
  noscript: JSX_HTMLProps;
  object: JSX_HTMLObjectProps;
  ol: JSX_HTMLOlProps;
  optgroup: JSX_HTMLOptGroupProps;
  option: JSX_HTMLOptionProps;
  output: JSX_HTMLOutputProps;
  p: JSX_HTMLProps;
  picture: JSX_HTMLProps;
  pre: JSX_HTMLProps;
  progress: JSX_HTMLProgressProps;
  q: JSX_HTMLQuoteProps;
  rp: JSX_HTMLProps;
  rt: JSX_HTMLProps;
  ruby: JSX_HTMLProps;
  s: JSX_HTMLProps;
  samp: JSX_HTMLProps;
  script: JSX_HTMLScriptProps;
  search: JSX_HTMLProps;
  section: JSX_HTMLProps;
  select: JSX_HTMLSelectProps;
  slot: JSX_HTMLSlotProps;
  small: JSX_HTMLProps;
  source: JSX_HTMLSourceProps;
  span: JSX_HTMLProps;
  strong: JSX_HTMLProps;
  style: JSX_HTMLStyleProps;
  sub: JSX_HTMLProps;
  summary: JSX_HTMLProps;
  sup: JSX_HTMLProps;
  table: JSX_HTMLTableProps;
  tbody: JSX_HTMLProps;
  td: JSX_HTMLTableCellProps;
  template: JSX_HTMLProps;
  textarea: JSX_HTMLTextAreaProps;
  tfoot: JSX_HTMLProps;
  th: JSX_HTMLTableCellProps;
  thead: JSX_HTMLProps;
  time: JSX_HTMLTimeProps;
  title: JSX_HTMLProps;
  tr: JSX_HTMLProps;
  track: JSX_HTMLTrackProps;
  u: JSX_HTMLProps;
  ul: JSX_HTMLProps<HTMLUListElement>;
  var: JSX_HTMLProps;
  video: JSX_HTMLVideoProps;
  wbr: JSX_HTMLProps;
}