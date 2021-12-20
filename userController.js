const { sequelize } = require('../models');
const db = require('../models');

const Users = db.users;
// console.log(Users);
const addUser = async (req,res) => {
    
    let data = await Users.build(
        {name : 'rahul',
        email : 'hello@123'}
    )

    await data.save()
    .then(() => {
        console.log('hogya save');
    })

    console.log(data.dataValues);

    data.name = 'yukti'

    data.save();

    console.log(data.dataValues);

    let response = {
        data: 'ok'
    }
    
    res.status(200).json(response);
}

const crudOperations = async (req,res) => {

    const t = await sequelize.transaction();

    try{

        let data = await Users.update({name: 'mehul', gender: 'male'},{
            where:{
                id: 2
            }
        })
        .then(() => {
            console.log('hogya change');
        })
        .catch((err) => {
            console.log(err);
        })
    
        let dataToDelete = await Users.destroy({
            where: {
                id: 3
            }
        })
        .then(()=> {
            console.log('delete hogya');
        })
        .catch((err) => {
            console.log(err);
        })
    
        let bulkInsetion = await Users.bulkCreate([
            {
                name: 'abc',
                email: 'abc@gmail.com'
            },
            {
                name: 'bcd',
                email: 'bcd@gmail.com'
            },
            {
                name: 'cde',
                email: 'cde@gmail.com'
            }
        ]);

        console.log('commit hua');
        t.commit();

    }catch(e){
        console.log('rollback hua');
        t.rollback();
    }

    // res.send(bulkInsetion)

    // let response = {
    //     data: bulkInsetion
    // }


    res.status(200).json('this is crud operation page')

    // res.status(200).json(response)
}

const transactionsRoute = async (req, res) => {

    const t = await sequelize.transaction();

    try{

        let data = await Users.create({
            name: 'air',
            email: 'air1@gmail.com'
        },{
            transaction: t
        })
    
        // await data.save();

        console.log('commited');
        t.commit();

    }catch(e){

        console.log('rollback');
        t.rollback();

    }


    res.send('hey this is transcations route')
}

const hooks = async(req, res) => {

    let data = await Users.create({
        name: 'rahul mahajan',
        email: 'rahul@mahajan.com'
    })
    // .then(() => {
    //     console.log('sab shi chal gya!');
    // })
    // .catch((err) => {
    //     console.log(err);
    // })

    res.status(200).json(data)
}

// module.exports = addUser;
// module.exports = crudOperations;

module.exports = {addUser,crudOperations,transactionsRoute,hooks}