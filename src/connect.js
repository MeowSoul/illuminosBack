import {Sequelize} from "sequelize";

export const connect = new Sequelize({
    storage:"database.db",
    dialect:"sqlite"
});


