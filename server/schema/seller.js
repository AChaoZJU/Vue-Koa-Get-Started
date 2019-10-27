/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seller', {
    'sellerId': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    'sellerName': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'sellerPassword': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'balance': {
      type: DataTypes.INTEGER(255),
      allowNull: true
    },
    'bankCard': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'realName': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'phoneNumber': {
      type: DataTypes.STRING(0),
      allowNull: true
    },
    'sellerImgUrl': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'bankName': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'email': {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'seller'
  });
};
