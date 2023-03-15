const sequelize = require('../config/connection');
const seedUser = require('./userdata');
const seedPost = require('./postdata');
const seedComment = require('./commentdata');


const seedAll = async () => {
    await sequelize.sync({ force: false });

    await seedUser();

    await seedPost();

    await seedComment();

    process.exit(0);
};

seedAll();