module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    full_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    party: {
      type: DataTypes.STRING,
      allowNull: true
    }
    
  })

  return User
}