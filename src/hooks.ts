import { useEffect } from "../deps/preact_hooks.ts";

export function useAsyncEffect(
  effect: () => Promise<void>,
  deps?: Parameters<typeof useEffect>[1],
) {
  useEffect(() => {
    effect();
  }, deps);
}
