'use strict';
module.exports = function(sequelize, DataTypes) {
  var Session = sequelize.define('Session', {
    session_time: DataTypes.INTEGER,
    word_count: DataTypes.INTEGER,
    scores: DataTypes.JSON,
    char_count: DataTypes.INTEGER,
    text: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
         Session.belongsTo(models.User);
      }
    }
  });
  return Session;
};