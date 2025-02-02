import type { JSX_CommonProps } from "$/typings/prop-types/common.ts";
import type { JSX_EventHandler } from "$/typings/prop-types/event-handlers.ts";

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
// COMMON
// ===== ===== ===== ===== =====

interface JSX_SVGProps<T extends SVGElement> extends JSX_CommonProps<T> {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color */
  color?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/decelerate */
  decelerate?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/display */
  display?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/filter */
  filter?: string;
  /** Defined for compatibility with HTML elements. Not used. */
  is?: never;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xmlns */
  xmlns?: string;
}

interface JSX_SVGAnimationProps<T extends SVGElement> extends JSX_SVGProps<T> {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/begin */
  begin?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dur */
  dur?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/end */
  end?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill */
  fill?: AnimateFill;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/keyPoints */
  keyPoints?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/onbegin" */
  "on:begin"?: JSX_EventHandler<Event>;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/onend" */
  "on:end"?: JSX_EventHandler<Event>;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/onrepeat" */
  "on:repeat"?: JSX_EventHandler<Event>;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/repeatCount */
  repeatCount?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/repeatDur */
  repeatDur?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/requiredExtensions */
  requiredExtensions?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/restart */
  restart?: "always" | "whenNotActive" | "never";
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/systemLanguage */
  systemLanguage?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/to */
  to?: number | string;
}

interface JSX_SVGCommonTextProps<T extends SVGElement> extends JSX_SVGProps<T> {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/lengthAdjust */
  lengthAdjust?: "spacing" | "spacingAndGlyphs";
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/textLength */
  textLength?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke */
  stroke?: string;
}

interface JSX_SVGGradientProps extends JSX_SVGProps<SVGGradientElement> {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/gradientTransform */
  gradientTransform?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/gradientUnits */
  gradientUnits?: Units;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/spreadMethod */
  spreadMethod?: "pad" | "reflect" | "repeat";
}

interface Delta {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dx */
  dx?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dy */
  dy?: number | string;
}

interface Point {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x */
  x?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y */
  y?: string;
}

interface Sized extends Point {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/height */
  height?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/width */
  width?: number | string;
}

// ===== ===== ===== ===== =====
// animate
// ===== ===== ===== ===== =====

interface JSX_SVGAnimateProps extends JSX_SVGAnimationProps<SVGAnimateElement> {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/accumulate */
  accumulate?: AccumulateProp;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/additive */
  additive?: AdditiveProp;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/attributeName */
  attributeName?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/by */
  by?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/calcMode */
  calcMode?: CalcMode;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/from */
  from?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/keySplines */
  keySplines?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/keyTimes */
  keyTimes?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/values */
  values?: string;
}

// ===== ===== ===== ===== =====
// animateMotion
// ===== ===== ===== ===== =====

interface JSX_SVGAnimateMotionProps extends JSX_SVGAnimationProps<SVGAnimateMotionElement> {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/accumulate */
  accumulate?: AccumulateProp;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/additive */
  additive?: AdditiveProp;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/by */
  by?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/calcMode */
  calcMode?: CalcMode;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/from */
  from?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/keySplines */
  keySplines?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/keyTimes */
  keyTimes?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/path */
  path?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/rotate */
  rotate?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/values */
  values?: string;
}

// ===== ===== ===== ===== =====
// animateTransform
// ===== ===== ===== ===== =====

interface JSX_SVGAnimateTransformProps extends JSX_SVGAnimationProps<SVGAnimateTransformElement> {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/accumulate */
  accumulate?: AccumulateProp;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/additive */
  additive?: AdditiveProp;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/attributeName */
  attributeName?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/by */
  by?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/calcMode */
  calcMode?: CalcMode;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/from */
  from?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/keySplines */
  keySplines?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/keyTimes */
  keyTimes?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type */
  type?: "translate" | "scale" | "rotate" | "skewX" | "skewY";
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/values */
  values?: string;
}

// ===== ===== ===== ===== =====
// circle
// ===== ===== ===== ===== =====

