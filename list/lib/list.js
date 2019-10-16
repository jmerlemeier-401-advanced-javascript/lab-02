'use strict';

/**
 * Class List - Creates a List
 * @params none
 * @returns New Instance of a list
 */
class List {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
 * Method reindex - resets the index of the list so that the indices go from 0 to minus 1.
 * @params this.data
 * @returns accumulator
 */
  reindex() {
    let data = Object.keys(this.data).sort().reduce((acc,val,idx) => {
      acc[idx] = this.data[val];
      return acc;
    },{});

    this.length = Object.keys(data).length;
    this.data = data;
  }

  /**
 * Method push -  adds one or more elements to the end of an array.
 * @params item to add to array
 * @returns returns the new length of the array.
 */
  push(item) {
    if ( arguments.length === 1 ) {
      this.data[this.length++] = item;
    }
    return this.length;
  }

  /**
 * Method pop - removes the last element from an array.
 * @params none
 * @returns the removed element
 */
  pop() {
    if ( ! this.length ) { return undefined; }
    let item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  /**
 * Method shift - removes the first element from an array.
 * @params none
 * @returns removed element
 */
  shift() {
    if ( ! this.data[0] ) { return undefined; }
    let item = this.data[0];
    delete this.data[0];
    this.reindex();
    return item;
  }

  /**
 * Method unshift - adds one or more elements to the beginning of an array.
 * @params the item to add
 * @returns new length of array
 */
  unshift(item) {
    this.data[-1] = item;
    this.reindex();
    return this.length;
  }

  /**
 * Method forEach - executes a provided function once for each array element (MDN).
 * @params callback function
 * @returns undefined
 */
  forEach(callback) {
    if ( this.length ) {
      for (let i = 0; i <= this.length - 1; i++) {
        callback(this[i], i);
      }
    }
  }

  /**
 * Method map - creates a new array with the results of calling a provided function on every element in the calling array (MDN).
 * @params callback
 * @returns new array
 */
  map(callback) {
    if ( ! this.length ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      result.push(callback(this.data[i], i));
    }
    return result;
  }

  /**
 * Method filter - method creates a new array with all elements that pass the test implemented by the provided function (MDN).
 * @params callback
 * @returns new array. If no elements pass test, return empty array.
 */
  filter(callback) {
    if ( ! this.length ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      if (callback(this.data[i])) {
        result.push(this.data[i]);
      }
    }
    return result;
  }

  /**
 * Method reduce - method executes a reducer function (that you provide) on each element of the array, resulting in a single output value (MDN).
 * @params callback
 * @returns the value that results from the reduction
 */
  reduce(callback, state) {
    if ( ! this.length ) { return undefined; }
    for (let i = 0; i <= this.length - 1; i++) {
      state = callback(state,this.data[i], i);
    }
    return state;
  }

}

module.exports = List;