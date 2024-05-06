import SideBar from "@/components/Navigation/sideBar";
import FeedCard from "@/components/FeedCard";
import AuthComponent from "@/components/auth/auth-component";

export default function HomeComponent() {
    return (
        <>
            <div className="grid grid-cols-12 h-screen w-screen ml-6 overflow-hidden ">

                <SideBar />
                <div className="col-span-6 border-x-2 border-x-slate-100 h-screen overflow-scroll">
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                </div>
                <div className="col-span-3 ">
                    <AuthComponent />
                </div>
            </div>
        </>
    )
}