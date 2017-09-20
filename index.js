// Code your solution here!

function printString(string){
  console.log(string[0])
  if (string.length > 1){
    let newString = string.substring(1, string.length)
    printString(newString)
  } else {
    return true
  }
}


function reverseString(string){
  let word = "";
  word += string[string.length -1]
  if (string.length > 1){
    word += reverseString(string.slice(0, -1))
  }
  return word
}

function isPalindrome(word){
  let reversed = reverseString(word);
    if (reversed === word){
      return true
    } else {
      return false
    }
}

function addUpTo(array, index){
  let total = 0;
  let arr = array.slice(0, index + 1)
  total += arr[arr.length -1];
    if (arr.length > 1){
      total += addUpTo(arr.slice(0, -1), index)
    }
  return total
}

function maxOf(array){
  let last = array[array.length -1];
  let second = array[array.length -2];
  let largest = array[array.length -1]
  debugger
    if (last < second){
      debugger
      largest = second
    }
    if (array.length > 1){
      maxOf(array.slice(0, -1))
    }
  return largest
}


function maxOf(array){
  if (array.length === 1){
    return array[0]
  }
  if (array[0] < array[1]){
    array.shift()
    return maxOf(array)
  } else if (array[0] > array[1]) {
    array.splice(1,1)
    return maxOf(array)
  }
}


function includesNumber(array, n){
  let matches;
  if (array[array.length -1] == n){
    return matches = true
  }
    if (array.length > 1){
      return includesNumber(array.slice(0, -1), n)
    }
    return !!matches
}
