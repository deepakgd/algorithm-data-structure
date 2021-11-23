// Binary Search: Search a sorted array by repeatedly dividing the search interval in half.
// Begin with an interval covering the whole array. 
// If the value of the search key is less than the item in the middle of the interval, 
// narrow the interval to the lower half. Otherwise, narrow it to the upper half. 
// Repeatedly check until the value is found or the interval is empty.

// https://www.geeksforgeeks.org/binary-search/
// Compare x with the middle element.
// If x matches with the middle element, we return the mid index.
// Else If x is greater than the mid element, then x can only lie in the right half subarray after the mid element. So we recur for the right half.
// Else (x is smaller) recur for the left half.

function binarySearch(sourceData, low, high, searchItem){
    if(high >= low){
        let middleIndex = low + Math.floor((high-low)/ 2);
        let middleItem = sourceData[middleIndex];

        // check middle item is searchitem
        if(searchItem === middleItem) return middleIndex;

        // check search item is less than middle item, then search left hand side of source data
        if(searchItem < middleItem) return binarySearch(sourceData, low, middleIndex - 1, searchItem);

        // otherwise then search item will be right hand side of source data
        return binarySearch(sourceData, middleIndex + 1, high, searchItem);

    }
    // no result found
    return -1;
}

let s = [22,33,44,77,99, 101, 108, 114];
 
console.log(binarySearch(s, 0, s.length - 1, 114))