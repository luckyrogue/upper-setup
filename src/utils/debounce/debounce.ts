import { TDebounce } from "./types.ts";

export const debounce: TDebounce = (func, wait) => {
  let timeout: ReturnType<typeof setTimeout>;
  return function executedFunction(...args: Parameters<typeof func>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
