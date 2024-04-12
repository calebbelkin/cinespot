// require syntax for importing in express
const express = require('express');
const app = express();
const router = require("./router");
const searchRouter = require('./searchRouter')
const cors = require('cors');
// const axios = require('axios');
const bodyParser  = require('body-parser')
const PORT = 4321;

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
  console.log('wrong place')
  });

  app.use("/movielist", router)
  app.use("/search", searchRouter)

  app.use((err, req, res, next) => {
    // err is the error object 
    // req is request object
    //reposnse object
    //next is a function that when called will pass the requuest to the next middleware in the stack 
    const defaultErr = {
      log: "Express error handler caught unknown middleware error",
      status: 500,
      message: { err: "An error occurred" },
    };
    // obj assign is used to create a new object that combines the properties of defaultErr and err
    // Properties from err are copied last, which means if err has properties that are also in defaultErr, err's properties will overwrite those in the target object.
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });
  
  app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}/`);
  });

  //Object.assign(): This is a JavaScript method used to copy the values and properties from one or more source objects to a target object. 
  //After the copying, it returns the target object.