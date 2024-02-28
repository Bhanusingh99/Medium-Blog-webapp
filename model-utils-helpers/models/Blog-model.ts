import mongoose, { Schema, Document, Types } from "mongoose";

interface IBlog extends Document {
    title: string;
    slug: string;
    description: string;
    content: string;
    authorId: Types.ObjectId;
    published: boolean;
    tag: "Dev" | "Tricks" | "Startup" | "Tech" | "ui-ux";
    likes: Types.ObjectId[];
    comments: {
        text: string;
        user: Types.ObjectId;
    }[];
}

const blogSchema: Schema<IBlog> = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    content: {
        type: String,
        required: [true, "Content is required"]
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    published: {
        type: Boolean,
        default: false
    },
    tag: {
        type: String,
        enum: ["Dev", "ui-ux", "Startup", "Tech"],
        required: [true, "Tag is required"]
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    comments: [
        {
            text: { type: String, required: true },
            user: {
                type: Schema.Types.ObjectId,
                ref: "User",
                required: true
            }
        }
    ]
});

export const BlogModel = mongoose.models.BlogModel as mongoose.Model<IBlog> || mongoose.model<IBlog>("BlogModel", blogSchema);