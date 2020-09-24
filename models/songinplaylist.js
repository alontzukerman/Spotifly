'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class songInPlaylist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Playlist,{
        foreignKey: 'playlistId'
      });
      this.belongsTo(models.Song,{
        foreignKey: 'songId'
      });
    }
  };
  songInPlaylist.init({
    playlistId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'songInPlaylist',
  });
  return songInPlaylist;
};