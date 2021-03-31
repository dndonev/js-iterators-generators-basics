const log = console.log;

const makeInfiniteIterator = () => {
    let index = 0;
    const end = Infinity;

    return {
        next: () => {
            if (index < end) {
                return {
                    value: (index++).toString(),
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

const iterator = makeInfiniteIterator();

// log(iterator.next())
// log(iterator.next())
// log(iterator.next())
// log(iterator.next())

for (let index = 0; index < 100; index++) {
    log(iterator.next())
}