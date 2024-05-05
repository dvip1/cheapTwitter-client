import { FaTwitter } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaBookmark } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

interface TwitterSidebarButton {
    title: string;
    icons: React.ReactNode;
}
const sideBarMenuItems: TwitterSidebarButton[] = [
    {
        title: 'Home',
        icons: <IoMdHome />
    },
    {
        title: "Explore",
        icons: <FaSearch />
    },
    {
        title: "Notification",
        icons: <FaBell />
    },
    {
        title: "Messages",
        icons: <IoMdMail />
    },
    {
        title: "Bookmark",
        icons: <FaBookmark />
    },
    {
        title: "Profile",
        icons: <FaUser />
    }
]
export default function SideBar() {
    return (
        <div className="col-span-3 mt-8 flex flex-col items-start lg:pl-6">
            <div className="text-4xl h-fit hover:bg-slate-200 rounded-full p-2 cursor-pointer transition-all">
                <FaTwitter className="" />
            </div>
            <div>
                <ul>
                    {sideBarMenuItems.map(item =>
                        <li key={item.title} className="flex justify-start items-center gap-2 mt-2 hover:bg-slate-200 pr-5 py-2 pl-2 rounded-2xl w-fit cursor-pointer">
                            <span className="text-2xl xl:text-3xl text-slate-800">{item.icons}</span><span className="text-base font-medium xl:text-lg">{item.title}</span>
                        </li>
                    )}
                </ul>
                <button className="bg-blue-500 px-10 py-3 rounded-3xl mt-4 hover:shadow-lg shadow-inner text-md text-slate-800  ">
                    Tweet
                </button>
            </div>
        </div>
    )
}