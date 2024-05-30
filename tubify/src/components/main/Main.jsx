import { assets } from '../../assets/assets';

const Main = () => {
    return (
        <div className=' flex-1 min-h-[100vh] pb-[15vh] relative'>
            <div>
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
        </div>
    )
}

export default Main
