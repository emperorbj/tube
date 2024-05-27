import { SlHome } from "react-icons/sl";
import { FaLaptopCode } from "react-icons/fa";
import { LuMusic4 } from "react-icons/lu";
import { PiGooglePodcastsLogoBold } from "react-icons/pi";
import { IoSchoolOutline, IoGameControllerOutline } from "react-icons/io5";
import { MdLiveTv,MdOutlineSportsVolleyball } from "react-icons/md";
const SideBar = () => {
    return (
        <div className="bg-green-500 w-[220px] h-screen flex flex-col gap-6 items-center pt-[30px]">
            <div className="flex pl-[30px] gap-2 bg-orange-300 py-[10px] w-[180px] rounded-md ">
                <SlHome size={26} />
                <h2 className="text-xl mr-2 mt-1">New</h2>
            </div> 
            <div className="flex pl-[30px] gap-2 bg-orange-300 py-[10px] w-[180px] rounded-md ">
                <FaLaptopCode size={28} />
                <h2 className="text-xl mr-2">channel-1</h2>
            </div>
            <div className="flex pl-[30px] gap-2 bg-orange-300 py-[10px] w-[180px] rounded-md ">
                <FaLaptopCode size={28} />
                <h2 className="text-xl mr-2">channel-2</h2>
            </div> 
            <div className="flex pl-[30px] gap-2 bg-orange-300 py-[10px] w-[180px] rounded-md ">
                <LuMusic4 size={28} />
                <h2 className="text-xl mr-2">Music</h2>
            </div> 
            <div className="flex pl-[30px] gap-2 bg-orange-300 py-[10px] w-[180px] rounded-md ">
                <PiGooglePodcastsLogoBold size={28} />
                <h2 className="text-xl mr-2">Podcast</h2>
            </div> 
            <div className="flex pl-[30px] gap-2 bg-orange-300 py-[10px] w-[180px] rounded-md ">
                <IoSchoolOutline size={28} />
                <h2 className="text-xl mr-2">Education</h2>
            </div> 
            <div className="flex pl-[30px] gap-2 bg-orange-300 py-[10px] w-[180px] rounded-md ">
                <MdLiveTv  size={28}/>
                <h2 className="text-xl mr-2">Live</h2>
            </div> 
            <div className="flex pl-[30px] gap-2 bg-orange-300 py-[10px] w-[180px] rounded-md ">
                <IoGameControllerOutline size={28} />
                <h2 className="text-xl mr-2">Games</h2>
            </div> 
            <div className="flex pl-[30px] gap-2 bg-orange-300 py-[10px] w-[180px] rounded-md ">
                <MdOutlineSportsVolleyball size={28} />
                <h2 className="text-xl mr-2">Sports</h2>
            </div> 
        </div>
    )
}

export default SideBar
