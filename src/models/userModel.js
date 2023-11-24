import {DataTypes} from "sequelize";
import {connect} from "../connect.js";

export const userModel  = connect.define("users",{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true,unique:true},
    login:{type:DataTypes.STRING,unique: true},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.ENUM("admin", "user"),defaultValue:"user"}
},
    {
        timestamps: false
    }
)