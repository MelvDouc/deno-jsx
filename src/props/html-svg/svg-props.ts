

// ===== ===== ===== ===== =====
// TYPE ALIASES
// ===== ===== ===== ===== =====

import type { JSX_CommonProps } from "$/props/common-props.ts";
import type { JSX_EventHandler } from "$/props/event-handlers.ts";

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
// COMMON
// ===== ===== ===== ===== =====

interface JSX_SVGProps<T extends SVGElement> extends JSX_CommonProps<T> {
  color?: string;
  decelerate?: string;
  display?: string;
  filter?: string;
  xmlns?: string;
}

interface JSX_SVGAnimationProps<T extends SVGElement> extends JSX_SVGProps<T> {
  begin?: string;
  dur?: string;
  end?: string;
  fill?: AnimateFill;
  keyPoints?: string;
  "on:begin"?: JSX_EventHandler<Event>;
  "on:end"?: JSX_EventHandler<Event>;
  "on:repeat"?: JSX_EventHandler<Event>;
  repeatCount?: string;
  repeatDur?: string;
  requiredExtensions?: string;
  restart?: "always" | "whenNotActive" | "never";
  systemLanguage?: string;
  to?: number | string;
}

interface JSX_SVGCommonTextProps<T extends SVGElement> extends JSX_SVGProps<T> {
  lengthAdjust?: "spacing" | "spacingAndGlyphs";
  textLength?: string;
  stroke?: string;
}

interface JSX_SVGGradientProps extends JSX_SVGProps<SVGGradientElement> {
  gradientTransform?: string;
  gradientUnits?: Units;
  spreadMethod?: "pad" | "reflect" | "repeat";
}

interface Delta {
  dx?: number | string;
  dy?: number | string;
}

interface Point {
  x?: string;
  y?: string;
}

interface Sized extends Point {
  height?: number | string;
  width?: number | string;
}

// ===== ===== ===== ===== =====
// animate
// ===== ===== ===== ===== =====

interface JSX_SVGAnimateProps extends JSX_SVGAnimationProps<SVGAnimateElement> {
  accumulate?: AccumulateProp;
  additive?: AdditiveProp;
  attributeName?: string;
  by?: number | string;
  calcMode?: CalcMode;
  from?: number | string;
  keySplines?: string;
  keyTimes?: string;
  values?: string;
}

// ===== ===== ===== ===== =====
// animateMotion
// ===== ===== ===== ===== =====

interface JSX_SVGAnimateMotionProps extends JSX_SVGAnimationProps<SVGAnimateMotionElement> {
  accumulate?: AccumulateProp;
  additive?: AdditiveProp;
  by?: number | string;
  calcMode?: CalcMode;
  from?: number | string;
  keySplines?: string;
  keyTimes?: string;
  path?: string;
  rotate?: number | string;
  values?: string;
}

// ===== ===== ===== ===== =====
// animateTransform
// ===== ===== ===== ===== =====

interface JSX_SVGAnimateTransformProps extends JSX_SVGAnimationProps<SVGAnimateTransformElement> {
  accumulate?: AccumulateProp;
  additive?: AdditiveProp;
  attributeName?: string;
  by?: number | string;
  calcMode?: CalcMode;
  from?: number | string;
  keySplines?: string;
  keyTimes?: string;
  type?: "translate" | "scale" | "rotate" | "skewX" | "skewY";
  values?: string;
}

// ===== ===== ===== ===== =====
// circle
// ===== ===== ===== ===== =====

interface JSX_SVGCircleProps extends JSX_SVGProps<SVGCircleElement> {
  cx?: string;
  cy?: string;
  fill?: string;
  mask?: string;
  pathLength?: number;
  r?: string;
  stroke?: string;
}

// ===== ===== ===== ===== =====
// clipPath
// ===== ===== ===== ===== =====

interface JSX_SVGClipPathProps extends JSX_SVGProps<SVGClipPathElement> {
  clipPathUnits?: Units;
  mask?: string;
}

// ===== ===== ===== ===== =====
// defs
// ===== ===== ===== ===== =====

interface JSX_SVGDefsProps extends JSX_SVGProps<SVGDefsElement> { }

// ===== ===== ===== ===== =====
// ellipse
// ===== ===== ===== ===== =====

interface JSX_SVGEllipseProps extends JSX_SVGProps<SVGEllipseElement> {
  cx?: string;
  cy?: string;
  fill?: string;
  mask?: string;
  pathLength?: number;
  rx?: number | string;
  ry?: number | string;
  stroke?: string;
}

