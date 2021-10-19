define([], function () {
  const Robert = function (guestName) {
    'Use Strict'
    // this refers to the Robert object
    this.sayHi = function () {
      console.log(`Hi, ${guestName}, welcome to RequireJS!`)
    }
  }

  return Robert
})
