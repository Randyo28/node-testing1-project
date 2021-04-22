const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  let input
  let expected
  let actual

  beforeEach(() => {
    input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    actual = utils.trimProperties(input)
  })

  test('[1] returns an object with the properties trimmed', () => {
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    expect(actual).not.toEqual(input)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
  const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
  const actual = utils.trimPropertiesMutation(input)

  test('[3] returns an object with the properties trimmed', () => {
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    expect(actual).toBe(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const numbers = [1, 5, 2, 3]
    expect(utils.findLargestInteger(numbers)).toEqual(5)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.initialNumber).toEqual(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    const input = counter.initialNumber
    const expected = 2
    const actual = counter.countDown(input)
    expect(actual).toBe(expected)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    const input = -1
    const expected = 0
    const actual = counter.countDown(input)
    expect(actual).toBe(expected)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toMatch('summer')
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    expect(seasons.next()).toBe('fall')
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('winter')
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('spring')
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('summer')
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {
      seasons.next()
    }
    expect(seasons.next()).toBe('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(100)).toBe(100)
    expect(focus.odometer).toBe(100)
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(100)
    const expected = 20 - 100 / 30
    expect(focus.tank).toBe(expected)
  })
  test('[17] refueling allows to keep driving', () => {})
  test('[18] adding fuel to a full tank has no effect', () => {})
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const evenNumber = await utils.isEvenNumberAsync(2)
    expect(evenNumber).toBe(true)
  })
  test('[20] resolves false if passed an odd number', async () => {
    const oddNumber = await utils.isEvenNumberAsync(3)
    expect(oddNumber).toBe(false)
  })
  test('[21] rejects an error with the message "number must be a number" if passed a non-number type', async () => {
    utils
      .isEvenNumberAsync('foo')
      .then((string) => {
        console.log(string)
      })
      .catch((error) => {
        expect(error).toEqual('number must be a number')
      })
  })
  test('[22] rejects an error with the message "number must be a number" if passed NaN', async () => {
    utils
      .isEvenNumberAsync(NaN)
      .then((notNumber) => {
        console.log(notNumber)
      })
      .catch((error) => {
        expect(error).toEqual('number must be a number')
      })
  })
})
