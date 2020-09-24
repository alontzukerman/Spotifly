'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Artist,{
        foreignKey: 'artistId',
      });
      this.belongsTo(models.Album,{
        foreignKey: 'albumId',
      });
      this.hasMany(models.songInPlaylist,{
        foreignKey: 'playlistId'
      });
    }
  };
  Song.init({
    youtubeLink: DataTypes.STRING,
    albumId: DataTypes.INTEGER,
    artistId: DataTypes.INTEGER,
    songTitle: DataTypes.STRING,
    songLength: DataTypes.TIME,
    trackNumber: DataTypes.INTEGER,
    songLyrics: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};