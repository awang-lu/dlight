/**
 * @brief HTML internal attribute map, can be accessed as js property
 */
const attributeMap = {
  // ---- Other property as attribute
  textContent: ["*"],
  innerHTML: ["*"],
  // ---- Source: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes
  accept: ["form", "input"],
  // ---- Original: accept-charset
  acceptCharset: ["form"],
  accesskey: ["*"],
  action: ["form"],
  align: [
    "caption",
    "col",
    "colgroup",
    "hr",
    "iframe",
    "img",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr",
  ],
  allow: ["iframe"],
  alt: ["area", "img", "input"],
  async: ["script"],
  autocapitalize: ["*"],
  autocomplete: ["form", "input", "select", "textarea"],
  autofocus: ["button", "input", "select", "textarea"],
  autoplay: ["audio", "video"],
  background: ["body", "table", "td", "th"],
  // ---- Original: base
  bgColor: [
    "body",
    "col",
    "colgroup",
    "marquee",
    "table",
    "tbody",
    "tfoot",
    "td",
    "th",
    "tr",
  ],
  border: ["img", "object", "table"],
  buffered: ["audio", "video"],
  capture: ["input"],
  charset: ["meta"],
  checked: ["input"],
  cite: ["blockquote", "del", "ins", "q"],
  class: ["*"],
  color: ["font", "hr"],
  cols: ["textarea"],
  // ---- Original: colspan
  colSpan: ["td", "th"],
  content: ["meta"],
  // ---- Original: contenteditable
  contentEditable: ["*"],
  contextmenu: ["*"],
  controls: ["audio", "video"],
  coords: ["area"],
  crossOrigin: ["audio", "img", "link", "script", "video"],
  csp: ["iframe"],
  data: ["object"],
  // ---- Original: datetime
  dateTime: ["del", "ins", "time"],
  decoding: ["img"],
  default: ["track"],
  defer: ["script"],
  dir: ["*"],
  dirname: ["input", "textarea"],
  disabled: [
    "button",
    "fieldset",
    "input",
    "optgroup",
    "option",
    "select",
    "textarea",
  ],
  download: ["a", "area"],
  draggable: ["*"],
  enctype: ["form"],
  // ---- Original: enterkeyhint
  enterKeyHint: ["textarea", "contenteditable"],
  for: ["label", "output"],
  form: [
    "button",
    "fieldset",
    "input",
    "label",
    "meter",
    "object",
    "output",
    "progress",
    "select",
    "textarea",
  ],
  // ---- Original: formaction
  formAction: ["input", "button"],
  // ---- Original: formenctype
  formEnctype: ["button", "input"],
  // ---- Original: formmethod
  formMethod: ["button", "input"],
  // ---- Original: formnovalidate
  formNoValidate: ["button", "input"],
  // ---- Original: formtarget
  formTarget: ["button", "input"],
  headers: ["td", "th"],
  height: ["canvas", "embed", "iframe", "img", "input", "object", "video"],
  hidden: ["*"],
  high: ["meter"],
  href: ["a", "area", "base", "link"],
  hreflang: ["a", "link"],
  // ---- Original: http-equiv
  httpEquiv: ["meta"],
  id: ["*"],
  integrity: ["link", "script"],
  // ---- Original: intrinsicsize
  intrinsicSize: ["img"],
  // ---- Original: inputmode
  inputMode: ["textarea", "contenteditable"],
  ismap: ["img"],
  // ---- Original: itemprop
  itemProp: ["*"],
  kind: ["track"],
  label: ["optgroup", "option", "track"],
  lang: ["*"],
  language: ["script"],
  loading: ["img", "iframe"],
  list: ["input"],
  loop: ["audio", "marquee", "video"],
  low: ["meter"],
  manifest: ["html"],
  max: ["input", "meter", "progress"],
  // ---- Original: maxlength
  maxLength: ["input", "textarea"],
  // ---- Original: minlength
  minLength: ["input", "textarea"],
  media: ["a", "area", "link", "source", "style"],
  method: ["form"],
  min: ["input", "meter"],
  multiple: ["input", "select"],
  muted: ["audio", "video"],
  name: [
    "button",
    "form",
    "fieldset",
    "iframe",
    "input",
    "object",
    "output",
    "select",
    "textarea",
    "map",
    "meta",
    "param",
  ],
  // ---- Original: novalidate
  noValidate: ["form"],
  open: ["details", "dialog"],
  optimum: ["meter"],
  pattern: ["input"],
  ping: ["a", "area"],
  placeholder: ["input", "textarea"],
  // ---- Original: playsinline
  playsInline: ["video"],
  poster: ["video"],
  preload: ["audio", "video"],
  readonly: ["input", "textarea"],
  // ---- Original: referrerpolicy
  referrerPolicy: ["a", "area", "iframe", "img", "link", "script"],
  rel: ["a", "area", "link"],
  required: ["input", "select", "textarea"],
  reversed: ["ol"],
  role: ["*"],
  rows: ["textarea"],
  // ---- Original: rowspan
  rowSpan: ["td", "th"],
  sandbox: ["iframe"],
  scope: ["th"],
  scoped: ["style"],
  selected: ["option"],
  shape: ["a", "area"],
  size: ["input", "select"],
  sizes: ["link", "img", "source"],
  slot: ["*"],
  span: ["col", "colgroup"],
  spellcheck: ["*"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video",
  ],
  srcdoc: ["iframe"],
  srclang: ["track"],
  srcset: ["img", "source"],
  start: ["ol"],
  step: ["input"],
  style: ["*"],
  summary: ["table"],
  // ---- Original: tabindex
  tabIndex: ["*"],
  target: ["a", "area", "base", "form"],
  title: ["*"],
  translate: ["*"],
  type: [
    "button",
    "input",
    "embed",
    "object",
    "ol",
    "script",
    "source",
    "style",
    "menu",
    "link",
  ],
  usemap: ["img", "input", "object"],
  value: [
    "button",
    "data",
    "input",
    "li",
    "meter",
    "option",
    "progress",
    "param",
    "text" /** extra for TextNode */,
  ],
  width: ["canvas", "embed", "iframe", "img", "input", "object", "video"],
  wrap: ["textarea"],
}

const elementAttributeMap = Object.entries(attributeMap).reduce<
  Record<string, string[]>
>((acc, [key, elements]) => {
  elements.forEach(element => {
    if (!acc[element]) acc[element] = []
    acc[element].push(key)
  })
  return acc
}, {})

/**
 * @brief Check if the attribute is internal, i.e., can be accessed as js property
 * @param tag
 * @param attribute
 * @returns true if the attribute is internal
 */
export function isInternalAttribute(tag: string, attribute: string): boolean {
  return (
    elementAttributeMap["*"].includes(attribute) ||
    elementAttributeMap[tag]?.includes(attribute)
  )
}
