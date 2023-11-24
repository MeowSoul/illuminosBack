// const connect = require("/src/connect")

import {connect} from './src/connect'

const  express = require("express");
const  cors = require("cors");

const app = express();

app.use(cors.call(null));
app.use(express.json());

async function startup() {
    try {
        await connect.authenticate();
        await connect.sync();
        app.listen(3333, ()=> console.log("Server started") );
    }
    catch (err) {
        console.log(err);
    }
}

startup();