// ===== ===== ===== ===== =====
// feBlend
// ===== ===== ===== ===== =====

interface JSX_SVGFeBlendProps extends JSX_SVGProps<SVGFEBlendElement>, Sized {
  in?: FeIn;
  in2: FeIn;
  mode?: string;
  result?: string;
}

// ===== ===== ===== ===== =====
// feColorMatrix
// ===== ===== ===== ===== =====

interface JSX_SVGFeColorMatrixProps extends JSX_SVGProps<SVGFEColorMatrixElement>, Sized {
  in?: FeIn;
  type?: "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha";
  result?: string;
  values?: string;
}

// ===== ===== ===== ===== =====
// feComponentTransfer
// ===== ===== ===== ===== =====

interface JSX_SVGFeComponentTransferProps extends JSX_SVGProps<SVGFEComponentTransferElement>, Sized {
  in?: FeIn;
  in2: FeIn;
  result?: string;
}

// ===== ===== ===== ===== =====
// feComposite
// ===== ===== ===== ===== =====

interface JSX_SVGFeCompositeProps extends JSX_SVGProps<SVGFECompositeElement>, Sized {
  in?: FeIn;
  k1: number;
  k2: number;
  k3: number;
  k4: number;
  operator?: "over" | "in" | "out" | "atop" | "xor" | "lighter" | "arithmetic";
  result?: string;
}

// ===== ===== ===== ===== =====
// feConvolveMatrix
// ===== ===== ===== ===== =====

interface JSX_SVGFeConvolveMatrixProps extends JSX_SVGProps<SVGFEConvolveMatrixElement>, Point {
  bias?: number;
  divisor?: number;
  edgeMode?: EdgeMode;
  in?: FeIn;
  kernelMatrix?: string;
  order?: string;
  preserveAlpha?: boolean;
  result?: string;
  targetX?: number;
  targetY?: number;
}

// ===== ===== ===== ===== =====
// feDiffuseLighting
// ===== ===== ===== ===== =====

interface JSX_SVGFeDiffuseLightingProps extends JSX_SVGProps<SVGFEDiffuseLightingElement>, Sized {
  diffuseConstant?: number;
  in?: FeIn;
  result?: string;
  surfaceScale?: number;
}

// ===== ===== ===== ===== =====
// feDisplacementMap
// ===== ===== ===== ===== =====

interface JSX_SVGFeDisplacementMapProps extends JSX_SVGProps<SVGFEDisplacementMapElement>, Sized {
  in?: FeIn;
  in2: FeIn;
  result?: string;
  scale?: number;
  xChannelSelector?: "R" | "G" | "B" | "A";
  yChannelSelector?: "R" | "G" | "B" | "A";
}

// ===== ===== ===== ===== =====
// feDistantLight
// ===== ===== ===== ===== =====

interface JSX_SVGFeDistantLightProps extends JSX_SVGProps<SVGFEDistantLightElement> {
  azimuth?: number;
  elevation?: number;
}

// ===== ===== ===== ===== =====
// feDropShadow
// ===== ===== ===== ===== =====

interface JSX_SVGFeDropShadowProps extends JSX_SVGProps<SVGFEDropShadowElement>, Sized, Delta {
  in?: FeIn;
  result?: string;
}

// ===== ===== ===== ===== =====
// feFlood
// ===== ===== ===== ===== =====

interface JSX_SVGFeFloodProps extends JSX_SVGProps<SVGFEFloodElement>, Sized {
  result?: string;
}

// ===== ===== ===== ===== =====
// feFunc
// ===== ===== ===== ===== =====

interface JSX_SVGFeFuncProps<T extends SVGElement> extends JSX_SVGProps<T>, Point {
  amplitude?: number;
  exponent?: number;
  intercept?: number;
  offset?: number;
  slope?: number;
  tableValues?: string;
  type?: "identity" | "table" | "discrete" | "linear" | "gamma";
}

// ===== ===== ===== ===== =====
// feGaussianBlur
// ===== ===== ===== ===== =====

interface JSX_SVGFeGaussianBlurProps extends JSX_SVGProps<SVGFEGaussianBlurElement>, Sized {
  edgeMode?: EdgeMode;
  in?: FeIn;
  result?: string;
  stdDeviation?: string;
}

// ===== ===== ===== ===== =====
// feImage
// ===== ===== ===== ===== =====

interface JSX_SVGFeImageProps extends JSX_SVGProps<SVGFEImageElement>, Sized {
  crossorigin?: CrossOrigin;
  preserveAspectRatio?: string;
  result?: string;
}

