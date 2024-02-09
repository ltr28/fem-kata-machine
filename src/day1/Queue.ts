type Node<T> = {
    value: T,
    next: Node<T> | undefined,
}

export default class Queue<T> {
    public length: number;
    public head: Node<T> | undefined;
    public tail: Node<T> | undefined;
    

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;
        if (!this.tail) {
            this.tail = node;
            this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
}
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        const head = this.head;
        this.head = head.next;

        if (this.length === 0) {
            this.tail = undefined;
        }
        return head.value;

}
    peek(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        return this.head.value;

}
}