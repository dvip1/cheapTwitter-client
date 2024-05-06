// Import the useSession hook from next-auth/react
import { auth } from "@/auth";
export default async function Testing() {
    // Use the useSession hook to get the session data
    const session = await auth();
    console.log(`This is session data: ${session?.expires}-- ${session?.user?.email}`);
    return <>
        <div>
            This is session information
        </div>
    </>

}