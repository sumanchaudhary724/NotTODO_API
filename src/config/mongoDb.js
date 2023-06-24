import mongoose from "mongoose";

export const mongoConnect = async () => {
  try {
    const dbLink =
      "mongodb+srv://sumanchaudhary724:ccscuEnrRknVdyxF@cluster0.au3r6oj.mongodb.net/?retryWrites=true&w=majority";
    // const con = await mongoose.connect("mongodb://0.0.0.0:27017/nottododb");
    const con = await mongoose.connect(dbLink);
    con && console.log("mongo is connected");
  } catch (error) {
    console.log(error);
  }
};
