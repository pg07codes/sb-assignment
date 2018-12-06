# SB-ASSIGNMENT
- this is an assignment. 
- It is a react based web application with a
node server. 
- Admin can add students to the mysql database.
- Users can view-students/ or search-by-company.
- Students are sorted by courses or by batch year.
- Uses passport to serialize the admin into session.
- Create-React-App used to build react web-app.
- mysql database with sequelize as ORM is used for db operations.
- It was designed to learn and implement functionalities.(Design and styling is thus, minimalistic)

## WHAT IT LOOKS LIKE -
- multiple new features like search by company name has been added now. i'll update gif later.

![](sb-assignment.gif)

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
