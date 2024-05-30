import { assets } from '../../assets/assets';

const Main = () => {
    return (
        <div className=' flex-1 min-h-[100vh] pb-[15vh] relative'>
            <div className='flex items-center justify-between text-lg p-[20px] text-slate-900'>
                <p>Gemini</p>
                <img className='w-[50px] rounded-3xl' src={assets.user_icon} alt="" />
            </div>
            {/* container */}
            <div className=' max-w-[900px] m-auto'>
                {/* greet */}
                <div className='my-[50px] mx-[0px] text-slate-400 font-bold p-[20px] '>
                    <p><span className=' bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent text-[60px]'>Hello Senior Dev,</span></p>
                    <p className='text-[40px]'>How can I help you today?</p>
                </div>
                {/* cards */}
                <div className=' grid grid-cols-4 gap-[15px] p-[20px]'>
                    {/* card */}
                    <div className='h-[200px] shadow-md p-[15px] bg-slate-50 rounded-[20px] relative cursor-pointer'>
                        <p className='text-[20px] text-slate-600'>Suggest the best place to go for a holiday</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className='h-[200px] shadow-md p-[15px] bg-slate-50 rounded-[20px] relative cursor-pointer'>
                        <p className='text-[20px] text-slate-600'>Help me to debug the following code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                    <div className='h-[200px] shadow-md p-[15px] bg-slate-50 rounded-[20px] relative cursor-pointer'>
                        <p className='text-[20px] text-slate-600'>Summarize the following text for me</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className='h-[200px] shadow-md p-[15px] bg-slate-50 rounded-[20px] relative cursor-pointer'>
                        <p className='text-[20px] text-slate-600'>Generate a professional Resume for me</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
