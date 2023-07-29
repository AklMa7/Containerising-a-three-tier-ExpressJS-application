//Imports the Express.js module by requiring it. It assigns the express variable to the imported module.
const express = require("express") 

//
const mongoose = require('mongoose');
const { MongoDB_USER, MongoDB_PASSWORD, MongoDB_IP, MongoDB_PORT } = require("./config/config");


// wiring the router.
const postRouter = require("./routes/postRoutes");




//creates an instance of the Express.js application by invoking the express() function. 
//The app variable represents the Express.js application.
const app = express()

// Connect to database's container via mongoose     27017=default port / A loop with a 5sec interval until DB connects.
const connectWithRetry = () => {
    mongoose
        .connect(`mongodb://${MongoDB_USER}:${MongoDB_PASSWORD}@${MongoDB_IP}:${MongoDB_PORT}/?authSource=admin`)
        .then(() => console.log('successfully connected to DB'))    
        .catch((e) =>{ 
            console.log(e);
            setTimeout(connectWithRetry,5000);
    });
};

connectWithRetry();

// middleware for when we CRUD a post.
app.use(express.json());

// Route for testing purposes / sets up a route handler for the root URL ("/").
app.get( "/" , (req , res) => {
    res.send("<h2> Hi there IndianJesus </h2>");   // "/" refers to root path 
});


//if a user sends a request "localhost:3000/api/v1/posts" it will be sent to postRouter   ( the /posts will be deleted from URL)
app.use("/api/v1/posts", postRouter);


const port = process.env.PORT || 3000 ; // If env variable PORT is set we assign it to port, if not 3000 is assigned to port const.
// Can take this to the config file in the config folder

// Starts the expressJS app and makes it listen for incomin requests on the specific port. 
// listen func has 2 args : port as first and callback function second that logs a message to console(terminal)
app.listen (port , () => console.log(`listening on port ${port}`)) ; 



