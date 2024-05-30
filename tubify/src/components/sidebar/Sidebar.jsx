import { assets } from '../../assets/assets'
const Sidebar = () => {
    return (
        <div className='min-h-[100vh] px-[15px] py-[25px] inline-flex flex-col justify-between bg-slate-50'>
            {/* top */}
            <div>
                {/* menu icon */}
                <img className='w-[20px] block ml-[10px] cursor-pointer' src={assets.menu_icon} alt="" />
                {/* new chat */}
                <div className='mt-[10px] inline-flex items-center gap-[10px] py-[10px] px-[25px] 
                bg-white rounded-lg text-lg text-slate-800 cursor-pointer'>
                    <img className='w-[20px]' src={assets.plus_icon} alt="" />
                    <p>New Chat</p>
                </div>
                {/* recent */}
                <div className='flex flex-col'>
                    <p className='mt-[30px] mb-[20px]'>Recent</p>
                    {/* recent entry */}
                    <div className=''>
                        <img className='w-[20px]' src={assets.message_icon} alt="" />
                        <p>What is Angular...</p>
                    </div>
                </div>
            </div>
            {/* bottom */}
            <div>
                <div>
                    <img className='w-[20px]' src={assets.question_icon} alt="" />
                    <p>Help</p>
                </div>
                <div>
                    <img className='w-[20px]' src={assets.history_icon} alt="" />
                    <p>Activities</p>
                </div>
                <div>
                    <img className='w-[20px]' src={assets.setting_icon} alt="" />
                    <p>Settings</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
