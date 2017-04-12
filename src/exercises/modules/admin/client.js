'use strict'

import Person from './person'
import Store from './store'

let per1 = new Person
per1.name = 'Muster'
per1.vorname = 'Hans'

console.log(per1)

let store1 = new Store([])
store1.add(per1)

store1
