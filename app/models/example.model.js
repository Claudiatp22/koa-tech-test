module.exports = (sequelize, Sequelize) => {
    const exampleModel = sequelize.define("exampleModel", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
    });

    return exampleModel;
};
