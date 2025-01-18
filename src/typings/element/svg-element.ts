import type { JSX_AbstractElement } from "$/typings/element/abstract-element.ts";
import type { JSX_EventHandler } from "$/typings/element/event-handlers.ts";

// ===== ===== ===== ===== =====
// TYPE ALIASES
// ===== ===== ===== ===== =====

type AccumulateProp = "sum" | "none";
type AdditiveProp = "sum" | "replace";
type AlignementBaseline =
  | "auto"
  | "baseline"
  | "before-edge"
  | "text-before-edge"
  | "middle"
  | "central"
  | "after-edge"
  | "text-after-edge"
  | "ideographic"
  | "alphabetic"
  | "hanging"
  | "mathematical"
  | "top"
  | "center"
  | "bottom";

type AnimateFill = "freeze" | "remove";
type CalcMode = "discrete" | "linear" | "paced" | "spline";
type CrossOrigin = "anonymous" | "use-credentials" | "";
type Direction = "ltr" | "rtl";
type EdgeMode = "duplicate" | "wrap" | "none";
type FeIn =
  | "SourceGraphic"
  | "SourceAlpha"
  | "BackgroundImage"
  | "BackgroundAlpha"
  | "FillPaint"
  | "StrokePaint"
  | string;
type Units = "objectBoundingBox" | "userSpaceOnUse";

// ===== ===== ===== ===== =====
// ABSTRACT
// ===== ===== ===== ===== =====

interface JSX_SVGElement<T extends SVGElement> extends JSX_AbstractElement<T> {
  color: string;
  decelerate: string;
  display: string;
  filter: string;
  xmlns: string;
}

interface JSX_SVGAnimationElement<T extends SVGElement> extends JSX_SVGElement<T> {
  begin: string;
  dur: string;
  end: string;
  fill: AnimateFill;
  keyPoints: string;
  "on:begin": JSX_EventHandler<Event>;
  "on:end": JSX_EventHandler<Event>;
  "on:repeat": JSX_EventHandler<Event>;
  repeatCount: string;
  repeatDur: string;
  requiredExtensions: string;
  restart: "always" | "whenNotActive" | "never";
  systemLanguage: string;
  to: number | string;
}

interface JSX_SVGAbstractTexElement<T extends SVGElement> extends JSX_SVGElement<T> {
  lengthAdjust: "spacing" | "spacingAndGlyphs";
  textLength: string;
  stroke: string;
}

interface Delta {
  dx: number | string;
  dy: number | string;
}

interface Point {
  x: string;
  y: string;
}

interface Sized extends Point {
  height: number | string;
  width: number | string;
}

// ===== ===== ===== ===== =====
// ELEMENTS
// ===== ===== ===== ===== =====

interface JSX_SVGGradientElement extends JSX_SVGElement<SVGGradientElement> {
  gradientTransform: string;
  gradientUnits: Units;
  spreadMethod: "pad" | "reflect" | "repeat";
}

interface JSX_SVGAnimateElement extends JSX_SVGAnimationElement<SVGAnimateElement> {
  accumulate: AccumulateProp;
  additive: AdditiveProp;
  attributeName: string;
  by: number | string;
  calcMode: CalcMode;
  from: number | string;
  keySplines: string;
  keyTimes: string;
  values: string;
}

interface JSX_SVGAnimateMotionElement extends JSX_SVGAnimationElement<SVGAnimateMotionElement> {
  accumulate: AccumulateProp;
  additive: AdditiveProp;
  by: number | string;
  calcMode: CalcMode;
  from: number | string;
  keySplines: string;
  keyTimes: string;
  path: string;
  rotate: number | string;
  values: string;
}

interface JSX_SVGAnimateTransformElement extends JSX_SVGAnimationElement<SVGAnimateTransformElement> {
  accumulate: AccumulateProp;
  additive: AdditiveProp;
  attributeName: string;
  by: number | string;
  calcMode: CalcMode;
  from: number | string;
  keySplines: string;
  keyTimes: string;
  type: "translate" | "scale" | "rotate" | "skewX" | "skewY";
  values: string;
}

interface JSX_SVGCircleElement extends JSX_SVGElement<SVGCircleElement> {
  cx: string;
  cy: string;
  fill: string;
  mask: string;
  pathLength: number;
  r: string;
  stroke: string;
}

interface JSX_SVGClipPathElement extends JSX_SVGElement<SVGClipPathElement> {
  clipPathUnits: Units;
  mask: string;
}

interface JSX_SVGDefsElement extends JSX_SVGElement<SVGDefsElement> { }

