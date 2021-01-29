class Queue {
  #queue;

  constructor(...items) {
    this.#queue = [...items];
  }

  get size() {
    return this.#queue.length;
  }

  enqueue(...items) {
    this.#queue = [...this.#queue, ...items];
  }

  dequeue() {
    return this.#queue.shift();
  }

  items() {
    return [...this.#queue];
  }

  isEmpty() {
    return this.size() === 0;
  }
}

module.exports = {
  Queue,
};
