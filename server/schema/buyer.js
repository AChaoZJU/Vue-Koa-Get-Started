/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('buyer', {
    'buyerId': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    'buyerName': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'buyerPassword': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'email': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'phoneNumber': {
      type: DataTypes.STRING(0),
      allowNull: true
    },
    'bankCard': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'address': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'balance': {
      type: "DOUBLE(255,0)",
      allowNull: true
    },
    'realName': {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'buyer'
  });
};
