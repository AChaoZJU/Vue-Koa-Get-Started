/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    orderId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    buyerId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'buyer',
        key: 'buyerId'
      }
    },
    goodId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'good',
        key: 'goodId'
      }
    },
    amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    unitPrice: {
      type: "DOUBLE",
      allowNull: true
    },
    orderStatus: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    orderTime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'orders'
  });
};
