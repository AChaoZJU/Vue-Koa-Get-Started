/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('good', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    'name': {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    'price': {
      type: "DOUBLE(10,2)",
      allowNull: false
    },
    'img': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'info': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'amount': {
      type: DataTypes.INTEGER(255),
      allowNull: true
    },
    'address': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'soldAmount': {
      type: DataTypes.INTEGER(255),
      allowNull: true,
      defaultValue: '0'
    },
    'sellerId': {
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
