"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AttemptDate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AttemptDate.belongsTo(models.Problem, {
        foreignKey: "problemId",
        onDelete: "CASCADE",
      });
    }
  }
  AttemptDate.init(
    {
      dateFormatted: DataTypes.STRING,
      solved: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "AttemptDate",
    }
  );
  return AttemptDate;
};
