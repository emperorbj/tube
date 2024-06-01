import { useState } from 'react';
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { Context } from '../../context/context';



const Sidebar = () => {

    const [extend, setExtend] = useState(false)
    const {onSend,prevPrompt,setRecentPrompt } = useContext(Context)
    return (
        <div className='min-h-[100vh] px-[15px] py-[25px] inline-flex flex-col justify-between bg-slate-50'>
            {/* top */}
            <div>
                {/* menu icon */}
                <img className='w-[20px] block ml-[10px] cursor-pointer' src={assets.menu_icon} onClick={()=> setExtend(prev => !prev)} alt="" />
                {/* new chat */}
                <div className='mt-[10px] inline-flex items-center gap-[10px] py-[10px] px-[25px] 
                bg-white rounded-lg text-lg text-slate-800 cursor-pointer'>
                    <img className='w-[20px]' src={assets.plus_icon} alt="" />
                    {extend?<p>New Chat</p>:null}
                </div>
                {/* recent */}
                {extend?
                <div className='flex flex-col'>
                    <p className='mt-[30px] mb-[20px]'>Recent</p>
                    {
                        prevPrompt.map((item,index) => {
                            return(
                                <div key={item} className='flex items-start gap-[10px] p-[10px] pr-[40px] rounded-lg 
                                text-slate-700 cursor-pointer hover:bg-white'>
                                    <img className='w-[20px]' src={assets.message_icon} alt="" />
                                    <p>{item}</p>
                                </div>
                            )
                        })
                    }
                </div>
                :null}
            </div>
            {/* bottom */}
            <div className='flex flex-col'>

                <div className=' flex items-start gap-[10px] p-[10px] pr-[40px] rounded-lg 
                    text-slate-700 cursor-pointer hover:bg-white' > 
                    <img className='w-[20px]' src={assets.question_icon} alt="" />
                    {extend?<p>Help</p>:null}
                </div>

                <div className='flex items-start gap-[10px] p-[10px] pr-[40px] rounded-lg 
                    text-slate-700 cursor-pointer hover:bg-white'>
                    <img className='w-[20px]' src={assets.history_icon} alt="" />
                    {extend?<p>Activities</p>:null}
                </div>

                <div className='flex items-start gap-[10px] p-[10px] pr-[40px] rounded-lg 
                    text-slate-700 cursor-pointer hover:bg-white'>
                    <img className='w-[20px]' src={assets.setting_icon} alt="" />
                    {extend?<p>Settings</p>:null}
                </div>

            </div>
        </div>
    )
}

export default Sidebar
