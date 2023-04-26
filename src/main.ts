// Complexity: O(n + k)
const anagram = (str1: string, str2: string): boolean => {
  // Not the same length, not an anagram!
  if (str1.length !== str2.length) return false;
  // Same string, anagram!
  if (str1 === str2) return true;

  // Create a memo to store the quantity of each char (DP)
  const memo: Record<string, number> = {};

  // Iterate over the first string and store the quantity of each char
  for (const char of str1.toLowerCase())
    !memo[char] ? (memo[char] = 1) : memo[char]++;

  // Iterate over the second string and check if the char is in the memo
  for (const char of str2.toLowerCase()) {
    if (!memo[char]) return false;
    memo[char]--;
  }

  // If we get here, they're anagrams
  return true;
};

// Complexity: O(n)
const palyndrome = (str: string): boolean => {
  // Reverse string without split/join
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  // Compare the string to its reverse
  if (str === reverse) return true;

  // If we get here, it's not a palyndrome
  return false;
};

// Complexity: O(n)
const pyramid = (size: number): string => {
  let i = 1,
    finalString = '\n';

  do {
    // Spacing (size - quantity of ascii).
    const str = ' '.repeat(size - i);
    // Quantity of ascii chars (always a odd and - 1 to begin with just one).
    const str2 = '#'.repeat(i * 2 - 1);
    // Append to our initial string to create an final result.
    finalString += `${str}${str2}${str}\n`;
    // Sum up our indicator.
    i++;
  } while (size >= i);

  return finalString;
};

// Complexity: O(n)
const beeramid = (bonus: number, price: number): number => {
  // Floor the total of cans we can buy using bitwise.
  const totalCans = ~~(bonus / price);

  let level = 0,
    beer = 0;

  while (beer <= totalCans) {
    level++;
    // The beer cans are the square of the level.
    beer += level ** 2;
  }

  // Level - 1 because we need to return the last level.
  const final = level - 1;

  // If we can't buy any beer, return 0.
  if (final < 0) return 0;

  return final;
};

// Alternating sort
// Given an array of integers e, arrange the elements in it so that:

// e[0] ≤ e[1] ≥ e[2] ≤ e[3] ≥ e[4] ...

// The elements in e need not be unique (they may be repeated)

// For example:
// 5 2 1 7 9 8 ->  1 ≤ 7 ≥ 5 ≤ 9 ≥ 2 ≤ 8  or  2 ≤ 5 ≥ 1 ≤ 9 ≥ 7 ≤ 8 or ...
// 1 2 3 4 5 6 ->  1 ≤ 3 ≥ 2 ≤ 5 ≥ 4 ≤ 6  or ...
// -2 3 3 -3   ->  3 ≤ 3 ≥ -3 ≤ -2  or  -2 ≤ 3 ≥ -3 ≤ 3 or ...

// Complexity: O(n)
// Space: O(1)
const alternateSort = (arr: number[]): number[] => {
  // Swap variable
  let swap = 0;

  // Iterate over the array
  for (let i = 0; i < arr.length; i++) {
    // If we are in the last element, break the loop.
    if (!arr[i + 1]) break;

    // If the index is odd, we need to check if the next element is greater than the current.
    if (i % 2 != 0) {
      if (arr[i] <= arr[i + 1]) {
        continue;
      }
    } else {
      // Otherwise we need to check if the next element is less than the current.
      if (arr[i] >= arr[i + 1]) {
        // If it is, swap the elements.
        swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
      }
    }
  }

  return arr;
};

export { anagram, palyndrome, pyramid, beeramid, alternateSort };