interface JSX_SVGCircleProps extends JSX_SVGProps<SVGCircleElement> {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cx */
  cx?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cy */
  cy?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill */
  fill?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask */
  mask?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength */
  pathLength?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/r */
  r?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke */
  stroke?: string;
}

// ===== ===== ===== ===== =====
// clipPath
// ===== ===== ===== ===== =====

interface JSX_SVGClipPathProps extends JSX_SVGProps<SVGClipPathElement> {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clipPathUnits */
  clipPathUnits?: Units;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask */
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
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cx */
  cx?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cy */
  cy?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill */
  fill?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask */
  mask?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength */
  pathLength?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/rx */
  rx?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/ry */
  ry?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke */
  stroke?: string;
}

// ===== ===== ===== ===== =====
// feBlend
// ===== ===== ===== ===== =====

interface JSX_SVGFeBlendProps extends JSX_SVGProps<SVGFEBlendElement>, Sized {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in */
  in?: FeIn;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in2 */
  in2?: FeIn;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mode */
  mode?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/result */
  result?: string;
}

// ===== ===== ===== ===== =====
// feColorMatrix
// ===== ===== ===== ===== =====

interface JSX_SVGFeColorMatrixProps extends JSX_SVGProps<SVGFEColorMatrixElement>, Sized {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in */
  in?: FeIn;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type */
  type?: "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha";
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/result */
  result?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/values */
  values?: string;
}

// ===== ===== ===== ===== =====
// feComponentTransfer
// ===== ===== ===== ===== =====

interface JSX_SVGFeComponentTransferProps extends JSX_SVGProps<SVGFEComponentTransferElement>, Sized {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in */
  in?: FeIn;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in2 */
  in2?: FeIn;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/result */
  result?: string;
}

// ===== ===== ===== ===== =====
// feComposite
// ===== ===== ===== ===== =====

interface JSX_SVGFeCompositeProps extends JSX_SVGProps<SVGFECompositeElement>, Sized {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in */
  in?: FeIn;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/k1 */
  k1?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/k2 */
  k2?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/k3 */
  k3?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/k4 */
  k4?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/operator */
  operator?: "over" | "in" | "out" | "atop" | "xor" | "lighter" | "arithmetic";
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/result */
  result?: string;
}

// ===== ===== ===== ===== =====
// feConvolveMatrix
// ===== ===== ===== ===== =====

interface JSX_SVGFeConvolveMatrixProps extends JSX_SVGProps<SVGFEConvolveMatrixElement>, Point {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/bias */
  bias?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/divisor */
  divisor?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/edgeMode */
  edgeMode?: EdgeMode;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in */
  in?: FeIn;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/kernelMatrix */
  kernelMatrix?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/order */
  order?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAlpha */
  preserveAlpha?: boolean;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/result */
  result?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/targetX */
  targetX?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/targetY */
  targetY?: number;
}

// ===== ===== ===== ===== =====
// feDiffuseLighting
// ===== ===== ===== ===== =====

interface JSX_SVGFeDiffuseLightingProps extends JSX_SVGProps<SVGFEDiffuseLightingElement>, Sized {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/diffuseConstant */
  diffuseConstant?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in */
  in?: FeIn;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/result */
  result?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/surfaceScale */
  surfaceScale?: number;
}

// ===== ===== ===== ===== =====
// feDisplacementMap
// ===== ===== ===== ===== =====

interface JSX_SVGFeDisplacementMapProps extends JSX_SVGProps<SVGFEDisplacementMapElement>, Sized {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in */
  in?: FeIn;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in2 */
  in2?: FeIn;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/result */
  result?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/scale */
  scale?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xChannelSelector */
  xChannelSelector?: "R" | "G" | "B" | "A";
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/yChannelSelector */
  yChannelSelector?: "R" | "G" | "B" | "A";
}

// ===== ===== ===== ===== =====
// feDistantLight
// ===== ===== ===== ===== =====

