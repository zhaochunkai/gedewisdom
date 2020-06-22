'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, { //这是测试环境
  NODE_ENV: '"development"',
  // API_1:'http://10.0.0.5:7000',
  // API_2:'http://ets-resource.gd',
})
