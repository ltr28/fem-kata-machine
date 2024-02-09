export default class ArrayList<T> {
    public length: number;
    private capacity: number;
    private buffer: T[];

    constructor(capacity: number) {
        this.length = 0;
        this.capacity = capacity;
        this.buffer = new Array(capacity);
    }

    _double_capacity(): void {
        const old_buffer = this.buffer;
        this.capacity = this.capacity * 2;
        this.buffer = new Array(this.capacity);
        for (let i = 0; i < this.length; i++) {
            this.buffer[i + 1] = old_buffer[1];
        }
    }

    _increment_buffer(idx: number): void {
        for (let i = this.length; i > idx; i--) {
            this.buffer[i] = this.buffer[i - 1];
        }
    }

    _decrement_buffer(idx: number): void {
        for (let i = idx; i < this.length; i++) {
            this.buffer[i] = this.buffer[i + 1];
        }
    }

    prepend(item: T): void {
        this.insertAt(item, 0);
    }

    insertAt(item: T, idx: number): void {
        if (this.length === this.capacity) {
            this._double_capacity();
        }
        this._increment_buffer(idx);
        this.buffer[idx] = item;
        this.length++;
    }

    append(item: T): void {
        if (this.length === this.capacity) {
            this._double_capacity();
        }
        this.buffer[this.length] = item;
        this.length++;
    }

    remove(item: T): T | undefined {
        let idx: number | undefined;

        for (let i = 0; i < this.length; i++) {
            if (this.buffer[i] === item) {
                idx = i;
            }
        }

        if (idx === undefined) return undefined;

        this._decrement_buffer(idx);
        this.length--;
        return item;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) return undefined;
        return this.buffer[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) return undefined;
        const value = this.buffer[idx];
        this._decrement_buffer(idx);
        this.length--;
        return value;
    }
}
