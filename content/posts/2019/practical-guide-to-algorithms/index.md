---
title: "Practical Guide to Algorithms"
date: "2019-10-07"
description: "My notes from the Frontend Masters course."
tags: ["Notes", "CS"]
---

## Algorithm

- Steps that you take to solve a problem
- Why care? It's an engineers job to solve problems
- Identify pattern -> apply correct algorithm -> solve problem in optimal way

### Time complexity

- How we estimate the speed of an algorithm
- How many operations are expected to solve the problem, in respect to input size
- Pessimistic, assume worst case conditions
- "As the input grows, it will grow in this proportion"

### Common run times from fast to very slow

- Constant 0(1)
- Logarithmic 0(logN)
- Linear 0(n)
- Quadratic 0(n2)
- Exponential 0(k^n)
- Logarithmic

> #### Logarithmic versus exponential
>
> In logarithmic time, as input increases, number of operations decreases by a fraction. Time complexity increases by a fraction, thus it grows slowly. This means logarithmic is often better than linear with large datasets.

### Space complexity

- How much memory is used
- Works in similar way to time, but on the question of how much more space are we taking up

## Optimization with Caching

- Keeping track of something that you've already seen
- Save it to an object or array.
- Caching trades time complexity for space complexity
- Important when the callback function is expensive, and usually the right tradeoff in a browser environment

### Implementing a cache to keep track of already seen values in linear time

```js
const uniqSort = arr => {
  const cache = {}
  const unique = []

  arr.map(num => {
    if (!cache[num]) {
      cache[num] = true
      unique.push(num)
    }
  })

  return unique.sort((a, b) => a - b)
}

uniqSort([4, 2, 2, 2, 3, 2, 2, 2, 2]) // => [2,3,4]
```

### Memoization

- When you cache the value that a function returns
- Factorials are a common type of problem to solve using memoization, because you do a lot of the same calculations over and over
- Rather than recalculating the result, memoize it

> #### Memoization and caching
>
> Memoization is just a type of caching. If you are caching the result of a function, then it's called memoization.

### Using memoization to save the results of a calculation

```js
const times10 = n => {
  return n * 10
}

const cache = {}

const memoTimes10 = n => {
  if (n in cache) {
    // fetch from cache
    return cache[n]
  } else {
    // perform calculation
    const result = times10(n)
    cache[n] = result
    return result
  }
}
```

### Using memoization and closure to solve the same problem

```js
const memoizedClosureTimes10 = () => {
  // Our cache is not in global scope
  // And is NOT RESET every time we call the function
  let cache = {}

  return n => {
    if (n in cache) {
      // return from cache
      return cache[n]
    } else {
      // calculate
      let result = n * 10
      // save calculation to cache
      cache[n] = result
      return result
    }
  }
}

const memoClosureTimes10 = memoizedClosureTimes10()

memoClosureTimes10(9) // calculated
memoClosureTimes10(10) // calculated
memoClosureTimes10(9) // cached result
```

- Cleans up global scope and scopes cache inside of function
- Uses closure to return a function that can be called later
- Inside of closure, we retain access to variables that were called before
- This lets us remember prior values
- Important concept: returning a function from a function that can be called later

### Writing a generic memoize function

```js
// Possible callbacks
const times10 = n => n * 10
const times20 = n => n * 20

const genericMemoize = cb => {
  let cache = {}

  return n => {
    if (n in cache) {
      // Fetch from cache
      return cache[n]
    } else {
      // Calculate result
      let result = cb(n)
      cache[n] = result
      return result
    }
  }
}

const memoizeTimes20 = genericMemoize(times20)

memoizeTimes20(8) // calculated
memoizeTimes20(9) // calculated
memoizeTimes20(8) // cached
```

- Use closure again to return a function that returns an arbitrary callback function

## Recursion

- When a function calls itself, until it doesn't
- An elegant solution to keep code DRY
- Recursion can always be implemented as a loop, but it's often simpler to use recursion

### Recursion in 4 steps

1. Identify base case (when it is you want your loop to stop)
2. Identify recursive case (the work that you want to do)
3. Return where appropriate
4. Write procedures for each case that bring you closer to the base case (otherwise infinite loop)

### Recursion patterns

- Wrapper function
- Accumulator function

#### Divide and conquer

- A recursive technique where we:
  - Take large problem
  - Divide into sub-problems and do work that brings us closer to the base case

## Search Algorithms

### Linear search

- Search for a value in an array by checking each value in order
- Linear time

#### Implementing linear search

```js
function linearSearch(list, item) {
  let index = -1

  list.map((listItem, i) => {
    if (listItem === item) {
      index = i
    }
  })

  return index
}

linearSearch([1, 2, 3, 4, 5, 6], 5) // returns 4
```

- Simply loop through a list, and look for the searched value

### Binary search

- Search for a value in a sorted array by cutting the side of the search area in half
- Logarithmic time

#### Implementing binary search

