'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aadhar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.User,{
        foreignKey:'aadharId'
      })
    }
  }
  Aadhar.init({
    id: {
    type:DataTypes.UUID,
    primaryKey:true,
    defaultValue:DataTypes.UUIDV4
  },
    aadharNumber: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Aadhar',
  });
  return Aadhar;
};