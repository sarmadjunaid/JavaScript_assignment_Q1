const guests = ['Steve Jobs', 'Bill gates', "Iqbal"]

console.log(`I would love to invite ${guests[0]}`)
console.log(`I would love to invite ${guests[1]}`)
console.log(`I would love to invite ${guests[2]}`)

console.log(`${guests[2]} could not make it`)

guests[2] = "Elon Musk"

console.log(`I would love to invite ${guests[0]}`)
console.log(`I would love to invite ${guests[1]}`)
console.log(`I would love to invite ${guests[2]}`)

console.log('Announcement! a BIGGER table is found')

guests.unshift("Alama Iqbal")
guests.splice("Muhammad Ali Jinnah", 1)
guests.push("Sarmad Junaid")

console.log(`I would love to invite ${guests[0]}`)
console.log(`I would love to invite ${guests[1]}`)
console.log(`I would love to invite ${guests[2]}`)
console.log(`I would love to invite ${guests[3]}`)
console.log(`I would love to invite ${guests[4]}`)
console.log(`I would love to invite ${guests[5]}`)

console.log('Unfortunatly, we can only invite 2 guests at the moment')

guests.pop()
guests.pop()

console.log(`${guests[0]}! you are still invited to the dinner`)
console.log(`${guests[1]}! you are still invited to the dinner`)

console.log(`The number of people invited : ${guests.length}`)

guests.length = 0

console.log(guests)

