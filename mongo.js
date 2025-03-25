const mongoose = require("mongoose");

const connectDB = async () => {
  try {

    if(!process.env.MONGO_URI){
        console.log(process.env);
        console.log(process.env.MONGO_URI);
        console.log(`Mongo uri not loaded`);
        process.exit(1);
    }
    console.log(process.env);
    console.log(process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB Connection Failed", err);
    process.exit(1);
  }
};

module.exports = connectDB;

