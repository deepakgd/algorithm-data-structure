// sorted array
// Exponential search involves two steps:  

// 1. Find range where element is present
// 2. Do Binary Search in above found range.


// How to find the range where element may be present? 
// The idea is to start with subarray size 1, compare its last element with x, then try size 2, then 4 and so on until last element of a subarray is not greater. 
// Once we find an index i (after repeated doubling of i), we know that the element must be present between i/2 and i (Why i/2? because we could not find a greater value in previous iteration)
// Given below are the implementations of above steps.

// Javascript program to find an element x
// in a sorted array using Exponential Search
  
// A recursive binary search
// function. It returns location
// of x in given array arr[l..r] is
// present, otherwise -1
function binarySearch(arr, l, r, x)
{
    if (r >= l)
    {
        let mid = l + (r - l) / 2;
  
        // If the element is present
        // at the middle itself
        if (arr[mid] == x)
            return mid;
  
        // If element is smaller than
        // mid, then it can only be
        // present n left subarray
        if (arr[mid] > x)
            return binarySearch(arr, l, mid - 1, x);
  
        // Else the element can only
        // be present in right subarray
        return binarySearch(arr, mid + 1, r, x);
    }
  
    // We reach here when element
    // is not present in array
    return -1;
}
 
 // Returns position of first
// occurrence of x in array
function exponentialSearch(arr, n, x)
{
      
    // If x is present at
    // first location itself
    if (arr[0] == x)
        return 0;
  
    // Find range for binary search
    // by repeated doubling
    let i = 1;
    while (i < n && arr[i] <= x)
        i = i * 2;
  
    // Call binary search for
    // the found range.
    return binarySearch(arr, i/2,
                       Math.min(i, n - 1), x);
}
     
 
// Driver Code
     
    let arr = [2, 3, 4, 10, 40];
    let n = arr.length;
    let x = 10;
    let result = exponentialSearch(arr, n, x);
    if (result == -1)
         document.write("Element is not present in array");
    else
        document.write("Element is present at index " + result);