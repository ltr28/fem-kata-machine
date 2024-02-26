export default class MinHeap {
    public length: number;

    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data.push(value);
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number | undefined {

        if (this.length === 0) {
            return undefined;
        }

        const value = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return value;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);

        return value;

    }

    private heapifyDown(idx: number): void {
        const l_idx = this.leftChild(idx);
        const r_idx = this.rightChild(idx);

        if (idx >= this.length || l_idx >= this.length) {
            return;
        }

        const l_value = this.data[l_idx];
        const r_value = this.data[r_idx];
        const value = this.data[idx];

        if (l_value > r_value && value > r_value) {
            this.data[idx] = r_value;
            this.data[r_idx] = value;
            this.heapifyDown(r_idx);
        } else if (r_value > l_value && value > l_value) {
            this.data[idx] = l_value;
            this.data[l_idx] = value;
            this.heapifyDown(l_idx);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const value = this.data[idx];
        const p_idx = this.parent(idx)
        const p_value = this.data[p_idx];

        if (p_value > value) {
            this.data[idx] = p_value;
            this.data[p_idx] = value;
            this.heapifyUp(p_idx);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return 2 * idx + 1;
    }

    private rightChild(idx: number): number {
        return 2 * idx + 2;
    }
}
