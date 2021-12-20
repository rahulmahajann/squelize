module.exports = (sequelize,DataTypes) => {
    const Users = sequelize.define('user',{
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        gender: {
            type: DataTypes.STRING,
            notNull: true
        }
    },{
        hooks:{
            beforeValidate: (user,option) => {
                user.name = 'BS'
                user.email = 'n15@gmail.com'
                console.log('before validate wala hook chla!');
            },
            afterValidate: (user, option) => {
                user.name = 'rahul'
                user.email = 'n152@gmail.com'
                console.log('after validate wala hook chla hai!')
            }
        }
    });

    return Users;
}