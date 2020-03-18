var data = { 
    "A": {
      "B": 4,
      "I": 4,
      "G": 1
    },
    "B": {
      "A": 4,
      "I": 1,
      "J": 5,
      "C": 1
    },
    "C": {
      "B": 1,
      "J": 1,
      "D": 2
    },
    "D": {
      "C": 2,
      "J": 5,
      "E": 8
    },
    "E": {
      "D": 8,
      "J": 3,
      "K": 4,
      "F": 7
    },
    "F": {
      "G": 6,
      "K": 5,
      "E": 7
    },
    "G": {
      "A": 1,
      "I": 1,
      "K": 1,
      "F": 6
    },
    "I": {
      "A": 4,
      "B": 1,
      "G": 1,
      "K": 5,
      "J": 3
    },
    "J": {
      "B": 5,
      "C": 1,
      "D": 5,
      "E": 3,
      "K": 5,
      "I": 3
    },
    "K": {
      "G": 1,
      "I": 5,
      "J": 5,
      "E": 4,
      "F": 5
    }
  }

function Polynomial() {
  this.data = data
  this.roads = []
}

Polynomial.prototype.seach = function(start, end) {
  const object = this.data[start]
  for (const [key, value] of Object.entries(object)) {
    var array = []
    array.push(start)
    array.push(key)
    array.push(value)
    this.roads.push(array)
  }
}

exports.Polynomial = Polynomial;