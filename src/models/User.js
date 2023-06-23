const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id:{
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true
      },
      name:{
         type: DataTypes.INTEGER,
         allowNull: false,
        isEmail: true
      },
      password:{
         type: DataTypes.INTEGER,
         allowNull: false
      },
   }, { timestamps: false });
};
