import Queue from "./Queue";

export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true;
    const queue: number[] = [source];

    do {
        const curr = queue.shift() as number;

        if (curr === needle) {
            break;
        }

        for (let i = 0; i < graph[curr].length; ++i) {
            const node_weight = graph[curr][i];
            if (node_weight === 0 || seen[i]) {
                continue;
            }
            seen[i] = true;
            prev[i] = curr;
            queue.push(i);
        }
    } while (queue.length);

    if (prev[needle] === -1) {
        return null;
    }

    let curr = needle;
    const out: number[] = [];

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    return [source].concat(out.reverse());
}
