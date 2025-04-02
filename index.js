function hasTargetSum(array, target) {
  const seenNumbers = new Set();
  
  for (const number of array) {
    const complement = target - number;
    
    if (seenNumbers.has(complement)) {
      return true;
    }
    
    seenNumbers.add(number);
  }
  
  return false;
}

/* 
  Big O time complexity: O(n)
  - We traverse the array once (n elements)
  - Set operations (has and add) are O(1) on average
  - Overall linear time complexity
*/

/* 
  Pseudocode:
  1. Create an empty Set to store numbers we've seen
  2. For each number in the input array:
     a. Calculate the complement (target - current number)
     b. Check if the complement exists in our Set
     c. If found, return true immediately
     d. If not found, add current number to the Set
  3. If loop completes without finding a pair, return false
*/

/*
  Explanation:
  This solution efficiently checks for a pair of numbers that sum to the target
  by using a Set to remember numbers we've already seen. For each number, we
  calculate what other number we'd need to reach the target (the complement).
  If we've already seen that complement earlier in the array, we know a valid
  pair exists. This approach only requires a single pass through the array,
  making it optimal with O(n) time complexity. The space complexity is O(n)
  in the worst case as we might store all numbers in the Set.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  // Additional test cases
  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 0, 1], 0));

  console.log("");
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 10));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 5], 10));
}

module.exports = hasTargetSum;