# SB-ASSIGNMENT
- this is an assignment. 
- It is a react based web application with a
node server. 
- Admin can add students to the mysql database.
- Users can view-students/ or search-by-course.
- Students are sorted by courses or by batch year.
- Uses passport to serialize user into sessions.
- Create-React-App used to build react web-app.
- mysql database with sequelize as ORM is used for db operations.

## TO SETUP LOCALLY
```$xslt
- clone the repo
- `cd` into backend folder, run `npm install` and same for react-frontend folder
- create config.json in backend folder with following structure
`{
   "DB":{
     "NAME":"{$DBNAME}",
     "USER":"{$USERNAME}",
     "PASSWORD":"{$PASSWORD}"
   },
   "CREDS":{
     "username":"{$USERNAME}",
     "password":"{$PASSWORD}"
   }
 }`
 - Then just run `npm run start` from both folders.
```
