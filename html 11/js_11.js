let varName = " String lmao";
console.log("outcome: ", varName);

let number = 10;
if (number%2==0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}

for (let i = 1; i < 6; i++) {
    console.log("The value of i is: ", i);
}

let x = 5;
while (x > 0) {
    console.log("The value of x is: ", x);
    x--;
}

for (let i = 1; i <= 20; i++) {
    if (i%3==0 && i%5==0) {
        console.log("FizzBuzz");
    } else if (i%3==0) {
        console.log("Fizz");
    } else if (i%5==0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

for (let i = 2; i <= 20; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i + " is a prime number");
    } else {
        console.log(i + " is not a prime number");
    }
}

let arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log("Lenght of the array is: ", arr.length);
console.log("The array is: ", arr);
console.log('-------------------------------');
arr.pop();
console.log("Lenght of the array is: ", arr.length);
console.log("The array is: ", arr);
console.log('-------------------------------');