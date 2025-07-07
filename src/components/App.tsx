class Pair<T, U> {
  constructor(private first: T, private second: U) {}

  getFirst(): T {
    return this.first;
  }

  getSecond(): U {
    return this.second;
  }

  setFirst(value: T): void {
    this.first = value;
  }

  setSecond(value: U): void {
    this.second = value;
  }
}

/*----------------------------*/

function lastelement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[arr.length - 1] : undefined;
}
