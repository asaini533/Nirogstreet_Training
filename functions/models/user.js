"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Aadhar, {
        foreignKey: "aadharId",
      });
      this.hasMany(models.Addresses, {
        foreignKey: "userId",
      });
      this.belongsToMany(models.Roles, {
        through: "UserRoles",
        foreignKey: "userId",
        otherKey: "roleId",
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      full_name: DataTypes.STRING,
      country_code: DataTypes.INTEGER,
      aadharId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
