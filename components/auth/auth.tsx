'use client';
import { GoogleLogin } from '@react-oauth/google';
export default function AuthSideBar() {
    return (
        <>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />;        </>
    )
}