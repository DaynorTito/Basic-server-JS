module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define('Game', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        genre: {
            type: DataTypes.STRING,
        },
        platform: {
            type: DataTypes.STRING,
        },
    });

    return Game;
};
