'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/vue-sample-plugin.min.cjs')
} else {
  module.exports = require('./dist/vue-sample-plugin.cjs')
}
