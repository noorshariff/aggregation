const customer = require('../module/customerModule');
const {createData, getData, getAggregate} = customer

module.exports.createData = async(req,res) => {
   const data = await createData(req.body);
   res.send(data)
}


module.exports.getCustomerDetails = async(req,res) => {
    //group
    // const result = await getData()

    //match group
    const result = await getAggregate()
    res.send(result)
}