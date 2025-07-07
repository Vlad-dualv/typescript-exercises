function identity<T>(params: T): T {
  return params;
}

/*----------------------------*/

function getFirstElement<T>(params: T[]): T | undefined {
  return params.length > 0 ? params[0] : undefined;
}

/*----------------------------*/

interface Container<T> {
  getValue(): T;
  setValue(value: T): void;
}
