module.exports = function arandom(arr) {
  var max = arr.length - 1
  var rem = []

  return function() {
    if (max < 0) return null

    var index = Math.floor(Math.random() * (max + 1));
    rem = arr.splice(index, 1)
    max--

    return rem[0]
  }
}

// var next = module.exports([1, 2, 3, 4, 5])
// console.log(next())
// console.log(next())
// console.log(next())
// console.log(next())
// console.log(next())
// console.log(next()) => returns null when reached the end
