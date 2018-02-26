module.exports = function (sequelize, DataTypes) {
  var Ballots = sequelize.define("Ballots", {
    answers: {
      type: DataTypes.ARRAY
    }
  })

  Ballots.associate = function (models) {
    models.Ballots.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
  }

  return Ballots
}