export function isWithinIgnoredSelector(rule: any, ignoreSelectors: string[] = []): boolean {
  if (!ignoreSelectors.length) return false;
  
  let parent = rule.parent;
  while (parent) {
    if (parent.selector && ignoreSelectors.some(selector => parent.selector.includes(selector))) {
      return true;
    }
    parent = parent.parent;
  }
  return false;
}