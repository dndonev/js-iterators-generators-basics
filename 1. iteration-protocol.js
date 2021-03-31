const log = console.log;

const makeIterator = (input) => {
	let index = 0;

	return {
		next: () => {
			if (index < input.length) {
				return {
					value: input[index++],
					done: false
				}
			}

			return {
				value: undefined,
				done: true
			}
		}
	}
}

const array = ['a', 'b', 'c'];
const greeting = 'abc';

// const iterator = makeIterator(array);
const iterator = makeIterator(greeting);

log(iterator.next())
log(iterator.next())
log(iterator.next())
log(iterator.next())