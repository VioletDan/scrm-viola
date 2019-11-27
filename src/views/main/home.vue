<template>
  <div class="wrapper"></div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      activeName: 'first'
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    const numbers = [0, 2, 4]
    numbers.forEach((value, index, arr) => {
      console.log('forEach--' + value, index, arr)
      //forEach--0 0 (3) [0, 2, 4]
      //forEach--2 1 (3) [0, 2, 4]
      //forEach--4 2 (3) [0, 2, 4]
    })
    const numbersNew = numbers.map((value, index, arr) => {
      console.log('map--' + value, index, arr)
      return value + 1
    })
    console.log('numbersNew--' + numbersNew) //numbersNew--1,3,5
    const numbersNew2 = Array.from(numbers, value => {
      return value + 4
    })
    console.log('numbersNew2--' + numbersNew2) //numbersNew2--4,6,8

    var sum = numbers.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0)
    console.log('sum--' + sum)

    var flattened = [
      [0, 1],
      [2, 8],
      [8, 90]
    ].reduce((a, b) => a.concat(b), [2222, 4444])
    console.log(flattened) // [2222, 4444, 0, 1, 2, 8, 8, 90]

    var friends = [
      {
        name: 'Anna',
        books: ['Bible', 'Harry Potter'],
        age: 21
      },
      {
        name: 'Bob',
        books: ['War and peace', 'Romeo and Juliet'],
        age: 26
      },
      {
        name: 'Alice',
        books: ['The Lord of the Rings', 'The Shining'],
        age: 18
      }
    ]

    var allBooks = friends.reduce((prev, curr) => [...prev, ...curr.books], [])
    console.log(allBooks) // ["Bible", "Harry Potter", "War and peace", "Romeo and Juliet", "The Lord of the Rings", "The Shining"]

    //数组去重
    let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
    let orderedArray = Array.from(new Set(myArray))
    console.log(orderedArray)

    // reduce
    var myOrderedArray = myArray.reduce(function(accumulator, currentValue) {
      if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue)
      }
      return accumulator
    }, [])
    console.log(myOrderedArray)

    let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]
    let result = arr.sort().reduce((init, current) => {
      if (init.length === 0 || init[init.length - 1] !== current) {
        init.push(current)
      }
      return init
    }, [])
    console.log(result) //[1,2,3,4,5]
    //功能型函数管道
    // Building-blocks to use for composition
    const double = x => x + x
    const triple = x => 3 * x
    const quadruple = x => 4 * x

    // Function composition enabling pipe functionality
    const pipe = (...functions) => input =>
      functions.reduce((acc, fn) => fn(acc), input)

    // Composed functions for multiplication of specific values
    const multiply6 = pipe(double, triple)
    const multiply9 = pipe(triple, triple)
    const multiply16 = pipe(quadruple, quadruple)
    const multiply24 = pipe(double, triple, quadruple)

    // Usage
    console.log(multiply6(6)) // 36
    console.log(multiply9(9)) // 81
    console.log(multiply16(16)) // 256
    console.log(multiply24(10)) // 240

    // reduce 实现map
    if (!Array.prototype.mapUsingReduce) {
      Array.prototype.mapUsingReduce = function(callback, thisArg) {
        return this.reduce(function(mappedArray, currentValue, index, array) {
          mappedArray[index] = callback.call(
            thisArg,
            currentValue,
            index,
            array
          )
          return mappedArray
        }, [])
      }
    }

    ;[1, 2, , 3].mapUsingReduce((currentValue, index, array) => {
      console.log(currentValue) // [1, 2, , 3]
    })

    let colors = ['white', 'black', 'gray']
    let clone = [...colors]
    clone.push(5555)
    clone[0] = '555'
    console.log(clone, colors)
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
.wrapper {
  span {
    color: red;
  }
}
</style>
