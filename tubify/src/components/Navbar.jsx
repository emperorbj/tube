import { FaSearch } from "react-icons/fa";
import Logo from '../assets/vecteezy_metallic-style-logo_33659577.png';


const Navbar = () => {
    return (
            <div className="w-full h-[75px] bg-purple-600 flex justify-between">
                <div>
                    <img className="ml-[20px] mt-1 " src={Logo} alt="logo" width={60} height={50} />
                </div>
                <div>
                    <div className="flex bg-white mr-[30px] py-[9px] pl-[40px] px-[20px] mt-3 rounded-lg">
                        <input className=" text-xl border-none outline-none bg-none mr-2" type="text" placeholder="search" />
                        <FaSearch size={20}/>
                    </div>
                </div>
            </div>
    )
}

export default Navbar
