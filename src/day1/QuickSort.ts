function qs(array: number[], low: number, high: number): void {
    if (low >= high) {
        return;
    }

    const pivot_index = partition(array, low, high)
    qs(array, low, pivot_index-1);
    qs(array, pivot_index + 1, high);
}

function partition(array: number[], low: number, high: number): number {
    const pivot = array[high];
    
    let index = low - 1;

    for (let i = low; i < high; ++i) {
        if (array[i] <= pivot) {
            index++;
            const temp = array[i];
            array[i] = array[index];
            array[index] = temp;
        }
    }
    index++;
    array[high] = array[index];
    array[index] = pivot;

    return index;
}


export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length-1)    
}