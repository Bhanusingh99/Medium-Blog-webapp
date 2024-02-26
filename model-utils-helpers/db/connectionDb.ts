import mongoose from "mongoose";

export const connectionToDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://medium123:medium123@cluster0.52ntnfi.mongodb.net/Blogs");
        console.log("MongoDb is connected");
    } catch (error) {
        console.log(error)
        throw error
    }
}