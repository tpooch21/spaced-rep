"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Problem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Problem.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
      Problem.hasMany(models.AttemptDate);
    }
  }
  Problem.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: DataTypes.STRING,
      leetcodeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Problem",
    }
  );
  return Problem;
};
