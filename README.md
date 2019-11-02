## Installation
```
cd Wepay-Business-System
# install dependencies
npm install
```
## Usage
#### Start your MySQL server
#### MySQL Database configuration
Create an empty database with the configuration below
- Name: Wepay
- Character Set: utf8
- Collation: utf8_general_ci

Import the data with SQL script

```
mysql -u root -p wepay < doc/wepay.sql
```
Modify database connection in `server/config/db.js`
```
const db = new Sequelize('mysql://root:XXXX@localhost/Wepay',{
  define: {
    timestamps: false
  }
})
```
#### Run Front-End Page
```
# serve with hot reload at localhost:8080
npm run dev
```
#### Run Back-End Server
```
# serve with hot reload at localhost:8889
npm run server
```
#### Run http-server, which servers images
```
sudo npm install -g http-server
cd server/controller/images
http-server -p  9111
```