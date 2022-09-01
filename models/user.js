module.exports = (sequelize, Sequelize) => {
    var User = sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: true,
        freezeTableName: true
    });
    return User;
};
