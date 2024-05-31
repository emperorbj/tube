import { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Main = () => {

    const{prevPrompt,
        setPrevPrompt,
        onSend,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput} = useContext(Context)

    return (
        <div className=' flex-1 min-h-[100vh] pb-[15vh] relative'>
            <div className='flex items-center justify-between text-lg p-[20px] text-slate-900'>
                <p>Gemini</p>
                <img className='w-[50px] rounded-3xl' src={assets.user_icon} alt="" />
            </div>
            {/* container */}
            <div className=' max-w-[900px] m-auto'>
                {!showResult
                ?
                <>
                {/* greet */}
                <div className='my-[50px] mx-[0px] text-slate-400 font-bold p-[20px] '>
                    <p><span className=' bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent text-[60px]'>Hello Senior Dev,</span></p>
                    <p className='text-[40px]'>How can I help you today ?</p>
                </div>
                {/* cards */}
                <div className=' grid grid-cols-4 gap-[15px] p-[20px] mt-[-50px] mb-[50px]'>
                    {/* card */}
                    <div className='h-[200px] hover:bg-slate-100 shadow-md p-[15px] bg-slate-50 rounded-[20px] relative cursor-pointer'>
                        <p className='text-[20px] text-slate-600'>Suggest the best place to go for a holiday</p>
                        <img className=' absolute w-[40px] p-[5px] bg-white rounded-[20px] bottom-[10px] right-[10px]' src={assets.compass_icon} alt="" />
                    </div>
                    <div className='h-[200px] hover:bg-slate-100 shadow-md p-[15px] bg-slate-50 rounded-[20px] relative cursor-pointer'>
                        <p className='text-[20px] text-slate-600'>Help me to debug the following code</p>
                        <img className=' absolute w-[40px] p-[5px] bg-white rounded-[20px] bottom-[10px] right-[10px]' src={assets.code_icon} alt="" />
                    </div>
                    <div className='h-[200px] hover:bg-slate-100 shadow-md p-[15px] bg-slate-50 rounded-[20px] relative cursor-pointer'>
                        <p className='text-[20px] text-slate-600'>Summarize the following text for me</p>
                        <img className=' absolute w-[40px] p-[5px] bg-white rounded-[20px] bottom-[10px] right-[10px]' src={assets.bulb_icon} alt="" />
                    </div>
                    <div className='h-[200px] hover:bg-slate-100 shadow-md p-[15px] bg-slate-50 rounded-[20px] relative cursor-pointer'>
                        <p className='text-[20px] text-slate-600'>Generate a professional Resume for me</p>
                        <img className=' absolute w-[40px] p-[5px] bg-white rounded-[20px] bottom-[10px] right-[10px]' src={assets.message_icon} alt="" />
                    </div>
                </div>
                </>
                :
                // results
                <div className='result py-[0px] px-[5%] max-h-[70vh] overflow-y-scroll'>
                    {/* result title */}
                    <div className='my-[40px] mx-[0px] flex items-center gap-[20px]'>
                        <img className='w-[40px] rounded-3xl' src={assets.user_icon} alt="" />
                        {recentPrompt}
                    </div>
                    {/* result data */}
                    <div className='flex items-start gap-[20px]'>
                        <img src={assets.gemini_icon} alt="" />
                        {
                            loading?
                            <div className='loader w-[100%] flex flex-col gap-[10px]'>
                                <hr className=' rounded-[4px] border-none 
                                bg-white bg-gradient-to-r from-blue-600 to-green-600
                                loading' />
                                <hr />
                                <hr />
                            </div>
                            :
                            <p className='text-[20px] font-medium leading-relaxed ' dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                        
                    </div>
                </div>
                }

                <div className='absolute  mt-[80px] bottom-0 w-[100%] max-w-[900px] py-0 px-[20px] m-auto'>
                    {/* search bar */}
                    <div className=' flex items-center justify-between gap-[20px] bg-slate-100 py-[40px] px-[30px] rounded-[20px]'>
                        <input onChange={(e) => setInput(e.target.value)} value={input} className=' outline-none border-none bg-slate-100 w-[600px] text-[20px]' type="text" placeholder='Enter a prompt here' />
                        <div className='flex gap-4'>
                            <img className=' cursor-pointer' width={30}  src={assets.gallery_icon} alt="" />
                            <img className=' cursor-pointe ' width={30} src={assets.mic_icon} alt="" />
                            <img className=' cursor-pointer' onClick={() => onSend()} width={30} src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className=' my-5 mt-[15px]'>
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
