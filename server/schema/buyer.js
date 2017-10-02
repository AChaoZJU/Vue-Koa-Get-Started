/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('buyer', {
    buyerId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    buyerName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    buyerPassword: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: true
    },
    phoneNumber: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    bankCard: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    balance: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    realName: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'buyer'
  });
};
