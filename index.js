import express from "express";
import cors from "cors";
import {connect} from "./src/connect.js";
import {indexRouter} from "./src/routers/index.js";

const app = express();

app.use(cors.call(null));
app.use(express.json());
app.use("/api", indexRouter)

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