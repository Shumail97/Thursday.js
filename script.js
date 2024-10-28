function sumAll(arr) {
    // Determine the minimum and maximum values
    const min = Math.min(arr[0], arr[1]);
    const max = Math.max(arr[0], arr[1]);
    
    let sum = 0;

    // Iterate from min to max and accumulate the sum
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum; // Return the total sum
}

// Example usage:
console.log(sumAll([1, 4])); 
console.log(sumAll([4, 1])); 
console.log(sumAll([5, 10])); 
