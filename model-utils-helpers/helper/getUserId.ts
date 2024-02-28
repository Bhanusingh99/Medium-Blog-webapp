import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server';
export const getUserId = async (request: NextRequest) => {
    let cookie = request.cookies.get('token')?.value;

    if (cookie) {
        try {
            const payload = await jwt.verify(cookie, process.env.JWT_SECRET_KEY!);
            return payload;
        } catch (error) {
            console.error('Error verifying JWT:', error);
            return null;
        }
    } else {
        console.error('Token cookie not found');
        return null;
    }
}
