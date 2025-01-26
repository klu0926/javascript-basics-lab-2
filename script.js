// Step 2: If-else Condition
// Write a simple program in script.js to check if a number is:
// positive, negative, or zero using an if-else statement.

function checkNumber(num) {
  if (typeof num !== 'number') {
    console.log(`'${num}' is not a number!`)
  } else if (num > 0) {
    console.log(`${num} > 0`)
  } else if (num < 0) {
    console.log(`${num} < 0`)
  } else {
    console.log(`${num} === 0`)
  }
}
console.log('2. If-else Condition')
checkNumber('ten')
checkNumber(10)
checkNumber(-10)
checkNumber(0)
checkNumber('0')

//Step 3: Switch Statement
//Create a program that takes a number(1 to 7) and prints the corresponding day of the week.
console.log('')
console.log('3. Switch Statement')
function checkWeekDay(dayNumber) {
  switch (dayNumber) {
    case 1:
      console.log(`${dayNumber} is Sunday`)
      break
    case 2:
      console.log(`${dayNumber} is Monday`)
      break
    case 3:
      console.log(`${dayNumber} is Tuesday`)
      break
    case 4:
      console.log(`${dayNumber} is Wednesday`)
      break
    case 5:
      console.log(`${dayNumber} is Thursday`)
      break
    case 6:
      console.log(`${dayNumber} is Friday`)
      break
    case 7:
      console.log(`${dayNumber} is Saturday`)
      break
    default:
      console.log(`Please enter 1-7, you enter: ${dayNumber}`)
  }
}
for (let i = 1; i <= 7; i++) {
  checkWeekDay(i)
}


// Step 4: Loops(For, While, Do...While)
// Practice using loops to print numbers from 1 to 5. 
// Implement this using for, while, and do...while loops.
console.log('')
console.log('4. Loops(For, While, Do...While)')
// for
function forLoop() {
  for (let i = 1; i <= 5; i++) {
    console.log(`For loop : ${i}`)
  }
}
forLoop()


// while
function whileLoop() {
  let i = 1
  while (i <= 5) {
    console.log(`While loop : ${i}`)
    i++
  }
}
whileLoop()

// do...while
function doWhileLoop() {
  let i = 1
  do {
    console.log(`Do while loop : ${i}`)
    i++
  } while (i <= 5)
}
doWhileLoop()

// Step 5: Control Flow with break and continue
// Modify your loop to stop when it reaches the number 3 using break.
// Try skipping the number 3 with continue.
console.log('')
console.log('5. Control Flow with break and continue')
// 1 - 5
function breakFlow() {
  console.log('-- Break at 3')
  // for loop
  let i = 1
  for (let i = 1; i <= 5; i++) {
    if (i === 3) break
    console.log(`For loop : ${i}`)
  }

  let x = 1
  while (x <= 5) {
    if (x === 3) break
    console.log(`While loop : ${x}`)
    x++
  }

  let y = 1
  do {
    if (y === 3) break
    console.log(`Do while loop : ${y}`)
    y++
  } while (y <= 5)
}
breakFlow()
function continueFlow() {
  console.log('')
  console.log('-- Continue at 3')
  // for loop
  let i = 1
  for (let i = 1; i <= 5; i++) {
    if (i === 3) continue
    console.log(`For loop : ${i}`)
  }

  let x = 1
  while (x <= 5) {
    if (x === 3) {
      x++
      continue
    }
    console.log(`While loop : ${x}`)
    x++
  }

  let y = 1
  do {
    if (y === 3) {
      y++
      continue
    }
    console.log(`Do while loop : ${y}`)
    y++
  } while (y <= 5)
}
continueFlow()


// Step 6: Scope and Context
// Explore scope by declaring variables inside and outside functions.Test which variables you can access.
console.log('')
console.log('6. Scope and Context')

let globalVar = 'I am global'

function scopeExample() {
  let localVar = 'I am local'
  console.log(`In function scope I can access '${globalVar}'`)
}
// this cause error!
console.log(`In global scope I can not acess ${localVar}`)
scopeExample()