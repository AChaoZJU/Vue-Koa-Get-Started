/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('good', {
    goodId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    goodName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    unitPrice: {
      type: "DOUBLE",
      allowNull: false
    },
    imgUrl: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    goodInfo: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    amount: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    goodAddress: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    soldAmount: {
      type: DataTypes.INTEGER(11),
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
