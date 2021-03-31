const log = console.log;

function* generate() {
    yield 1;
    yield* nestedGenerate();
    yield 3;
}

function* nestedGenerate() {
    yield 4;
    yield 5;
}

const generator = generate();

// log(generator.next());
// log(generator.next());
// log(generator.next());
// log(generator.next());
// log(generator.next());

for (const iterator of generator) {
    log(iterator)
}