interface JSX_SVGFeDistantLightProps extends JSX_SVGProps<SVGFEDistantLightElement> {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/azimuth */
  azimuth?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/elevation */
  elevation?: number;
}

// ===== ===== ===== ===== =====
// feDropShadow
// ===== ===== ===== ===== =====

interface JSX_SVGFeDropShadowProps extends JSX_SVGProps<SVGFEDropShadowElement>, Sized, Delta {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in */
  in?: FeIn;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/result */
  result?: string;
}

// ===== ===== ===== ===== =====
// feFlood
// ===== ===== ===== ===== =====

interface JSX_SVGFeFloodProps extends JSX_SVGProps<SVGFEFloodElement>, Sized {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/result */
  result?: string;
}

// ===== ===== ===== ===== =====
// feFunc
// ===== ===== ===== ===== =====

interface JSX_SVGFeFuncProps<T extends SVGElement> extends JSX_SVGProps<T>, Point {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/amplitude */
  amplitude?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/exponent */
  exponent?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/intercept */
  intercept?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/offset */
  offset?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/slope */
  slope?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/tableValues */
  tableValues?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type */
  type?: "identity" | "table" | "discrete" | "linear" | "gamma";
}

// ===== ===== ===== ===== =====
// feGaussianBlur
// ===== ===== ===== ===== =====

interface JSX_SVGFeGaussianBlurProps extends JSX_SVGProps<SVGFEGaussianBlurElement>, Sized {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/edgeMode */
  edgeMode?: EdgeMode;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in */
  in?: FeIn;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/result */
  result?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stdDeviation */
  stdDeviation?: string;
}

// ===== ===== ===== ===== =====
// feImage
// ===== ===== ===== ===== =====

interface JSX_SVGFeImageProps extends JSX_SVGProps<SVGFEImageElement>, Sized {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/crossorigin */
  crossorigin?: CrossOrigin;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio */
  preserveAspectRatio?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/result */
  result?: string;
}

// ===== ===== ===== ===== =====
// feMerge
// ===== ===== ===== ===== =====

interface JSX_SVGFeMergeProps extends JSX_SVGProps<SVGFEMergeElement>, Sized {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in */
  in?: FeIn;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/result */
  result?: string;
}

// ===== ===== ===== ===== =====
// feMergeNode
// ===== ===== ===== ===== =====

interface JSX_SVGFeMergeNodeProps extends JSX_SVGProps<SVGFEMergeNodeElement>, Point {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in */
  in?: FeIn;
}

// ===== ===== ===== ===== =====
// feMorphology
// ===== ===== ===== ===== =====

interface JSX_SVGFeMorphologyProps extends JSX_SVGProps<SVGFEMorphologyElement>, Sized {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in */
  in?: FeIn;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/radius */
  radius?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/result */
  result?: string;
}

// ===== ===== ===== ===== =====
// feOffset
// ===== ===== ===== ===== =====

interface JSX_SVGFeOffsetProps extends JSX_SVGProps<SVGFEOffsetElement>, Sized, Delta {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in */
  in?: FeIn;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/operator */
  operator?: "erode" | "dilate";
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/result */
  result?: string;
}

// ===== ===== ===== ===== =====
// fePointLight
// ===== ===== ===== ===== =====

interface JSX_SVGFePointLightProps extends JSX_SVGProps<SVGFEPointLightElement> {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x */
  x?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y */
  y?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/z */
  z?: number;
}

// ===== ===== ===== ===== =====
// feSpecularLighting
// ===== ===== ===== ===== =====

interface JSX_SVGFeSpecularLightingProps extends JSX_SVGProps<SVGFESpecularLightingElement>, Sized {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in */
  in?: FeIn;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/result */
  result?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/specularConstant */
  specularConstant?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/specularExponent */
  specularExponent?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/surfaceScale */
  surfaceScale?: number;
}

// ===== ===== ===== ===== =====
// feSpotLight
// ===== ===== ===== ===== =====