```js
function binarySearch(list, item) {
  let min = 0
  let max = list.length - 1
  let guess

  while (min <= max) {
    guess = Math.floor((min + max) / 2)

    if (list[guess] === item) {
      return guess
    } else {
      if (list[guess] < item) {
        min = guess + 1
      } else {
        max = guess - 1
      }
    }
  }
}

binarySearch([2, 6, 7, 90, 103], 90) // returns 3
```

- Search for a value in a sorted array, by cutting the search area in half
- Binary search is important because it takes something linear (searching a single value) and turns it into logarithmic time
- It's logarithmic because the work that we have to do (dataset) is cut in half each time
- List being searched _must be sorted_ for binary search

#### Binary search steps

1. Break sorted array in half
2. Is value the value that we're looking for `<` or `>` current location?
3. Repeat

> #### Using binary search
>
> If you have an interview question involving a sorted array, binary search is usually the way to go. If it's not sorted, there are other searching algorithms.

## Sorting Algorithms

- Sorting algorithms must look at every value, can never be less than linear time
- Two main types of sorts
  - Naive sorts
  - Divide and conquer sorts

### Naive sorts

- Keep looping and comparing values until list is sorted
- Two loops involved == quadratic time
- Examples:
  - Bubble sort
  - Insertion sort
  - Selection sort

### Divide and conquer sorts

- Recursively divide list / smaller parts of list until entire list is sorted
- Recursive division == logarithmic time
- Examples:
  - Merge sort
  - Quicksort

### Implementing non-optimized bubble sort

```js
const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]

function swap(array, i, j) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

function bubbleSortBasic(array) {
  // Counts are only for demonstration
  let countOuter = 0
  let countInner = 0
  let countSwap = 0

  for (let i = 0; i < array.length; i++) {
    countOuter++
    for (let j = 0; j < array.length; j++) {
      countInner++
      if (array[j - 1] > array[j]) {
        countSwap++
        swap(array, j - 1, j)
      }
    }
  }
}

bubbleSortBasic(arrayRandom) // =>
// countOuter = 10
// countInner = 100
// swaps = 21
```

- Loop through array
- Compare adjacent indices
- Swap the greater value to the end

### Implementing optimized bubble sort

```js
const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]

function swap(array, i, j) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

function bubbleSort(array) {
  let countOuter = 0
  let countInner = 0
  let countSwap = 0

  let swapped

  do {
    countOuter++
    swapped = false
    for (let i = 0; i < array.length; i++) {
      countInner++
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        countSwap++
        swap(array, i, i + 1)
        swapped = true
      }
    }
  } while (swapped)
}

bubbleSort(arrayRandom) // =>
// countOuter = 9
// countInner = 90
// countSwap = 21
```

- If there's an iteration where we don't have to make any swaps, that's a sign that array is already sorted
- Can short circuit extra looping and return that array

> #### On using bubble sort
>
> If you're dealing with a mostly sorted list, and you've optimized the algorithm to track arrays that are already sorted to begin with, bubble sort becomes an OK choice despite being quadratic time. When dealing with a reversed list, it is terrible.

### Implementing merge sort

```js
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2) // get the middle of the array, rounded down
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)

  return merge(sortedLeft, sortedRight)
}

// Compare the arrays item by item and return the concatenated result
function merge(left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
mergeSort(list) // => [1, 2, 2, 3, 3, 5, 6, 7, 8]
```

- Start with unsorted list
- Divide until it's sorted (a list of one)
- Merge each sorted list (this means you don't have to compare every value in a quadratic way)
- The merge step (the conquer part of divide and conquer) is linear
- Merge step:

  - Compare first index of left array against first index of right array
  - Push lower value to an empty array
  - Shift the array with the lower value
  - Repeat until both arrays are empty

> #### On using merge sort
>
> Merge sort is one of the best sorts. If you need to sort something in an interview, merge sort is probably what they are looking for. However a good strategy is to start with the simplest answer, reference the more complicated answer, but not necessarily jump into influencing merge sort. Acknowledge that you've heard of it, but don't necessarily jump to implement it. "Is it alright to start with bubble sort? It is quadratic time, while merge sort is logarithmic..."

## Greedy Algorithms

- Always take the locally optimal solution
- Without considering the big picture
- Given a decision, do the one that looks like the best decision at that time, without considering the big picture
- Always making the locally optimal choice does **_not_** always give the optimal solution

> ### Using greedy algorithms
>
> Can be a choice when the dataset is so large that you can't think of all scenarios. It's computationally too much and it's better to have **_a_** solution than none at all.

### Problems with using a greedy approach

- Can seem like it's correct
- But it's hard to prove that it's correct
- Have to then ask, "Is locally optimal solution actually the globally optimal solution

### Implementing a brute force algorithm

- In an interview setting could go with a brute force solution that is correct, and then optimize later

## Dynamic Programming

- Optimization technique
- Cache values when doing work inside of sub-problems
- If you have a solution that you can cache, that's dynamic programming
- Different ways of caching:
  - Top down, recursive approach
  - Bottom up, iterative technique

## On How to Learn and Improve

- Talk about how code is executing. Reason about it. Don't just run and see what happens. Be able to reason through what you are writing
- In a typical interview environment, you **_can't_** run the code. Need to learn how to debug, run the code in your head
