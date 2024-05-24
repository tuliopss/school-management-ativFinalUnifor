// const mongoose = require("mongoose");

// async function main() {
//   await mongoose.connect("mongodb://0.0.0.0:27017/msteacher");
//   console.log("BD teacher conectado!");
// }

// main().catch((err) => console.log(err));

// module.exports = mongoose;
const mongoose = require("mongoose");

const conn = async () => {
  try {
    const dbConn = await mongoose.connect("mongodb://0.0.0.0:27017/msteacher");

    console.log("Banco conectado");
    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;
