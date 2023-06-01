function binarySearchPosition(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  let mid = Math.floor((start+end)/2);
  while(start !== mid || end !== mid){
    if(target>numbers[mid]){
      start = mid+1;
      mid = Math.floor((start+end)/2);
    }else if(target<numbers[mid]){
      end = mid -1;
      mid = Math.floor(((start+end)/2));
    }else{
      return mid
    }
  }
}

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // Output: 0

console.log(binarySearchPosition([1, 2 ,5, 6, 7], 6)); // shouldprint 3