interface JSX_SVGFeSpotLightProps extends JSX_SVGProps<SVGFESpotLightElement> {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/limitingConeAngle */
  limitingConeAngle?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pointsAtX */
  pointsAtX?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pointsAtY */
  pointsAtY?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pointsAtZ */
  pointsAtZ?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/specularExponent */
  specularExponent?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x */
  x?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y */
  y?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/z */
  z?: number;
}

// ===== ===== ===== ===== =====
// feTile
// ===== ===== ===== ===== =====

interface JSX_SVGFeTileProps extends JSX_SVGProps<SVGFETileElement>, Sized {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in */
  in?: FeIn;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/result */
  result?: string;
}

// ===== ===== ===== ===== =====
// feTurbulence
// ===== ===== ===== ===== =====

interface JSX_SVGFeTurbulenceProps extends JSX_SVGProps<SVGFETurbulenceElement>, Sized {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseFrequency */
  baseFrequency?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/numOctaves */
  numOctaves?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/seed */
  seed?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/result */
  result?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stitchTiles */
  stitchTiles?: "noStitch" | "stitch";
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type */
  type?: "fractalNoise" | "turbulence";
}

// ===== ===== ===== ===== =====
// feFilter
// ===== ===== ===== ===== =====

interface JSX_SVGFilterProps extends JSX_SVGProps<SVGFilterElement>, Sized {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/filterUnits */
  filterUnits?: Units;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/primitiveUnits */
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
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask */
  mask?: string;
}

// ===== ===== ===== ===== =====
// image
// ===== ===== ===== ===== =====

interface JSX_SVGImageProps extends JSX_SVGProps<SVGImageElement>, Sized {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/crossorigin */
  crossorigin?: CrossOrigin;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/decoding */
  decoding?: "sync" | "async" | "auto";
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask */
  mask?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio */
  preserveAspectRatio?: string;
}

// ===== ===== ===== ===== =====
// line
// ===== ===== ===== ===== =====

interface JSX_SVGLineProps extends JSX_SVGProps<SVGLineElement> {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask */
  mask?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength */
  pathLength?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke */
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
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x1 */
  x1?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x2 */
  x2?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y1 */
  y1?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y2 */
  y2?: number | string;
}

// ===== ===== ===== ===== =====
// marker
// ===== ===== ===== ===== =====

interface JSX_SVGMarkerProps extends JSX_SVGProps<SVGMarkerElement>, Point {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask */
  mask?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/markerHeight */
  markerHeight?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/markerUnits */
  markerUnits?: "userSpaceOnUse" | "strokeWidth";
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/markerWidth */
  markerWidth?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/orient */
  orient?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio */
  preserveAspectRatio?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/refX */
  refX?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/refY */
  refY?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox */
  viewBox?: string;
}

// ===== ===== ===== ===== =====
// mask
// ===== ===== ===== ===== =====

interface JSX_SVGMaskProps extends JSX_SVGProps<SVGMaskElement>, Sized {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask */
  mask?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/maskContentUnits */
  maskContentUnits?: Units;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/maskUnits */
  maskUnits?: Units;
}

// ===== ===== ===== ===== =====
// path
// ===== ===== ===== ===== =====

interface JSX_SVGPathProps extends JSX_SVGProps<SVGPathElement> {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d */
  d?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill */
  fill?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask */
  mask?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength */
  pathLength?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke */
  stroke?: string;
}

// ===== ===== ===== ===== =====
// pattern
// ===== ===== ===== ===== =====

interface JSX_SVGPatternProps extends JSX_SVGProps<SVGPatternElement>, Sized {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask */
  mask?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/patternContentUnits */
  patternContentUnits?: Units;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/patternTransform */
  patternTransform?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/patternUnits */
  patternUnits?: Units;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio */
  preserveAspectRatio?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox */
  viewBox?: string;
}

// ===== ===== ===== ===== =====
// polygon
// ===== ===== ===== ===== =====

interface JSX_SVGPolygonProps extends JSX_SVGProps<SVGPolygonElement> {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill */
  fill?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask */
  mask?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength */
  pathLength?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/points */
  points?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke */
  stroke?: string;
}

