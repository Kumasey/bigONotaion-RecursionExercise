// //Part 1

// O(n)
// O(1 * n) => O(n)
// O(1)
// O(n^3)
// O(4n) 
// O(1 * log(2n)) => O(log(2n))
// O(1 * log(2n))
// O(n^2)
// O(1)
// O()


// //Part 2

// //1.

// time = O(n)
// space complexity = O(1)

 
// //2.

// time = O(1) 
// space complexity = O(1)

// // 3. 

// time = O(n)
// space complexity = O(n)

// // 4.

// time = O(n)
// space complexity = o(1)


// // 5. 

// time = O(n^2)
// space complexity = O(n)



//Part 3
//1

function productOfArray(arr){
    if(arr.length === 0) return 1;
    
    return arr.shift() * productOfArray(arr)
}

//2

function contains(obj, val){
    for(var key in obj){
        if(obj[key] === val) return true;
        
    if(typeof obj[key] === 'object') 
    return contains(obj[key], val)
        
    }
    return false;
}

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