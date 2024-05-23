import SideBar from './SideBar';
import VideoDetails from './VideoDetails';

const Feed = () => {
    return (
        <div className=" w-full h-screen bg-blue-600">
            <div className='flex gap-4 mt-3'>
                    <SideBar/>
                    <VideoDetails/>
            </div>
        </div>
    )
}

export default Feed
