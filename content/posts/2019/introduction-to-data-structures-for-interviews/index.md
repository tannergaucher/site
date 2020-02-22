---
title: "Introduction to Data Structures for Interviews"
date: "2019-12-10"
description: "My notes from the Frontend Masters course"
tags: ["Notes", "CS"]
---

## On Application Versus Implementation

- Be able to implement them, but more importantly, be able to apply the correct ones to solve problems / interview questions

## How to Prepare Effectively

- Don't just memorize
- Find themes but don't jump to conclusions
- Practice with a timer. Being able to solve things quickly matters
- Actually practice. Reading doesn't count

## Stacks and Queues

- Ordered data structures that have opinions about how things can be inserted and removed

### Stack

- Last in, first out
- Push and pop methods

### Queue

- First in, first out
- Enqueue and dequeue methods

### Pros

- Fast operations

### Implementation of a stack

```js
class Stack {
  constructor() {
    this._storage = {}
    this._length = 0
  }

  push(value) {
    this._storage[this._length] = value
    this.length++
  }

  pop() {
    if (this.length) {
      const lastValue = this._storage[this._length - 1]
      delete this._storage[lastValue]
      this._length--

      return lastValue
    }
  }

  peek() {
    if (this._length) {
      return this._storage[this._length - 1]
    }
  }
}
```

### Implementation of a queue

```js
class Queue {
  constructor() {
    this._storage = {}
    this._length = 0
    this._headIndex = 0
  }

  // Enqueues a new value at the end of the queue.
  enqueue(value) {
    const lastIndex = this._length + this._headIndex
    this._storage[lastIndex] = value
    this._length++
  }

  // Dequeues the value from the beginning of the queue and returns it.
  dequeue() {
    if (this._length) {
      const firstValue = this._storage[this._headIndex]
      delete this._storage[this._headIndex]
      this._length--
      this._headIndex++

      return firstValue
    }
  }

  // Returns the value from the beginning of the queue without deleting it.
  peek() {
    return this._storage[this._headIndex]
  }
}
```

## Linked Lists

- Organize items sequentially, with each item storing a pointer to the next
- JS has dynamic arrays, more important in languages that don't have dynamic arrays
- Each item has a property next that points to another object
- Linked lists are often the underlying data structure for a stack or a queue

> ### What is a reference?
>
> When we assign values to an object, we are really just pointing to that object. The object doesn't live inside the variable, the variable is just a pointer to the object in memory. If we assign another variable to that object, we have 2 variables pointing to the same object. But there's only one object. That's what we mean by reference. Pointers point to nodes (objects).

### Pros

- Fast operations on the ends
- Flexible size
- Can do constant time insertions anywhere in the list
- Quick deletions from the middle (when deleting from middle of array, then must shift everything after that index over by one)

### Cons

- Costly lookups (when searching. If you have a reference to a node that you want to delete, then it's constant)

### Naive linked list

```js
const linkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null,
      },
    },
  },
}
```

- This example has no reference to previous. If it did, it would be a _doubly linked list_
- Hash tables often use linked lists under the hood

> ### Common use case for a linked list
>
> A Least recently used cache, which keeps track of new searches. As we get new input, we take things out. A least recently used cache would remove the least recently searched term.

### Linked list implementation

```js
class LinkedList {
  constructor(value) {
    this.head = { value, next: null }
    this.tail = this.head
  }

  // Inserts a new value to the end of the linked list.
  insert(value) {
    const node = { value, next: null }
    // Set the next value of the current tail to our new node
    this.tail.next = node
    // Update the tail to be the real tail, which is the new node.
    this.tail = node
  }

  // Deletes a node, given a reference to a node.
  remove() {}

  // Removes the value at the end of the linked list.
  removeTail() {
    // Loop through and get to the node right before the tail.
    // THIS IS HOW TO TRAVERSE A LINKED LIST.
    let currentNode = this.head
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next
    }

    currentNode.next = null
    this.tail = currentNode
  }

  isHead(node) {
    return node === this.head
  }

  isTail(node) {
    return node === this.tail
  }

  // Searches linked list and returns true of it contains the value passed.
  contains(value) {
    let currentNode = this.head
    while (currentNode.value !== value) {
      currentNode = currentNode.next
    }

    return currentNode.value === value
  }
}
```

## Hash Tables

- Are not ordered, don't get sorted
- Organize data for quick lookup of a value for a given key
- For hash tables, we think about the average case, rather than worst case, because chance of worst case happening is slim
- When thinking about optimizing a problem that requires a fast lookup, we should always think hash table
- Be able to choose appropriate data structure when implementing
  - Object
  - Map
  - Set

### Pros

- Quick lookups (constant time)
- Quick insertions (constant time)
- Keys are flexible (array indexes are numerically constrained)
- Keys can be strings
- With ES6, keys can be functions too if using set or map
- In JS, object, set, map are hash table data structures

### Cons

- Slow worst case lookups
- Unordered
- Single directional lookups

### Hash table main concepts

- Hashing function
- Collisions
- Resizing

### Hashing function

- Takes key and hashes it
- For every input, always gives the same output

### Resizing

- Hashing functions return a value within a certain range.
- Have to specify this when implementing a hash table
- Once range becomes full, need to make it bigger
- Typically, once hash table becomes 50% full, then you double it (mathematically found to be most efficient, more collisions happen when more than half full)
- After doubling range, you redistribute by rehashing all existing values to the newly doubled range
- Implement this with same hash function, which has a range parameter, and double that value

### Collisions

- When you get the same hash value for multiple keys. So one hash value has multiple contents
- Having many collisions can affect run time for a lookup

### Hash table implementation

```js
class HashTable {
  constructor(val) {
    this._storage = []
    this._tableSize = val
  }

  // Inserts a new key-value pair in constant time.
  insert(key, value) {
    const index = this._hash(key, this._tableSize)

    // Handle collisions.
    if (!this._storage[index]) {
      this._storage[index] = []
    }
    this._storage[index].push([key, value])
  }

  // Deletes a key-value pair in constant time.
  remove(key) {
    const index = this._hash(key, this._tableSize)
    let arrayAtIndex = this._storage[index]

    if (arrayAtIndex) {
      for (let i = 0; i < arrayAtIndex.length; i++) {
        const keyValueArray = arrayAtIndex[i]

        if (keyValueArray[0] === key) {
          arrayAtIndex = arrayAtIndex.splice(i, 1)
        }
      }
    }
  }

  // Returns a value associated with a key in constant time.
  retrieve(key) {
    const index = this._hash(key, this._tableSize)
    const arrayAtIndex = this._storage[index]

    if (arrayAtIndex) {
      for (let i = 0; i < arrayAtIndex.length; i++) {
        const keyValueArray = arrayAtIndex[i]

        if (keyValueArray[0] === key) {
          return keyValueArray[1]
        }
      }
    }
  }

  // Hashes a string value into an integer that can be mapped to an array index.
  _hash(str, n) {
    let sum = 0
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i)
    }
    return sum % n
  }
}
```

## Arrays and Strings

- Arrays organize items sequentially in memory
- Strings can be thought of as arrays of characters

### Pros

- Fast lookups
- Fast appends

### Cons

- Slow inserts
- Slow deletes (because when inserting / deleting from the middle, must shift everything over)

> ### Strings and space complexity
>
> Strings are not mutable. If you change a string, you're really copying to a new string with that change. This has space complexity implications. If you're trying to do something in constant space, you can't use strings. When working with strings, it's often better to split into array and manipulate using array methods.
