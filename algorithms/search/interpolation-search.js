// The Interpolation Search is an improvement over Binary Search for instances, where the values in a sorted array are uniformly distributed. Binary Search always goes to the middle element to check. On the other hand, interpolation search may go to different locations according to the value of the key being searched. For example, if the value of the key is closer to the last element, interpolation search is likely to start search toward the end side.
// To find the position to be searched, it uses following formula. 

// // The idea of formula is to return higher value of pos
// // when element to be searched is closer to arr[hi]. And
// // smaller value when closer to arr[lo]
// pos = lo + [ (x-arr[lo])*(hi-lo) / (arr[hi]-arr[Lo]) ]

// arr[] ==> Array where elements need to be searched
// x     ==> Element to be searched
// lo    ==> Starting index in arr[]
// hi    ==> Ending index in arr[]

// Algorithm 
// Rest of the Interpolation algorithm is the same except the above partition logic. 
// Step1: In a loop, calculate the value of “pos” using the probe position formula. 
// Step2: If it is a match, return the index of the item, and exit. 
// Step3: If the item is less than arr[pos], calculate the probe position of the left sub-array. Otherwise calculate the same in the right sub-array. 
// Step4: Repeat until a match is found or the sub-array reduces to zero.
// Below is the implementation of algorithm. 


// Javascript program to implement Interpolation Search
 
// If x is present in arr[0..n-1], then returns
// index of it, else returns -1.
 
function interpolationSearch(arr, lo, hi, x){
    let pos;
     
    // Since array is sorted, an element present
    // in array must be in range defined by corner
     
    if (lo <= hi && x >= arr[lo] && x <= arr[hi]) {
       
      // Probing the position with keeping
      // uniform distribution in mind.
      pos = lo + Math.floor(((hi - lo) / (arr[hi] - arr[lo])) * (x - arr[lo]));;
       
      // Condition of target found
          if (arr[pos] == x){
            return pos;
          }
    
          // If x is larger, x is in right sub array
          if (arr[pos] < x){
            return interpolationSearch(arr, pos + 1, hi, x);
          }
    
          // If x is smaller, x is in left sub array
          if (arr[pos] > x){
            return interpolationSearch(arr, lo, pos - 1, x);
          }
      }
      return -1;
  }
   
  // Driver Code
  let arr = [10, 12, 13, 16, 18, 19, 20, 21,
             22, 23, 24, 33, 35, 42, 47];
   
  let n = arr.length;
   
  // Element to be searched
  let x = 18
  let index = interpolationSearch(arr, 0, n - 1, x);
   
  // If element was found
  if (index != -1){
     document.write(`Element found at index ${index}`)
  }else{
     document.write("Element not found");
  }
   