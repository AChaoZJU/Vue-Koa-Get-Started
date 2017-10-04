/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seller', {
    sellerId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sellerName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    sellerPassword: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ''
    },
    balance: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    bankCard: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    realName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true
    },
    sellerImgUrl: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bankName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'seller'
  });
};
