# Tech-blog

## Description
This project is a full-stack blog application. Registered users can share technology blog posts with each other and leave comments on each post. This application allows the registered users to experience the full CRUD functionalities. Registered users can create, edit, and delete personal posts on the dashboard after logging in. Also, users can leave comments under other users' posts. However, guests can only view posts on the homepage. 


## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Contributing](#Contributing)
4. [License](#License)
5. [Tests](#Tests)
6. [Questions](#Questions)
7. [Github](#Github)
8. [Heroku](#Heroku)
9. [Screenshots](#Screenshots)


## Installation <a id="Installation"></a>
1. Install package.json with command `npm i`


## Usage <a id="Usage"></a>
1. Opening an external ternimal from the repository
2. Create the schema by running the code in `schema.sql` with MySQL Workbench
3. Create a ".env" file including the code below: 
    DB_NAME='techblog_db'
    DB_USER='root'
    DB_PASSWORD='password'
3. Start the server and create tables with command `npm start` 
4. End the server with `control + c` and seed the MySQL database with command `npm run seed`
5. Start the server with command: `npm start` 


## Contributing <a id="Contributing"></a>

### MySQL2
https://www.npmjs.com/package/mysql2

### Sequelize
https://sequelize.org/

### Dotenv
https://www.npmjs.com/package/dotenv

### Express.js
https://expressjs.com/

### Handlebars.js
https://handlebarsjs.com/

### JawsDB
https://www.jawsdb.com/

### Heroku
https://www.heroku.com/


## License <a id="License"></a>
UNLICENSED


## Tests <a id="Tests"></a>
N/A


## Questions <a id="Questions"></a>

### Email
1. zli02@alumni.risd.edu
2. seanlee900214@gmail.com


## Github <a id="Github"></a>

### Github profile
https://github.com/lzh1990214

### Github repository
https://github.com/lzh1990214/Tech-Blog

## Heroku <a id="Heroku"></a>

### Deployed application
https://tech-blog-lee.herokuapp.com/

## Screenshots <a id="Screenshots"></a>

### Create schema in MySQL
![schema](./public/assets/schema.png)

### Run local server
![server](./public/assets/server-local.png)

### Create user table
![user](./public/assets/table-user.png)

### Create posts table
![posts](./public/assets/table-posts.png)

### Create comments table
![comments](./public/assets/table-comments.png)

### Deloyed application
![deployed](./public/assets/deployed-site.png)