interface JSX_SVGEllipseElement extends JSX_SVGElement<SVGEllipseElement> {
  cx: string;
  cy: string;
  fill: string;
  mask: string;
  pathLength: number;
  rx: number | string;
  ry: number | string;
  stroke: string;
}

interface JSX_SVGFeBlendElement extends JSX_SVGElement<SVGFEBlendElement>, Sized {
  in: FeIn;
  in2: FeIn;
  mode: string;
  result: string;
}

interface JSX_SVGFeColorMatrixElement extends JSX_SVGElement<SVGFEColorMatrixElement>, Sized {
  in: FeIn;
  type: "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha";
  result: string;
  values: string;
}

interface JSX_SVGFeComponentTransferElement extends JSX_SVGElement<SVGFEComponentTransferElement>, Sized {
  in: FeIn;
  in2: FeIn;
  result: string;
}

interface JSX_SVGFeCompositeElement extends JSX_SVGElement<SVGFECompositeElement>, Sized {
  in: FeIn;
  k1: number;
  k2: number;
  k3: number;
  k4: number;
  operator: "over" | "in" | "out" | "atop" | "xor" | "lighter" | "arithmetic";
  result: string;
}

interface JSX_SVGFeConvolveMatrixElement extends JSX_SVGElement<SVGFEConvolveMatrixElement>, Point {
  bias: number;
  divisor: number;
  edgeMode: EdgeMode;
  in: FeIn;
  kernelMatrix: string;
  order: string;
  preserveAlpha: boolean;
  result: string;
  targetX: number;
  targetY: number;
}

interface JSX_SVGFeDiffuseLightingElement extends JSX_SVGElement<SVGFEDiffuseLightingElement>, Sized {
  diffuseConstant: number;
  in: FeIn;
  result: string;
  surfaceScale: number;
}

interface JSX_SVGFeDisplacementMapElement extends JSX_SVGElement<SVGFEDisplacementMapElement>, Sized {
  in: FeIn;
  in2: FeIn;
  result: string;
  scale: number;
  xChannelSelector: "R" | "G" | "B" | "A";
  yChannelSelector: "R" | "G" | "B" | "A";
}

interface JSX_SVGFeDistantLightElement extends JSX_SVGElement<SVGFEDistantLightElement> {
  azimuth: number;
  elevation: number;
}

interface JSX_SVGFeDropShadowElement extends JSX_SVGElement<SVGFEDropShadowElement>, Sized, Delta {
  in: FeIn;
  result: string;
}

interface JSX_SVGFeFloodElement extends JSX_SVGElement<SVGFEFloodElement>, Sized {
  result: string;
}

interface JSX_SVGFeFuncElement<T extends SVGElement> extends JSX_SVGElement<T>, Point {
  amplitude: number;
  exponent: number;
  intercept: number;
  offset: number;
  slope: number;
  tableValues: string;
  type: "identity" | "table" | "discrete" | "linear" | "gamma";
}

interface JSX_SVGFeGaussianBlurElement extends JSX_SVGElement<SVGFEGaussianBlurElement>, Sized {
  edgeMode: EdgeMode;
  in: FeIn;
  result: string;
  stdDeviation: string;
}

interface JSX_SVGFeImageElement extends JSX_SVGElement<SVGFEImageElement>, Sized {
  crossorigin: CrossOrigin;
  preserveAspectRatio: string;
  result: string;
}

interface JSX_SVGFeMergeElement extends JSX_SVGElement<SVGFEMergeElement>, Sized {
  in: FeIn;
  result: string;
}

interface JSX_SVGFeMergeNodeElement extends JSX_SVGElement<SVGFEMergeNodeElement>, Point {
  in: FeIn;
}

interface JSX_SVGFeMorphologyElement extends JSX_SVGElement<SVGFEMorphologyElement>, Sized {
  in: FeIn;
  radius: string;
  result: string;
}

interface JSX_SVGFeOffsetElement extends JSX_SVGElement<SVGFEOffsetElement>, Sized, Delta {
  in: FeIn;
  operator: "erode" | "dilate";
  result: string;
}

interface JSX_SVGFePointLightElement extends JSX_SVGElement<SVGFEPointLightElement> {
  x: number;
  y: number;
  z: number;
}

interface JSX_SVGFeSpecularLightingElement extends JSX_SVGElement<SVGFESpecularLightingElement>, Sized {
  in: FeIn;
  result: string;
  specularConstant: number;
  specularExponent: number;
  surfaceScale: number;
}

