const log = console.log;

const greeting = 'Hello';

const iterator = greeting[Symbol.iterator]();
log(iterator.next())
log(iterator.next())
log(iterator.next())
log(iterator.next())
log(iterator.next())
log(iterator.next())

// log('------- for of ---------')
// for (const iterator of greeting) {
//     log(iterator)
// }