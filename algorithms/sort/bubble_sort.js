/*
  Bubble Sort
  Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
  Example:
  First Pass:
  ( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.
  ( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4
  ( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2
  ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.

  Second Pass:
  ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 )
  ( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2
  ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
  ( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 )
  Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.

  Third Pass:
  ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
  ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
  ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
  ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
*/

function bubbleSort(array) {
  let swapped;
  do {
    // Set var swapped to false as default value.
    swapped = false;
    // Loop over array.
    for (let i = 0; i < array.length; i++) {
      // If the array has the current value and the next value
      // and the current value is bigger than the next value:
      // the two values need to be swapped (assuming you want the items
      // to be incrementally sorted).
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        // Set the current item to the next item, and the next item to the current item.
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        // Set swapped to true, meaning that the do-while loop will still run.
        swapped = true;
      }
    }
  } while(swapped);
  // Return the array with the swapped values.
  return array;
}