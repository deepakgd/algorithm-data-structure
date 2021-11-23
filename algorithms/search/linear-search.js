// Search item in an Array (not sorted array)
// https://www.geeksforgeeks.org/linear-search/
// Linear Search
// Start from the leftmost element of arr[] and one by one compare x with each element of arr[]
// If x matches with an element, return the index.
// If x doesn’t match with any of elements, return -1.

// simple words loop and compare each element to find search item


function linearSearch(sourceData, searchItem){
    let resultIndex = -1;
    for(let i = 0; i < sourceData.length; i++){
        if(searchItem === sourceData[i]) return  resultIndex = i;
    }

    return resultIndex;
}

console.log(linearSearch([10, 20, 80, 30, 60, 50, 110, 100, 130, 170], 110))

/* The time complexity of the above algorithm is O(n).  */