// ===== ===== ===== ===== =====
// feMerge
// ===== ===== ===== ===== =====

interface JSX_SVGFeMergeProps extends JSX_SVGProps<SVGFEMergeElement>, Sized {
  in?: FeIn;
  result?: string;
}

// ===== ===== ===== ===== =====
// feMergeNode
// ===== ===== ===== ===== =====

interface JSX_SVGFeMergeNodeProps extends JSX_SVGProps<SVGFEMergeNodeElement>, Point {
  in?: FeIn;
}

// ===== ===== ===== ===== =====
// feMorphology
// ===== ===== ===== ===== =====

interface JSX_SVGFeMorphologyProps extends JSX_SVGProps<SVGFEMorphologyElement>, Sized {
  in?: FeIn;
  radius?: string;
  result?: string;
}

// ===== ===== ===== ===== =====
// feOffset
// ===== ===== ===== ===== =====

interface JSX_SVGFeOffsetProps extends JSX_SVGProps<SVGFEOffsetElement>, Sized, Delta {
  in?: FeIn;
  operator?: "erode" | "dilate";
  result?: string;
}

// ===== ===== ===== ===== =====
// fePointLight
// ===== ===== ===== ===== =====

interface JSX_SVGFePointLightProps extends JSX_SVGProps<SVGFEPointLightElement> {
  x?: number;
  y?: number;
  z?: number;
}

// ===== ===== ===== ===== =====
// feSpecularLighting
// ===== ===== ===== ===== =====

interface JSX_SVGFeSpecularLightingProps extends JSX_SVGProps<SVGFESpecularLightingElement>, Sized {
  in?: FeIn;
  result?: string;
  specularConstant?: number;
  specularExponent?: number;
  surfaceScale?: number;
}

// ===== ===== ===== ===== =====
// feSpotLight
// ===== ===== ===== ===== =====

interface JSX_SVGFeSpotLightProps extends JSX_SVGProps<SVGFESpotLightElement> {
  limitingConeAngle?: number;
  pointsAtX?: number;
  pointsAtY?: number;
  pointsAtZ?: number;
  specularExponent?: number;
  x?: number;
  y?: number;
  z?: number;
}

// ===== ===== ===== ===== =====
// feTile
// ===== ===== ===== ===== =====

interface JSX_SVGFeTileProps extends JSX_SVGProps<SVGFETileElement>, Sized {
  in?: FeIn;
  result?: string;
}

// ===== ===== ===== ===== =====
// feTurbulence
// ===== ===== ===== ===== =====

interface JSX_SVGFeTurbulenceProps extends JSX_SVGProps<SVGFETurbulenceElement>, Sized {
  baseFrequency?: string;
  numOctaves?: number;
  seed?: number;
  result?: string;
  stitchTiles?: "noStitch" | "stitch";
  type?: "fractalNoise" | "turbulence";
}

// ===== ===== ===== ===== =====
// feFilter
// ===== ===== ===== ===== =====

interface JSX_SVGFilterProps extends JSX_SVGProps<SVGFilterElement>, Sized {
  filterUnits?: Units;
  primitiveUnits?: Units;
}

// ===== ===== ===== ===== =====
// foreignObject
// ===== ===== ===== ===== =====

interface JSX_SVGForeignObjectProps extends JSX_SVGProps<SVGForeignObjectElement>, Sized {
}

// ===== ===== ===== ===== =====
// g
// ===== ===== ===== ===== =====

interface JSX_SVGGProps extends JSX_SVGProps<SVGSVGElement> {
  mask?: string;
}

// ===== ===== ===== ===== =====
// image
// ===== ===== ===== ===== =====

interface JSX_SVGImageProps extends JSX_SVGProps<SVGImageElement>, Sized {
  crossorigin?: CrossOrigin;
  decoding?: "sync" | "async" | "auto";
  mask?: string;
  preserveAspectRatio?: string;
}

// ===== ===== ===== ===== =====
// line
// ===== ===== ===== ===== =====

interface JSX_SVGLineProps extends JSX_SVGProps<SVGLineElement> {
  mask?: string;
  pathLength?: number;
  stroke?: string;
  x1: number | string;
  x2: number | string;
  y1: number | string;
  y2: number | string;
}

// ===== ===== ===== ===== =====
// linearGradient
// ===== ===== ===== ===== =====

interface JSX_SVGLinearGradientProps extends JSX_SVGGradientProps {
  x1: number | string;
  x2: number | string;
  y1: number | string;
  y2: number | string;
}

