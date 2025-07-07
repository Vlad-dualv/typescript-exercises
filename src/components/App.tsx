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

/*----------------------------*/

class Queue<T extends { id: any }> {
  private items: T[] = [];
  enqueue(item: T): void {
    this.items.push(item);
  }
  dequeue(): T | undefined {
    return this.items.shift();
  }
  peek(): T | undefined {
    return this.items.length > 0 ? this.items[0] : undefined;
  }

  get size(): number {
    return this.items.length;
  }
}

/*----------------------------*/
