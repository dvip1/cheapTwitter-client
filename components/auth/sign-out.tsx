"use client"

import { signOut } from "next-auth/react"
import { BsArrowRight } from "react-icons/bs"

export function SignOut() {
    return (
        <button
            onClick={() => signOut()}
            className="flex items-center justify-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow mt-5 ml-2"
        >
            <BsArrowRight className="w-5 h-5 mr-2" /> Sign Out
        </button>
    )
}