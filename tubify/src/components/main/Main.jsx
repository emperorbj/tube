import { useContext, useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';
import './main.css'

const Main = () => {
    const[theme, setTheme] = useState('light')


    useEffect(() => {
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }
    },[theme])

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark'? 'light': 'dark')
    }
    const{
        
        onSend,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput} = useContext(Context)

    return (
        <div className='flex-1 min-h-[100vh] pb-[15vh] relative dark:bg-slate-950'>
            <div className='flex items-center justify-between text-lg p-[20px] text-slate-900'>
                <p className='bg-gradient-to-r from-blue-500 to-slate-500 bg-clip-text text-transparent text-[23px]'>Afribot</p>
                <div className='flex gap-[60px]'>
                    <img className='w-[40px] h-[40px] mt-[10px] cursor-pointer'  src={assets.sun} onClick={handleThemeSwitch} alt="" />
                    <img className='rounded-[50%] w-[60px] h-[60px]' src={assets.user_icon} alt="" />
                </div>
                
            </div>
            {/* container */}
            <div className=' max-w-[900px] m-auto'>
                {!showResult
                ?
                <>
                {/* greet */}
                <div className='my-[50px] mx-[0px] text-slate-400 font-bold p-[20px] '>
                    <p><span className=' bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-[60px]'>Hello Senior Dev,</span></p>
                    <p className='text-[40px]'>How can I help you today ?</p>
                </div>
                {/* cards */}
                <div className=' grid grid-cols-1 gap-[10px] mb-[220px] p-[40px] sm:mb-[120px] sm:gap-[10px] sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-[15px] md:gap-[15px] lg:p-[20px] md:p-[20px] lg:mt-[-50px] lg:mb-[50px]'>
                    {/* card */}
                    <div className='h-[200px] hover:bg-slate-100 shadow-md p-[15px] bg-slate-50 dark:bg-slate-700 rounded-[20px] relative cursor-pointer'>
                        <p className='text-[20px] text-slate-600 dark:text-slate-200 '>Suggest the best place to go for a holiday</p>
                        <img className=' absolute w-[40px] p-[5px] bg-white dark:bg-blue-300 dark:shadow-lg dark:shadow-blue-300 rounded-[20px] bottom-[10px] right-[10px]' src={assets.compass_icon} alt="" />
                    </div>
                    <div className='h-[200px] hover:bg-slate-100 shadow-md p-[15px] bg-slate-50 dark:bg-slate-700 rounded-[20px] relative cursor-pointer'>
                        <p className='text-[20px] text-slate-600 dark:text-slate-200'>Help me to debug the following code</p>
                        <img className=' absolute w-[40px] p-[5px] bg-white dark:bg-blue-300 dark:shadow-lg dark:shadow-blue-300 rounded-[20px] bottom-[10px] right-[10px]' src={assets.code_icon} alt="" />
                    </div>
                    <div className='h-[200px] hover:bg-slate-100 shadow-md p-[15px] bg-slate-50 dark:bg-slate-700 rounded-[20px] relative cursor-pointer'>
                        <p className='text-[20px] text-slate-600 dark:text-slate-200'>Summarize the following text for me</p>
                        <img className=' absolute w-[40px] p-[5px] bg-white dark:bg-blue-300 dark:shadow-lg dark:shadow-blue-300 rounded-[20px] bottom-[10px] right-[10px]' src={assets.bulb_icon} alt="" />
                    </div>
                    <div className='h-[200px] hover:bg-slate-100 shadow-md p-[15px] bg-slate-50 dark:bg-slate-700 rounded-[20px] relative cursor-pointer'>
                        <p className='text-[20px] text-slate-600 dark:text-slate-200'>Generate a professional Resume for me</p>
                        <img className=' absolute w-[40px] p-[5px] bg-white dark:bg-blue-300 dark:shadow-lg dark:shadow-blue-300 rounded-[20px] bottom-[10px] right-[10px]' src={assets.message_icon} alt="" />
                    </div>
                </div>
                </>
                :
                // results
                <div className='result py-[0px] px-[5%] max-h-[70vh] overflow-y-scroll'>
                    {/* result title */}
                    <div className='my-[40px] mx-[0px] flex items-center dark:text-white gap-[20px]'>
                        <img className='w-[45px] rounded-3xl' src={assets.user_icon} alt="" />
                        {recentPrompt}
                    </div>
                    {/* result data */}
                    <div className='flex items-start gap-[20px] mb-[40px] pb-[40px]'>
                        <img src={assets.gemini_icon} alt="" />
                        {
                            loading?
                            <div className='loader w-[100%] flex flex-col gap-[20px]'>
                                <hr className='rounded-[50px] border-none 
                                bg-white bg-gradient-to-r from-blue-500 to-green-500 
                                loading' />
                                <hr className=' rounded-[50px] border-none 
                                bg-white bg-gradient-to-r from-blue-500 to-green-500 
                                loading' />
                                <hr className=' rounded-[50px] border-none 
                                bg-white bg-gradient-to-r from-blue-500 to-green-500 
                                loading' />
                            </div>
                            :
                            <p className='text-[20px] dark:text-white 
                            font-medium leading-relaxed pb-[50px]' dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                        
                    </div>
                </div>
                }

                <div className='absolute  mt-[80px] bottom-0 
                w-[100%]  max-w-[900px] py-0 px-[20px] m-auto'>
                    {/* search bar */}
                    <div className=' flex items-center justify-between 
                    gap-2 lg:gap-[20px] dark:bg-slate-700  
                    bg-slate-100 py-[20px] px-[10px] 
                    lg:py-[40px] lg:px-[30px] rounded-[20px]'>
                        <input onChange={(e) => setInput(e.target.value)} value={input} className=' outline-none border-none bg-slate-100 dark:bg-slate-700 w-[200px] sm:w-[300px] lg:w-[600px] text-[20px]' type="text" placeholder='Enter a prompt here' />
                        <div>
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
