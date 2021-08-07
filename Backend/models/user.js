const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const User = sequelize.define('user', {
    user_id : {
        allowNull : false,
        unique : true,
        type : Sequelize.STRING,
        primaryKey : true,
    }, 
    user_password : {
        allowNull : false,
        type : Sequelize.STRING
    },
    user_name : {
        allowNull : false,
        type : Sequelize.STRING
    },
    user_gender : {
        allowNull : true,
        type : Sequelize.INTEGER
    },
    user_age : {
        allowNull : true,
        unique : false,
        type : Sequelize.INTEGER
    },
    user_address : {
        allowNull : true,
        unique : false,
        type : Sequelize.STRING
    },
    user_life_cycle : {
        allowNull : true,
        unique : false,
        type : Sequelize.INTEGER
    },
    user_family : {
        allowNull : true,
        unique : false,
        type : Sequelize.INTEGER
    },
    user_income : {
        allowNull : true,
        unique : false,
        type : Sequelize.INTEGER
    },
    user_is_disabled : {
        allowNull : true,
        unique : false,
        type : Sequelize.INTEGER
    },
    user_is_veterans : {
        allowNull : true,
        unique : false,
        type : Sequelize.INTEGER
    },
    user_interest : {
        allowNull : true,
        unique : false,
        type : Sequelize.INTEGER
    },
    last_update : {
        allowNull : true,
        unique : false,
        type : Sequelize.DATE
    },
    user_mToken : {
        allowNull : true,
        unique : false,
        type : Sequelize.TEXT
    },
    usercol : {
        allowNull : true,
        unique : false,
        type : Sequelize.STRING
    }
}, {
    timestamps: false
});
module.exports = User;