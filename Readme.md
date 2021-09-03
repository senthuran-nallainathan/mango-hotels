**Mango Hotels Reservation Platform v.1.1**
This readme serves the purpose to demonstrate the installation method to be followed.

In this version update, the need for SQL server setup is removed as Remote SQL server is setup, while its server settings can be changed by changing Environment Variables.

1. cd reservation
2. npm install
3. npm start

Node Package Manager was used but you might use Yarn Package Manager as well with caution.

The flexibility to use custom a port number could be established by using the command
1. sudo PORT=80 npm run start
Or by
2. Setting the Port environment variable to 80
Therefore, using Port 80 instead of 3000, will help you directly access the website through the domain name (without giving a port number in URL).

**Additional React Application**
This is under development but this is not required for full functionality as above has all the features, but still if you like to accesss it please run

1. cd frontdesk
2. npm install
3. npm start

**Authentication Details**
Username - user
Password - 123123

**Environment Variables**
Please use the following environment variables for successful running of the application.

The .env file is to be placed under reservation folder of the project

PORT=3001

DB_NAME=VkWjuv6rz4

DB_HOST=remotemysql.com

DB_PORT=3306

DB_USER=VkWjuv6rz4

DB_PW="VHr64TZoaO"
