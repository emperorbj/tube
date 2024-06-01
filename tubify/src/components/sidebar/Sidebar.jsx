import { useState } from 'react';
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { Context } from '../../context/context';
import './side.css';


const Sidebar = () => {

    const [extend, setExtend] = useState(false)
    const { onSend, prevPrompt, newChat } = useContext(Context)
    return (
        <div className='sidebar dark:bg-slate-900'>
            {/* top */}
            <div>
                {/* menu icon */}
                <img className='w-[30px] block ml-[10px]  cursor-pointer' src={assets.menu_icon} onClick={()=> setExtend(prev => !prev)} alt="" />
                {/* new chat */}
                <div onClick={() => newChat()} className='mt-[10px] inline-flex items-center gap-[10px] py-[10px] px-[25px] 
                bg-blue-300 shadow-blue-300 shadow-lg rounded-xl text-lg text-slate-800 cursor-pointer'>
                    <img className='w-[20px]' src={assets.plus_icon} alt="" />
                    {extend?<p>New Chat</p>:null}
                </div>
                {/* recent */}
                {extend?
                <div className='flex flex-col'>
                    <p className='mt-[30px] mb-[20px] text-[24px] dark:text-slate-200'>Recent</p>
                    {
                        prevPrompt.map((item) => {
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
                    text-slate-700 cursor-pointer hover:bg-blue-300 hover:shadow-blue-300 hover:shadow-lg' > 
                    <img className='w-[20px]' src={assets.question_icon} alt="" />
                    {extend?<p className=' font-bold'>Help</p>:null}
                </div>

                <div className='flex items-start gap-[10px] p-[10px] pr-[40px] rounded-lg 
                    text-slate-700 cursor-pointer hover:bg-blue-300 hover:shadow-blue-300 hover:shadow-lg'>
                    <img className='w-[20px]' src={assets.history_icon} alt="" />
                    {extend?<p className=' font-bold'>Activities</p>:null}
                </div>

                <div className='flex items-start gap-[10px] p-[10px] pr-[40px] rounded-lg 
                    text-slate-700 cursor-pointer hover:bg-blue-300 hover:shadow-blue-300 hover:shadow-lg'>
                    <img className='w-[20px]' src={assets.setting_icon} alt="" />
                    {extend?<p className=' font-bold'>Settings</p>:null}
                </div>

            </div>
        </div>
    )
}

export default Sidebar
