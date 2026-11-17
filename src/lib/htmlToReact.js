import { createElement, Fragment } from "react";

const VOID_ELEMENTS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input", "link",
  "meta", "param", "source", "track", "wbr"
]);

const BOOLEAN_ATTRIBUTES = new Set([
  "allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls",
  "default", "defer", "disabled", "formnovalidate", "hidden", "inert", "ismap",
  "itemscope", "loop", "multiple", "muted", "nomodule", "novalidate", "open",
  "playsinline", "readonly", "required", "reversed", "selected"
]);

const ATTRIBUTE_NAMES = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  crossorigin: "crossOrigin",
  fetchpriority: "fetchPriority",
  colspan: "colSpan",
  rowspan: "rowSpan",
  maxlength: "maxLength",
  minlength: "minLength",
  autocomplete: "autoComplete",
  contenteditable: "contentEditable",
  readonly: "readOnly",
  srcset: "srcSet",
  enctype: "encType",
  charset: "charSet",
  "http-equiv": "httpEquiv",
  usemap: "useMap",
  viewbox: "viewBox",
  preserveaspectratio: "preserveAspectRatio",
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "fill-rule": "fillRule",
  "clip-rule": "clipRule",
  "xlink:href": "xlinkHref"
};

function styleToObject(element) {
  const result = {};
  for (let index = 0; index < element.style.length; index += 1) {
    const property = element.style[index];
    const reactProperty = property.startsWith("--")
      ? property
      : property.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    result[reactProperty] = element.style.getPropertyValue(property).trim();
  }
  return result;
}

function toReactNode(node, key) {
  if (node.nodeType === Node.TEXT_NODE) return node.nodeValue;
  if (node.nodeType !== Node.ELEMENT_NODE) return null;

  const tagName = node.localName;
  const props = { key };

  for (const attribute of node.attributes) {
    const name = attribute.name.toLowerCase();
    if (name === "style") {
      props.style = styleToObject(node);
    } else if (BOOLEAN_ATTRIBUTES.has(name)) {
      props[ATTRIBUTE_NAMES[name] || name] = true;
    } else {
      props[ATTRIBUTE_NAMES[name] || attribute.name] = attribute.value;
    }
  }

  const children = Array.from(node.childNodes, (child, index) => toReactNode(child, index))
    .filter((child) => child !== null);

  if (VOID_ELEMENTS.has(tagName)) return createElement(tagName, props);
  return createElement(tagName, props, ...children);
}

export function htmlToReact(markup) {
  const template = document.createElement("template");
  template.innerHTML = markup;
  const children = Array.from(template.content.childNodes, (node, index) => toReactNode(node, index))
    .filter((child) => child !== null);
  return createElement(Fragment, null, ...children);
}
