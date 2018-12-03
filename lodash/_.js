const _ = {
  // first method:  .clamp()
  clamp(numInput, numLower, numUpper) {
    let clampedValue;
    if (numInput <= numLower) {
      clampedValue = numLower;
    } else if (numInput >= numUpper) {
      clampedValue = numUpper;
    } else {
      clampedValue = numInput;
    }
    return clampedValue;
  },

  // second method: .inRange()
  inRange(numInput, numStart, numEnd) {
    if (!numEnd) {
      numEnd = numStart;
      numStart = 0;
    }
    if (numStart > numEnd) {
      let temp = numEnd;
      numEnd = numStart;
      numStart = temp;
    }
    let isItInRange = numInput >= numStart && numInput < numEnd ? true : false;
    return isItInRange;
  },

  // third method: .words()
  words(myString) {
    let myWords = myString.split(' ');
    return myWords;
  },

  // fourth method: .pad()
  pad(myString, idealLength) {
    if (idealLength <= myString.length) {
      return myString;
    } else {
      let difference = idealLength - myString.length;
      let frontPadding = Math.floor(difference / 2);
      let endPadding = Math.ceil(difference / 2);
      let paddedString = ' '.repeat(frontPadding) + myString + ' '.repeat(endPadding);
      return paddedString;
    }
  },

  // fifth method: .has()
  has(myObject, myKey) {
    const whatsInside = Object.keys(myObject);
    if (!myKey) {
      console.log('please include a key!');
      return false;
    }
    for (let i = 0; i < whatsInside.length; i++) {
      if (whatsInside[i] === myKey) {
        return true;
      } else {
        return false;
      }
    }
  },

  // sixth method: .invert()
  invert(myObject) {
    let invertedMyObject = [];
    for (let key in myObject) {
      let originalValue = myObject[key];
      invertedMyObject = {
        originalValue: key
      };
    }
    return invertedMyObject;
  },

  // seventh method: .findKey()
  findKey(myObject, predicate) {
    for (let key in myObject) {
      let value = myObject[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      } else {
        return undefined;
      }
    }
  },

  // eighth method: .drop()
  drop(myArray, num) {
    if (!num) {
      num = 1;
    }
    let droppedArray = myArray.slice(num);
    return droppedArray;
  },

  // ninth method: .dropWhile()
  dropWhile(array, predicate) {
    let dropNumber = array.findIndex((element, index) => {
      return !predicate(element, index, array);
    });
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },

  // tenth method: .chunk()
  chunk(thisArray, size) {
    if (!size) {
      size = 1;
    }
    let chunkedArray = [];
    for (let i = 0; i < thisArray.length; i += size) {
      let arrayChunk = thisArray.slice(i, i + size);
      chunkedArray.push(arrayChunk);
    }
    return chunkedArray;
  }
};

// Do not write or modify code below this line.
module.exports = _;
