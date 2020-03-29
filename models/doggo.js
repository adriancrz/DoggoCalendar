module.exports = (sequelize, DataTypes) => {
    const Doggo = sequelize.define("Doggo", {
      name: DataTypes.STRING,
      gender: DataTypes.STRING,
      bio: DataTypes.STRING,
      weight: DataTypes.INTEGER,
      energy: DataTypes.INTEGER,
      patience: DataTypes.INTEGER,
      dominance: DataTypes.INTEGER,
      profileImage: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
        },
      },
    });
  
    Doggo.associate = (models) => {
      models.Doggo.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });
    };
    return Doggo;
};