// ===== ===== ===== ===== =====
// polyline
// ===== ===== ===== ===== =====

interface JSX_SVGPolylineProps extends JSX_SVGProps<SVGPolylineElement> {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill */
  fill?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask */
  mask?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength */
  pathLength?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/points */
  points?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke */
  stroke?: string;
}

// ===== ===== ===== ===== =====
// radialGradient
// ===== ===== ===== ===== =====

interface JSX_SVGRadialGradientProps extends JSX_SVGGradientProps {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cx */
  cx?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cy */
  cy?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fr */
  fr?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fx */
  fx?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fy */
  fy?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/href */
  href?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/r */
  r?: string;
}

// ===== ===== ===== ===== =====
// rect
// ===== ===== ===== ===== =====

interface JSX_SVGRectProps extends JSX_SVGProps<SVGRectElement>, Sized {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill */
  fill?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask */
  mask?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength */
  pathLength?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/rx */
  rx?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/ry */
  ry?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke */
  stroke?: string;
}

// ===== ===== ===== ===== =====
// set
// ===== ===== ===== ===== =====

interface JSX_SVGSetProps extends JSX_SVGAnimationProps<SVGSetElement> {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/attributeName */
  attributeName?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill */
  fill?: AnimateFill;
}

// ===== ===== ===== ===== =====
// svg
// ===== ===== ===== ===== =====

interface JSX_SVGSVGProps extends JSX_SVGProps<SVGSVGElement>, Sized {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask */
  mask?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio */
  preserveAspectRatio?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox */
  viewBox?: string;
}

// ===== ===== ===== ===== =====
// stop
// ===== ===== ===== ===== =====

interface JSX_SVGStopProps extends JSX_SVGProps<SVGStopElement> {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/offset */
  offset?: number | string;
}

// ===== ===== ===== ===== =====
// symbol
// ===== ===== ===== ===== =====

interface JSX_SVGSymbolProps extends JSX_SVGProps<SVGSymbolElement> {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask */
  mask?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio */
  preserveAspectRatio?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/refX */
  refX?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/refY */
  refY?: number | string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox */
  viewBox?: string;
}

// ===== ===== ===== ===== =====
// text
// ===== ===== ===== ===== =====

interface JSX_SVGTextProps extends JSX_SVGCommonTextProps<SVGTextElement>, Delta, Point {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/alignment-baseline */
  "alignment-baseline"?: AlignementBaseline;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/direction */
  direction?: Direction;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill */
  fill?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask */
  mask?: string;
}

// ===== ===== ===== ===== =====
// textPath
// ===== ===== ===== ===== =====

interface JSX_SVGTextPathProps extends JSX_SVGCommonTextProps<SVGTextPathElement> {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/alignment-baseline */
  "alignment-baseline"?: AlignementBaseline;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseline-shift */
  "baseline-shift"?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/direction */
  direction?: Direction;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill */
  fill?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/path */
  path?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/side */
  side?: "left" | "right";
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/spacing */
  spacing?: "auto" | "exact";
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/startOffset */
  startOffset?: number | string;
}

// ===== ===== ===== ===== =====
// tspan
// ===== ===== ===== ===== =====

interface JSX_SVGTspanProps extends JSX_SVGCommonTextProps<SVGTSpanElement>, Delta, Point {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/alignment-baseline */
  "alignment-baseline"?: AlignementBaseline;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseline-shift */
  "baseline-shift"?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/direction */
  direction?: Direction;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill */
  fill?: string;
}

// ===== ===== ===== ===== =====
// use
// ===== ===== ===== ===== =====

interface JSX_SVGUseProps extends JSX_SVGProps<SVGUseElement>, Sized {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask */
  mask?: string;
}

// ===== ===== ===== ===== =====
// view
// ===== ===== ===== ===== =====

interface JSX_SVGViewProps extends JSX_SVGProps<SVGViewElement> {
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio */
  preserveAspectRatio?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox */
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