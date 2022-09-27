// Modules - Encasulated Code (only share minimum)
// Every File in node is module

const names = require("./4-names")
const {john, petter} = require("./4-names")
const sayHi = require("./5-utils")
const data = require("./6-alternative-flavors")
require('./7-mind-grenade')


console.log(data)

sayHi('SuSan')
sayHi(petter)
sayHi(john)

sayHi(names.john)