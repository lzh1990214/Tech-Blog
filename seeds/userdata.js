const User = require('../models/User');
const bcrypt = require('bcrypt');

const userdata = [
    {
        first_name: 'Zhihao',
        last_name: 'Li',
        email: 'zhihao@gmail.com',
        password: 'zhihaoli'
    },
    {
        first_name: 'Hui',
        last_name: 'Li',
        email: 'hui@gmail.com',
        password: 'huili'
    },
    {
        first_name: 'John',
        last_name: 'Doe',
        email: 'John@gmail.com',
        password: 'johndoe'
    },
    {
        first_name: 'Steve',
        last_name: 'Smith',
        email: 'steve@gmail.com',
        password: 'stevesmith'
    }
];

const seedUser = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUser;
