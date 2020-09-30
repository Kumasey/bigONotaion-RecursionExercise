Big O Notation and Recursion Exercises
Big O Notation and Recursion Exercises


Part 1


Simplify the following big O expressions as much as possible:

O(n + 10)
O(100 * n)
O(25)
O(n^2 + n^3)
O(n + n + n + n)
O(1000 * log(n) + n)
O(1000 * n * log(n) + n)
O(2^n + n^2)
O(5 + 3 + 1)
O(n + n^(1/2) + n^2 + n * log(n)^10)

Part 2

Determine the time and space complexities for each of the following functions. If you're not sure what these functions do, copy and paste them into the console and experiment with different inputs!

// 1.


function logUpTo(n) {

    for (var i = 1; i <= n; i++) {

        console.log(i);

    }

}


// 2. 


function logAtMost10(n) {

    for (var i = 1; i <= Math.min(n, 10); i++) {

        console.log(i);

    }

}


// 3. 


function logAtLeast10(n) {

    for (var i = 1; i <= Math.max(n, 10); i++) {

        console.log(i);

    }

}


// 4.


function onlyElementsAtEvenIndex(array) {

    var newArray = Array(Math.ceil(array.length / 2));

    for (var i = 0; i < array.length; i++) {

        if (i % 2 === 0) {

            newArray[i / 2] = array[i];

        }

    }

    return newArray;

}


// 5. 


function subtotals(array) {

    var subtotalArray = Array(array.length);

    for (var i = 0; i < array.length; i++) {

        var subtotal = 0;

        for (var j = 0; j <= i; j++) {

            subtotal += array[j];

        }

        subtotalArray[i] = subtotal;

    }

    return subtotalArray;

}

Part 3

For this exercise, you MUST use recursion to solve these problems. 
Some of them can be done without, but it is essential that you practice recursion and make the tests pass.

1. Write a function called productOfArray which takes in an array of numbers and returns the product of them all

productOfArray([1,2,3]) // 6

productOfArray([1,2,3,10]) // 60

2. Write a function called contains that searches for a value in a nested object. 
It returns true if the object contains that value.

var nestedObject = {

    data: {

        info: {

            stuff: {

                thing: {

                    moreStuff: {

                        magicNumber: 44

                    }

                }

            }

        }

    }

}


contains(nestedObject, 44) // true

contains(nestedObject, "foo") // false



