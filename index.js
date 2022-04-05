class Stack {
  #list = [];

  push(item) {
    this.#list.push(item);
  }

  pop() {
    const list = this.#list;
    return this.length ? list.pop() : null;
  }

  peek() {
    return this.#list.at(-1);
  }

  get size() {
    return this.#list.length;
  }
}

class Queue {
  #list = [];

  enqueue(item) {
    this.#list.push(item);
  }

  dequeue() {
    return this.#list.length ? this.#list.shift() : null;
  }

  hasNext() {
    return !!this.#list.length;
  }
}
