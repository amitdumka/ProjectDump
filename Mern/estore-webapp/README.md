# estore-webapp
 
 # App Structure

 ├── client
│   ├── build
│   ├── public
│   ├── src
│   ├── .gitignore
│   ├── package.json
│   ├── README.md
│   └──src
├── models
│   ├── user.js
│   ├── books.js
│   └── index.js
├── public
├── routes
├── .gitignore
├── server.js
├── package.json
└── README.MD


#Heroku
$ heroku create app_name

$ heroku addons:create mongolab:sandbox

$ git add -A

$ git commit -m "add_message"

$ git push heroku master

$ heroku open

# ref
https://github.com/accimeesterlin/mern-stack-deploy-heroku

run Localy

DEBUG=estore-webapp: * npm start
const MONGO_URL=mongodb+srv://estore:dumka2654@akslabs.gphem.mongodb.net/aksLabs?retryWrites=true&w=majority

