'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let compare = compareFunction;

    if (compare === undefined) {
      compare = (a, b) => {
        if (a.toString() > b.toString()) {
          return 1;
        } else if (a.toString() < b.toString()) {
          return -1;
        }

        return 0;
      };
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
