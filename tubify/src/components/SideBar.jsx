import { SlHome } from "react-icons/sl";
import { FaLaptopCode } from "react-icons/fa";
import { LuMusic4 } from "react-icons/lu";
import { PiGooglePodcastsLogoBold } from "react-icons/pi";
import { IoSchoolOutline, IoGameControllerOutline } from "react-icons/io5";
import { MdLiveTv,MdOutlineSportsVolleyball } from "react-icons/md";
const SideBar = () => {
    return (
        <div className="bg-green-500 w-[300px] h-screen flex flex-col gap-6">
            <div className="flex pl-[30px] gap-2">
                <SlHome size={28} />
                <h2 className="text-xl mr-2 mt-1">Home</h2>
            </div> 
            <div className="flex pl-[30px] gap-2">
                <FaLaptopCode size={28} />
                <h2 className="text-xl mr-2">channel-1</h2>
            </div>
            <div className="flex pl-[30px] gap-2">
                <FaLaptopCode size={28} />
                <h2 className="text-xl mr-2">channel-2</h2>
            </div> 
            <div className="flex pl-[30px] gap-2">
                <LuMusic4 size={28} />
                <h2 className="text-xl mr-2">Music</h2>
            </div> 
            <div className="flex pl-[30px] gap-2">
                <PiGooglePodcastsLogoBold size={28} />
                <h2 className="text-xl mr-2">Podcast</h2>
            </div> 
            <div className="flex pl-[30px] gap-2">
                <IoSchoolOutline size={28} />
                <h2 className="text-xl mr-2">Education</h2>
            </div> 
            <div className="flex pl-[30px] gap-2">
                <MdLiveTv  size={28}/>
                <h2 className="text-xl mr-2">Live</h2>
            </div> 
            <div className="flex pl-[30px] gap-2">
                <IoGameControllerOutline size={28} />
                <h2 className="text-xl mr-2">Games</h2>
            </div> 
            <div className="flex pl-[30px] gap-2">
                <MdOutlineSportsVolleyball size={28} />
                <h2 className="text-xl mr-2">Sports</h2>
            </div> 
        </div>
    )
}

export default SideBar
