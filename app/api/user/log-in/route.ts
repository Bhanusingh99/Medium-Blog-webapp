import { User } from "@/model-utils-helpers/models/user-model";
import { connectionToDb } from "@/model-utils-helpers/db/connectionDb";
import { NextRequest, NextResponse} from "next/server";
import bcrypt from "bcrypt";
import validator from 'validator';
import jwt from 'jsonwebtoken'

connectionToDb()

export async function POST(request:NextRequest){
    try {
        const reqBody =await request.json();
        const{email,password} = reqBody;
        console.log("reqbody",reqBody)

        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({
                message:"Create a account, user does not exits",
                success:false
            },{status:400})
        }

        if(!bcrypt.compare(password,user.password)){
            return NextResponse.json({
                message:"Password is wrong",
                success:false
            },{status:400})
        }

        const payload = {
            id:user._id,
            email:user.email
        }
        const secretKey:string = process.env.JWT_SECRET_KEY!;
        const token = jwt.sign(payload,secretKey,{expiresIn:"5h"})

        const response = NextResponse.json({
            message:"user successfully logged-in",
            success:true
        });

        response.cookies.set("token",token,{
            httpOnly:true
        })
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}