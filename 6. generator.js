const log = console.log;

function* generate() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generate();
log(typeof generator)
log(generator.next())
log(generator.next())
log(generator.next())
log(generator.next())