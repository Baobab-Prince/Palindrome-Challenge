function palindrome(num) {
  //default case
  if (typeof num !== 'number' || num < 0) return 'Not valid';

  //reverse the number && check if it's the same as the original number
  //7997 => '7997' => ['7', '9', '9', '7'] => ['7', '9', '9', '7'] => '7997'
  return num.toString().split('').reverse().join('');
}
