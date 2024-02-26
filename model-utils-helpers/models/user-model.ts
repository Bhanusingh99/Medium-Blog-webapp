import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: [true, "username is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    }
});

export const User = mongoose.models.user || mongoose.model<IUser>("user", userSchema);
