import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl = process.env.MONGODB_URL;

  mongoose
    .connect(connectionUrl)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err));
};

export default connectToDB;
