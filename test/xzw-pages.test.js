const test = require('ava')
const xzwPages = require('..')

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => xzwPages(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(xzwPages('w'), 'w@zce.me')
  t.is(xzwPages('w', { host: 'wedn.net' }), 'w@wedn.net')
})