interface JSX_SVGFeSpotLightElement extends JSX_SVGElement<SVGFESpotLightElement> {
  limitingConeAngle: number;
  pointsAtX: number;
  pointsAtY: number;
  pointsAtZ: number;
  specularExponent: number;
  x: number;
  y: number;
  z: number;
}

interface JSX_SVGFeTileElement extends JSX_SVGElement<SVGFETileElement>, Sized {
  in: FeIn;
  result: string;
}

interface JSX_SVGFeTurbulenceElement extends JSX_SVGElement<SVGFETurbulenceElement>, Sized {
  baseFrequency: string;
  numOctaves: number;
  seed: number;
  result: string;
  stitchTiles: "noStitch" | "stitch";
  type: "fractalNoise" | "turbulence";
}

interface JSX_SVGFilterElement extends JSX_SVGElement<SVGFilterElement>, Sized {
  filterUnits: Units;
  primitiveUnits: Units;
}

interface JSX_SVGForeignObjectElement extends JSX_SVGElement<SVGForeignObjectElement>, Sized {
}

interface JSX_SVGGElement extends JSX_SVGElement<SVGSVGElement> {
  mask: string;
}

interface JSX_SVGImageElement extends JSX_SVGElement<SVGImageElement>, Sized {
  crossorigin: CrossOrigin;
  decoding: "sync" | "async" | "auto";
  mask: string;
  preserveAspectRatio: string;
}

interface JSX_SVGLinearGradientElement extends JSX_SVGGradientElement {
  x1: number | string;
  x2: number | string;
  y1: number | string;
  y2: number | string;
}

interface JSX_SVGLineElement extends JSX_SVGElement<SVGLineElement> {
  mask: string;
  pathLength: number;
  stroke: string;
  x1: number | string;
  x2: number | string;
  y1: number | string;
  y2: number | string;
}

interface JSX_SVGMarkerElement extends JSX_SVGElement<SVGMarkerElement>, Point {
  mask: string;
  markerHeight: number | string;
  markerUnits: "userSpaceOnUse" | "strokeWidth";
  markerWidth: number | string;
  orient: string;
  preserveAspectRatio: string;
  refX: number | string;
  refY: number | string;
  viewBox: string;
}

interface JSX_SVGMaskElement extends JSX_SVGElement<SVGMaskElement>, Sized {
  mask: string;
  maskContentUnits: Units;
  maskUnits: Units;
}

interface JSX_SVGPathElement extends JSX_SVGElement<SVGPathElement> {
  d: string;
  fill: string;
  mask: string;
  pathLength: number;
  stroke: string;
}

interface JSX_SVGPatternElement extends JSX_SVGElement<SVGPatternElement>, Sized {
  mask: string;
  patternContentUnits: Units;
  patternTransform: string;
  patternUnits: Units;
  preserveAspectRatio: string;
  viewBox: string;
}

interface JSX_SVGPolygonElement extends JSX_SVGElement<SVGPolygonElement> {
  fill: string;
  mask: string;
  pathLength: number;
  points: string;
  stroke: string;
}

interface JSX_SVGPolylineElement extends JSX_SVGElement<SVGPolylineElement> {
  fill: string;
  mask: string;
  pathLength: number;
  points: string;
  stroke: string;
}

interface JSX_SVGRadialGradientElement extends JSX_SVGGradientElement {
  cx: string;
  cy: string;
  fr: string;
  fx: number | string;
  fy: number | string;
  href: string;
  r: string;
}

interface JSX_SVGRectElement extends JSX_SVGElement<SVGRectElement>, Sized {
  fill: string;
  mask: string;
  pathLength: number;
  rx: number | string;
  ry: number | string;
  stroke: string;
}

interface JSX_SVGSVGElement extends JSX_SVGElement<SVGSVGElement>, Sized {
  mask: string;
  preserveAspectRatio: string;
  viewBox: string;
}

interface JSX_SVGSetElement extends JSX_SVGAnimationElement<SVGSetElement> {
  attributeName: string;
  fill: AnimateFill;
}

interface JSX_SVGStopElement extends JSX_SVGElement<SVGStopElement> {
  offset: number | string;
}

interface JSX_SVGSymbolElement extends JSX_SVGElement<SVGSymbolElement> {
  mask: string;
  preserveAspectRatio: string;
  refX: number | string;
  refY: number | string;
  viewBox: string;
}

interface JSX_SVGTextElement extends JSX_SVGAbstractTexElement<SVGTextElement>, Delta, Point {
  "alignment-baseline": AlignementBaseline;
  direction: Direction;
  fill: string;
  mask: string;
}

