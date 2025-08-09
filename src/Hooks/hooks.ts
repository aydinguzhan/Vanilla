type Setter<T> = (updater: T | ((prev: T) => T)) => void;
type State<T> = { value: T };

export function useState<T>(initial: T): [State<T>, Setter<T>] {
  let state: State<T> = { value: initial };

  const setState: Setter<T> = (uptader) => {
    if (typeof uptader === "function") {
      const fn = uptader as (prev: T) => T;
      state.value = fn(state.value);
    } else {
      state.value = uptader as T;
    }
  };

  return [state, setState];
}

export class Vanilla {
  private hook = [];
  private currentIndex = 0;

  useState<T>(initial: T): [State<T>, Setter<T>] {
    let state: State<T> = { value: initial };

    const setState: Setter<T> = (uptader) => {
      if (typeof uptader === "function") {
        const fn = uptader as (prev: T) => T;
        state.value = fn(state.value);
      } else {
        state.value = uptader as T;
      }
    };

    return [state, setState];
  }
}
