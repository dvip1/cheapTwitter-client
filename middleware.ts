import { NextRequest, NextResponse } from 'next/server';
import { auth } from './auth';

export async function middleware(req: NextRequest) {
    const session = await auth();
    if (!session) {
        // Not authenticated
        console.log("Not authenticated");
    }
    else{
        console.log("Authenticated")
    }
    // Continue to the requested page as the user is authenticated
    return NextResponse.next();
}

export default middleware;