interface JSX_SVGTextPathElement extends JSX_SVGAbstractTexElement<SVGTextPathElement> {
  "alignment-baseline": AlignementBaseline;
  "baseline-shift": string;
  direction: Direction;
  fill: string;
  path: string;
  side: "left" | "right";
  spacing: "auto" | "exact";
  startOffset: number | string;
}

interface JSX_SVGTspanElement extends JSX_SVGAbstractTexElement<SVGTSpanElement>, Delta, Point {
  "alignment-baseline": AlignementBaseline;
  "baseline-shift": string;
  direction: Direction;
  fill: string;
}

interface JSX_SVGUseElement extends JSX_SVGElement<SVGUseElement>, Sized {
  mask: string;
}

interface JSX_SVGViewElement extends JSX_SVGElement<SVGViewElement> {
  preserveAspectRatio: string;
  viewBox: string;
}

export interface JSX_SVGElementTagNameMap {
  animate: JSX_SVGAnimateElement;
  animateMotion: JSX_SVGAnimateMotionElement;
  animateTransform: JSX_SVGAnimateTransformElement;
  circle: JSX_SVGCircleElement;
  clipPath: JSX_SVGClipPathElement;
  defs: JSX_SVGDefsElement;
  desc: JSX_SVGElement<SVGDescElement>;
  ellipse: JSX_SVGEllipseElement;
  feBlend: JSX_SVGFeBlendElement;
  feColorMatrix: JSX_SVGFeColorMatrixElement;
  feComponentTransfer: JSX_SVGFeComponentTransferElement;
  feComposite: JSX_SVGFeCompositeElement;
  feConvolveMatrix: JSX_SVGFeConvolveMatrixElement;
  feDiffuseLighting: JSX_SVGFeDiffuseLightingElement;
  feDisplacementMap: JSX_SVGFeDisplacementMapElement;
  feDistantLight: JSX_SVGFeDistantLightElement;
  feDropShadow: JSX_SVGFeDropShadowElement;
  feFlood: JSX_SVGFeFloodElement;
  feGaussianBlur: JSX_SVGFeGaussianBlurElement;
  feMerge: JSX_SVGFeMergeElement;
  feMergeNode: JSX_SVGFeMergeNodeElement;
  feMorphology: JSX_SVGFeMorphologyElement;
  feImage: JSX_SVGFeImageElement;
  feFuncA: JSX_SVGFeFuncElement<SVGFEFuncAElement>;
  feFuncB: JSX_SVGFeFuncElement<SVGFEFuncBElement>;
  feFuncG: JSX_SVGFeFuncElement<SVGFEFuncGElement>;
  feFuncR: JSX_SVGFeFuncElement<SVGFEFuncRElement>;
  feOffset: JSX_SVGFeOffsetElement;
  fePointLight: JSX_SVGFePointLightElement;
  feSpecularLighting: JSX_SVGFeSpecularLightingElement;
  feSpotLight: JSX_SVGFeSpotLightElement;
  feTile: JSX_SVGFeTileElement;
  feTurbulence: JSX_SVGFeTurbulenceElement;
  filter: JSX_SVGFilterElement;
  foreignObject: JSX_SVGForeignObjectElement;
  g: JSX_SVGGElement;
  image: JSX_SVGImageElement;
  line: JSX_SVGLineElement;
  linearGradient: JSX_SVGLinearGradientElement;
  marker: JSX_SVGMarkerElement;
  mask: JSX_SVGMaskElement;
  metadata: JSX_SVGElement<SVGMetadataElement>;
  mpath: JSX_SVGElement<SVGMPathElement>;
  path: JSX_SVGPathElement;
  pattern: JSX_SVGPatternElement;
  polygon: JSX_SVGPolygonElement;
  polyline: JSX_SVGPolylineElement;
  radialGradient: JSX_SVGRadialGradientElement;
  rect: JSX_SVGRectElement;
  svg: JSX_SVGSVGElement;
  set: JSX_SVGSetElement;
  stop: JSX_SVGStopElement;
  switch: JSX_SVGElement<SVGSwitchElement>;
  symbol: JSX_SVGSymbolElement;
  text: JSX_SVGTextElement;
  textPath: JSX_SVGTextPathElement;
  tspan: JSX_SVGTspanElement;
  use: JSX_SVGUseElement;
  view: JSX_SVGViewElement;
}

export type SVGOnlyTagName = keyof JSX_SVGElementTagNameMap;