// ===== ===== ===== ===== =====
// marker
// ===== ===== ===== ===== =====

interface JSX_SVGMarkerProps extends JSX_SVGProps<SVGMarkerElement>, Point {
  mask?: string;
  markerHeight?: number | string;
  markerUnits?: "userSpaceOnUse" | "strokeWidth";
  markerWidth?: number | string;
  orient?: string;
  preserveAspectRatio?: string;
  refX?: number | string;
  refY?: number | string;
  viewBox?: string;
}

// ===== ===== ===== ===== =====
// mask
// ===== ===== ===== ===== =====

interface JSX_SVGMaskProps extends JSX_SVGProps<SVGMaskElement>, Sized {
  mask?: string;
  maskContentUnits?: Units;
  maskUnits?: Units;
}

// ===== ===== ===== ===== =====
// path
// ===== ===== ===== ===== =====

interface JSX_SVGPathProps extends JSX_SVGProps<SVGPathElement> {
  d?: string;
  fill?: string;
  mask?: string;
  pathLength?: number;
  stroke?: string;
}

// ===== ===== ===== ===== =====
// pattern
// ===== ===== ===== ===== =====

interface JSX_SVGPatternProps extends JSX_SVGProps<SVGPatternElement>, Sized {
  mask?: string;
  patternContentUnits?: Units;
  patternTransform?: string;
  patternUnits?: Units;
  preserveAspectRatio?: string;
  viewBox?: string;
}

// ===== ===== ===== ===== =====
// polygon
// ===== ===== ===== ===== =====

interface JSX_SVGPolygonProps extends JSX_SVGProps<SVGPolygonElement> {
  fill?: string;
  mask?: string;
  pathLength?: number;
  points?: string;
  stroke?: string;
}

// ===== ===== ===== ===== =====
// polyline
// ===== ===== ===== ===== =====

interface JSX_SVGPolylineProps extends JSX_SVGProps<SVGPolylineElement> {
  fill?: string;
  mask?: string;
  pathLength?: number;
  points?: string;
  stroke?: string;
}

// ===== ===== ===== ===== =====
// radialGradient
// ===== ===== ===== ===== =====

interface JSX_SVGRadialGradientProps extends JSX_SVGGradientProps {
  cx?: string;
  cy?: string;
  fr?: string;
  fx?: number | string;
  fy?: number | string;
  href?: string;
  r?: string;
}

// ===== ===== ===== ===== =====
// rect
// ===== ===== ===== ===== =====

interface JSX_SVGRectProps extends JSX_SVGProps<SVGRectElement>, Sized {
  fill?: string;
  mask?: string;
  pathLength?: number;
  rx?: number | string;
  ry?: number | string;
  stroke?: string;
}

// ===== ===== ===== ===== =====
// set
// ===== ===== ===== ===== =====

interface JSX_SVGSetProps extends JSX_SVGAnimationProps<SVGSetElement> {
  attributeName?: string;
  fill?: AnimateFill;
}

// ===== ===== ===== ===== =====
// svg
// ===== ===== ===== ===== =====

interface JSX_SVGSVGProps extends JSX_SVGProps<SVGSVGElement>, Sized {
  mask?: string;
  preserveAspectRatio?: string;
  viewBox?: string;
}

// ===== ===== ===== ===== =====
// stop
// ===== ===== ===== ===== =====

interface JSX_SVGStopProps extends JSX_SVGProps<SVGStopElement> {
  offset?: number | string;
}

// ===== ===== ===== ===== =====
// symbol
// ===== ===== ===== ===== =====

interface JSX_SVGSymbolProps extends JSX_SVGProps<SVGSymbolElement> {
  mask?: string;
  preserveAspectRatio?: string;
  refX?: number | string;
  refY?: number | string;
  viewBox?: string;
}

// ===== ===== ===== ===== =====
// text
// ===== ===== ===== ===== =====

interface JSX_SVGTextProps extends JSX_SVGCommonTextProps<SVGTextElement>, Delta, Point {
  "alignment-baseline"?: AlignementBaseline;
  direction?: Direction;
  fill?: string;
  mask?: string;
}

// ===== ===== ===== ===== =====
// textPath
// ===== ===== ===== ===== =====

interface JSX_SVGTextPathProps extends JSX_SVGCommonTextProps<SVGTextPathElement> {
  "alignment-baseline"?: AlignementBaseline;
  "baseline-shift"?: string;
  direction?: Direction;
  fill?: string;
  path?: string;
  side?: "left" | "right";
  spacing?: "auto" | "exact";
  startOffset?: number | string;
}

