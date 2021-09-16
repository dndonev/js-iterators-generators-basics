const log = console.log;

const addCustomIterator = (somethingToIterateOver) => {
	let index = 0;

	return {
		...somethingToIterateOver,
		[Symbol.iterator]: function () {
			return {
				next: () => {
					if (index++ < Object.getOwnPropertyNames(somethingToIterateOver).length) {
						return {
							value: 'hi',
							done: false
						}
					}
					return {
						value: 'bye',
						done: true
					}
				}
			}
		}
	}
}

const person = {
	firstName: 'Dobrin',
	lastName: 'Donev',
	fn: 1111
}
const myIterableObject = addCustomIterator(person)

// manually
// log(myIterableObject[Symbol.iterator]().next())
// log(myIterableObject[Symbol.iterator]().next())
// log(myIterableObject[Symbol.iterator]().next())
// log(myIterableObject[Symbol.iterator]().next())

// for of
for (const iterator of myIterableObject) {
	log(iterator)
}