const mongoose = require("mongoose");

const conn = async () => {
  try {
    const dbConn = await mongoose.connect("mongodb://0.0.0.0:27017/msstudent");

    console.log("Banco conectado");
    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;
