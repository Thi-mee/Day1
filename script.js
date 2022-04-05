let numberArray = [1, 3, 5, 7, 8];


function sumOfArray(array){
  this.numberArray = numberArray
  let length = this.numberArray.length;
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum = sum + array[i];
  }
  return sum
}

sumOfArray(numberArray)