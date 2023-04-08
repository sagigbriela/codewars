function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
};

newarray = [19, 5, 42, 2, 77]
console.log(sumTwoSmallestNumbers(newarray))