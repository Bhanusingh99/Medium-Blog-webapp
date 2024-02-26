import { User } from "@/model-utils-helpers/models/user-model";
import { connectionToDb } from "@/model-utils-helpers/db/connectionDb";
import { NextRequest, NextResponse} from "next/server";
import bcrypt from "bcrypt";
import validator from 'validator';
import jwt from 'jsonwebtoken'

connectionToDb()
export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        const{username,email,password} = reqBody;

        if(!validator.isEmail(email)){
            return NextResponse.json({message:"Email format is wrong",status:400})
        }
        if(!validator.isStrongPassword(password)){
            return NextResponse.json({message:"Password is not strong",status:400})
        }

        const user = await User.findOne({email});
        if(user){
            return NextResponse.json({message:"user already exist",status:400})
        }

        const hasedPassowrd = await bcrypt.hash(password,10);

        const createUser = await User.create({
            username,
            email,
            password:hasedPassowrd
        })


        const payload = {
            id:createUser._id,
            email:createUser.email
        }
        const token = jwt.sign(payload,process.env.JWT_SECRET_KEY!,{expiresIn:"5h"})

        const response = NextResponse.json({
            message:"user created successfully",
            success:true,
            createUser,
            token
        })
        response.cookies.set("token",token,{
            httpOnly:true
        })
        return response
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status:500})
    }
}