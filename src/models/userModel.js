const {connect} = require("../connect")
const {DataTypes} = require("sequelize");
const userModel  = connect.define("users",{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true,unique:true},
    login:{type:DataTypes.STRING,unique: true},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.ENUM("admin", "user"),defaultValue:"user"}
})