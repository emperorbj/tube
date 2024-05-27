import SideBar from './SideBar';
import VideoDetails from './VideoDetails';
import { useEffect, useState } from "react";

import { fetchFromAPI } from '../utils/fetch';
const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState(null);
    useEffect(() => {
        setVideos(null);
    
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => setVideos(data.items))
        }, [selectedCategory]);
    return (
        <div className=" w-full h-screen bg-blue-600">
            <div className='flex gap-4 mt-1'>
                    <SideBar/>
                    <VideoDetails/>
            </div>
        </div>
    )
}

export default Feed
