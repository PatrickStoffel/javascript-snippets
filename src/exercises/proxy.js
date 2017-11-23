'use strict'

const l = console.log

class EntryMethodProxy {
    get(target, propertyKey) {
        let propertyValue = target[propertyKey]
        let proxy = this
        if(typeof propertyValue != 'function'){
            return proxy.propertyProxy(propertyValue, target, propertyKey)
        }else{
            return function(...args){
                return proxy.functionProxy(propertyValue, target, args)
            }
        }
    }
    // default implementation für funktion proxy
    functionProxy(fn, target, args){
        l('proxying', fn.name)
        return fn.apply(target, args)
    }
    // default implementation für property proxy
    propertyProxy(value, target, propertyKey){
        l('proxying', propertyKey)
        return value
    }
};

class Database{
    constructor(user){
        this.user = user
    }
    read(){}
    write(){}
}

class MySql extends Database{
    read(){ l('read mysql') }
    write(){ l('write mysql') }
}

class DBAccessProxy extends EntryMethodProxy{
    // TODO
}

const db = new MySql('admin')
const proxiedDb = new Proxy(db, new DBAccessProxy())
proxiedDb.read()
proxiedDb.write()

// erwarteter output:
/*
proxying read​​​​​
​​​​​read mysql​​​​​
​​​​​proxying write​​​​​
​​​​​write mysql​​​​​
*/

const db1 = new MySql('notAnAdmin')
const proxiedDb1 = new Proxy(db1, new DBAccessProxy())
proxiedDb1.read()
proxiedDb1.write()

// erwarteter output:
/*
​​​​​proxying read​​​​​
​​​​​read mysql​​​​​
proxiedDb1.write() throws not authorized
*/