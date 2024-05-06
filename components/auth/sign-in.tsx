import { signIn } from 'next-auth/react'
import { PiGoogleLogoFill } from "react-icons/pi";
export function SignIn() {
    return (
        <button
            onClick={() => signIn('google')}
            className='flex items-center justify-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow mt-5 ml-2 '
        >
            <PiGoogleLogoFill  className="w-5 h-5 mr-2" /> Sign in with Google</button>
    )
}