// ===== ===== ===== ===== =====
// tspan
// ===== ===== ===== ===== =====

interface JSX_SVGTspanProps extends JSX_SVGCommonTextProps<SVGTSpanElement>, Delta, Point {
  "alignment-baseline"?: AlignementBaseline;
  "baseline-shift"?: string;
  direction?: Direction;
  fill?: string;
}

// ===== ===== ===== ===== =====
// use
// ===== ===== ===== ===== =====

interface JSX_SVGUseProps extends JSX_SVGProps<SVGUseElement>, Sized {
  mask?: string;
}

// ===== ===== ===== ===== =====
// view
// ===== ===== ===== ===== =====

interface JSX_SVGViewProps extends JSX_SVGProps<SVGViewElement> {
  preserveAspectRatio?: string;
  viewBox?: string;
}

// ===== ===== ===== ===== =====
// TAG NAME MAP
// ===== ===== ===== ===== =====

export interface JSX_SVGPropsTagNameMap {
  animate: JSX_SVGAnimateProps;
  animateMotion: JSX_SVGAnimateMotionProps;
  animateTransform: JSX_SVGAnimateTransformProps;
  circle: JSX_SVGCircleProps;
  clipPath: JSX_SVGClipPathProps;
  defs: JSX_SVGDefsProps;
  desc: JSX_SVGProps<SVGDescElement>;
  ellipse: JSX_SVGEllipseProps;
  feBlend: JSX_SVGFeBlendProps;
  feColorMatrix: JSX_SVGFeColorMatrixProps;
  feComponentTransfer: JSX_SVGFeComponentTransferProps;
  feComposite: JSX_SVGFeCompositeProps;
  feConvolveMatrix: JSX_SVGFeConvolveMatrixProps;
  feDiffuseLighting: JSX_SVGFeDiffuseLightingProps;
  feDisplacementMap: JSX_SVGFeDisplacementMapProps;
  feDistantLight: JSX_SVGFeDistantLightProps;
  feDropShadow: JSX_SVGFeDropShadowProps;
  feFlood: JSX_SVGFeFloodProps;
  feFuncA: JSX_SVGFeFuncProps<SVGFEFuncAElement>;
  feFuncB: JSX_SVGFeFuncProps<SVGFEFuncBElement>;
  feFuncG: JSX_SVGFeFuncProps<SVGFEFuncGElement>;
  feFuncR: JSX_SVGFeFuncProps<SVGFEFuncRElement>;
  feGaussianBlur: JSX_SVGFeGaussianBlurProps;
  feMerge: JSX_SVGFeMergeProps;
  feMergeNode: JSX_SVGFeMergeNodeProps;
  feMorphology: JSX_SVGFeMorphologyProps;
  feImage: JSX_SVGFeImageProps;
  feOffset: JSX_SVGFeOffsetProps;
  fePointLight: JSX_SVGFePointLightProps;
  feSpecularLighting: JSX_SVGFeSpecularLightingProps;
  feSpotLight: JSX_SVGFeSpotLightProps;
  feTile: JSX_SVGFeTileProps;
  feTurbulence: JSX_SVGFeTurbulenceProps;
  filter: JSX_SVGFilterProps;
  foreignObject: JSX_SVGForeignObjectProps;
  g: JSX_SVGGProps;
  image: JSX_SVGImageProps;
  line: JSX_SVGLineProps;
  linearGradient: JSX_SVGLinearGradientProps;
  marker: JSX_SVGMarkerProps;
  mask: JSX_SVGMaskProps;
  metadata: JSX_SVGProps<SVGMetadataElement>;
  mpath: JSX_SVGProps<SVGMPathElement>;
  path: JSX_SVGPathProps;
  pattern: JSX_SVGPatternProps;
  polygon: JSX_SVGPolygonProps;
  polyline: JSX_SVGPolylineProps;
  radialGradient: JSX_SVGRadialGradientProps;
  rect: JSX_SVGRectProps;
  set: JSX_SVGSetProps;
  svg: JSX_SVGSVGProps;
  stop: JSX_SVGStopProps;
  switch: JSX_SVGProps<SVGSwitchElement>;
  symbol: JSX_SVGSymbolProps;
  text: JSX_SVGTextProps;
  textPath: JSX_SVGTextPathProps;
  tspan: JSX_SVGTspanProps;
  use: JSX_SVGUseProps;
  view: JSX_SVGViewProps;
}