export function closest(element, handle) {
  let parentElement = element.parentElement;
  let documentElement = document.documentElement;
  handle(parentElement,element) !== false && parentElement !== documentElement && closest(parentElement, handle);
  return parentElement!==documentElement ? parentElement : null;
}
