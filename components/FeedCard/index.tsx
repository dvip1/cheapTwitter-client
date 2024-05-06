"use client"

import Image from "next/image";
import ProfileImage from '@/public/user-solid.svg'
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { IoShareOutline } from "react-icons/io5";
import { useSession } from "next-auth/react";

const FeedCard: React.FC = () => {
    const { data: session, status } = useSession();
    let image = session?.user?.image || ProfileImage;

    return (
        <>
            <div className="grid grid-cols-12 overflow-hidden border-b-gray-100 border-b-2 p-2 hover:bg-slate-100 transition-all cursor-pointer">
                <div className="col-span-1 ">
                    <Image
                        src={image}
                        alt="profile-image"
                        width={50}
                        height={50}
                        className="rounded-full" // Add the rounded-full class here
                    />
                </div>
                <div className="col-span-11 ml-2 ">
                    <h5 className="">Dvip Patel</h5>
                    <p>
                        I wanted to learn how to collaborate using git & GitHub, but I couldnt find any good resources that explained it clearly. So, I decided to write this article and share it with you. Let me know what you guys think
                    </p>
                    <div className="flex justify-between mt-2 px-4 text-xl">
                        <span className="hover:text-blue-500">
                            <FaRegComment />
                        </span>
                        <span className="hover:text-blue-500">
                            <FaRetweet />
                        </span>
                        <span className="hover:text-red-500">
                            <FaRegHeart />
                        </span>
                        <span className="hover:text-blue-500">
                            <CiBookmark />
                        </span>
                        <span className="hover:text-blue-500">
                            <IoShareOutline />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeedCard;