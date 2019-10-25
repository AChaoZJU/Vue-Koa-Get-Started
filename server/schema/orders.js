/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    orderId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
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
      allowNull: true,
      references: {
        model: 'good',
        key: 'goodId'
      }
    },
    amount: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    unitPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    orderStatus: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    orderTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'orders'
  });
};
