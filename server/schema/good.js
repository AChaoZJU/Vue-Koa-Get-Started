/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('good', {
    goodId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    unitPrice: {
      type: "DOUBLE(10,2)",
      allowNull: false
    },
    imgURL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    goodInfo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount: {
      type: DataTypes.INTEGER(255),
      allowNull: true
    },
    goodAddress: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    soldAmount: {
      type: DataTypes.INTEGER(255),
      allowNull: true
    },
    sellerId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'seller',
        key: 'sellerId'
      }
    }
  }, {
    tableName: 'good'
  });
};
