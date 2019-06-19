// to understand concept this will help - ref: https://www.youtube.com/watch?v=7h1s2SojIRw
// dnt look coding technique in video - this below code is working fine when compare to video code
// understand only concept from video link

// array to sort
const array = [6, 5, 8, 9, 3, 10, 15, 12, 16];

function quicksort(array, left, right) {
  // Find the left and right side of the currently active pivot.
  left = left || 0;
  right = right || array.length - 1;

  const pivot = partitionHoare(array, left, right);

  if (left < pivot - 1) {
    quicksort(array, left, pivot - 1);
  }
  if (right > pivot) {
    quicksort(array, pivot, right);
  }
  return array;
}
quicksort(array) 
function partitionHoare(array, left, right) {
  // Calculate currently active pivot.
  const pivot = Math.floor((left + right) / 2 );

  // If left's value is smaller than or equal to right's value, meaning that the values are in the right place,
  // and the left item's value is smaller than the pivot, move the currently checked item
  // one step to the left, without swapping anything. The values are already in the right place.
  while (left <= right) {
    while (array[left] < array[pivot]) {
      left++;
    }
    while (array[right] > array[pivot]) {
      // The same as for left, however, the right value goes from right to left. This means that the 
      // current right's value has to go down one in order to check the next element's value.
      right--;
    }
    if (left <= right) {
      // Swap the elements until they are in the correct position.
      [array[left], array[right]] = [array[right], array[left]];
      left++;
      right--;
    }
  }
  // Return the left's value as the new pivot in the quicksort function.
  console.log(array)
  return left;
}