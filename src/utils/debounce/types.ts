export type TDebounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number,
) => (...args: Parameters<T>) => void;
