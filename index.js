function hasTargetSum(array, target) {
  // Write your algorithm here
  // iterate over the array of numbers
  for(let i=0;i<array.length;i++){

    for(let j=i+1;j<array.length;j++){
      // get sum of current array element and the element after it
      let sum=(array[i]+array[j])
      // compare if the sum is equal to the target
      if(sum === target){
        console.log(array[i]+array[j])
        //if the sum and target are equal return true
        return true
      }
  
    }
   
  }
  
  return false
}

/* 
  Write the Big O time complexity of your function here
  0(n*2)
*/

/* 
  iterate over the array of numbers
  take the first element and add it to the element after it 
  compare the sum to the target
  if the sum is equal to the target
       return true
if we reach the end of the array, return false
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  the function iterates over each element of the array
  gets the sum of current element and element after it
  compares the sum to the target
  if the sum is equal to the target return true otherwise return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5,2,3,4,5], 10));
}

module.exports = hasTargetSum;
