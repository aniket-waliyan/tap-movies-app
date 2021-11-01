module.exports = (Sequelize, DataTypes) => {
    const Movies = Sequelize.define(
        'Movies',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: DataTypes.STRING
            },
            year_of_release: {
                type: DataTypes.STRING
            },
            rating: {
                type: DataTypes.FLOAT
            },
            poster: {
                type: DataTypes.STRING
            },
            earning: {
                type: DataTypes.INTEGER
            },
            genre: {
                type: DataTypes.STRING
            }
        },
        {
            timestamps: false,
            modelName: 'Movies',
            tableName: 'movies'
        }
    );

    return Movies;
};
