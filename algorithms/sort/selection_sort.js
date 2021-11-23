/*
arr[] = 64 25 12 22 11

// Find the minimum element in arr[0...4]
// and place it at beginning
11 25 12 22 64

// Find the minimum element in arr[1...4]
// and place it at beginning of arr[1...4]
11 12 25 22 64

// Find the minimum element in arr[2...4]
// and place it at beginning of arr[2...4]
11 12 22 25 64

// Find the minimum element in arr[3...4]
// and place it at beginning of arr[3...4]
11 12 22 25 64 

*/

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    // Set default active minimum to current index.
    let min = i;
    // Loop to array from the current value.
    for (let j = i + 1; j < array.length; j++) {
      // If you find an item smaller than the current active minimum, 
      // make the new item the new active minimum.
      if (array[j] < array[min]) {
        min = j;
      }
      // Keep on looping until you've looped over all the items in the array
      // in order to find values smaller than the current active minimum.
    }
    // If the current index isn't equal to the active minimum value's index anymore
    // swap these two elements.
    if (i !== min) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }
  return array;
}
