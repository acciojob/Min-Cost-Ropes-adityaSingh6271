function mincost(arr)
const minHeap = new MinHeap();

    // Insert all ropes into the min heap
    for (const rope of arr) {
        minHeap.push(rope);
    }

    let totalCost = 0;

    // Connect ropes until there is only one rope left in the heap
    while (minHeap.size() > 1) {
        const firstRope = minHeap.pop();
        const secondRope = minHeap.pop();

        const currentCost = firstRope + secondRope;
        totalCost += currentCost;

        // Put the connected rope back into the heap
        minHeap.push(currentCost);
    }

    return totalCost;
}

module.exports=mincost;
