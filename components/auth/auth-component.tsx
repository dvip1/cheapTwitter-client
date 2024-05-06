"use client"; // Indicates this component should only execute in the browser

import { useSession } from "next-auth/react"; // Import useSession
import { SignIn } from "./sign-in";
import { SignOut } from "./sign-out";

export default function AuthComponent() {
    const { data: session, status } = useSession(); // Use useSession() hook to access session data
    if (status === "loading") {
        return <div>Loading...</div>; // Loading state
    }

    if (session) {
        return <SignOut />;
    }

    return <SignIn />;
}