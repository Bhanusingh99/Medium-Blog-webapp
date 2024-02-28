import { User } from "@/model-utils-helpers/models/user-model";
import { BlogModel } from "@/model-utils-helpers/models/Blog-model";
import { connectionToDb } from "@/model-utils-helpers/db/connectionDb";
import { NextRequest, NextResponse } from "next/server";
import { getUserId } from "@/model-utils-helpers/helper/getUserId";
import { Types } from "mongoose";

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { title, description, content, tag } = reqBody;

        // Pass the request object to getUserId and await its result
        const payload = await getUserId(request);
        console.log(payload)
        // Access user ID from the payload
        const authorId = payload?.id;

        // Ensure authorId is a valid ObjectId
        if (!Types.ObjectId.isValid(authorId)) {
            return NextResponse.json({ error: 'Invalid authorId' }, { status: 400 });
        }

        console.log("authorid", authorId);
        
        const create_Blog = await BlogModel.create({
            title,
            description,
            content,
            authorId:(authorId),
            tag:tag,
        })

        return NextResponse.json(
            { message: 'Blog created successfully',create_Blog }
            , 
            { status: 20 });
    } catch (error) {
        console.error('Error processing POST request:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
