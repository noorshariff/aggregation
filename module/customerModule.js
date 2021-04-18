const { Customer } = require('../models');

module.exports.createData = (data) =>
    new Promise((resolve, reject) => {
        Customer.create(data)
            .then((doc) => {
                resolve(doc)
            })
            .catch((err) =>{
                reject(err)
            })
    })

    //group
module.exports.getData = (query) => 
    new Promise((resolve, reject) => {
        Customer.aggregate([
            {
                $group: {_id:{favouriteFruit: "$favouriteFruit",eyeColor: "$eyeColor" }}
            }
        ]).then((doc) => {
            resolve(doc)
        })
        .catch((err) =>{
            reject(err)
        })
    })

    //group and match
module.exports.getAggregate = () =>
    new Promise((resolve,reject) => {
        Customer.aggregate([
            {$match: {favouriteFruit:"Banana"}},
            {$group:{_id:{name: "$name", age: "$age"}}}
        ]).then((doc) => {
            resolve(doc)
        })
        .catch((err) =>{
            reject(err)
        })
    })