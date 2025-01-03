function nextPalindrome(num) {
  // Function to check if a number is a palindrome
  function isPalindrome(n) {
    const str = n.toString();
    return str === str.split('').reverse().join('');
  }

  // Increment the number and check if it's a palindrome
  let nextNum = parseInt(num) + 1;  // Start checking from the next number
  while (!isPalindrome(nextNum)) {
    nextNum++;
  }

  return nextNum;
}

const input = prompt("Enter a palindrome number"); 
alert(nextPalindrome(input));
