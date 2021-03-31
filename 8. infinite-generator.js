const log = console.log;

// opposed to our infinite iterator in example 2
function* infiniteGenerator() {
    let index = 0;

    while (true) {
        yield (index++).toString();
    }
}

const generator = infiniteGenerator();

log(generator.next());
log(generator.next());
log(generator.next());

// METHODS:
// return
// log(generator.return())
// log(generator.next());

// throw
// log(generator.throw())
// log(generator.next());
