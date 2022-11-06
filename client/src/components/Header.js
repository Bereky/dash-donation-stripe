
import { Link } from 'react-router-dom'

const Header = () => {
    return ( 
        <header className="h-20 shadow-sm relative flex-row w-100">
            <div className="absolute h-20 flex justify-center items-center w-full shadow-md sm:justify-start">
                <Link to="/">
                    <h2 className="text-3xl font-extrabold text-orangeMain cursor-pointer ml-5">DashDonation</h2>
                </Link>
            </div>
                <div className="absolute w-48 h-20 right-0 flex justify-center items-center ">
                    <button className="w-3/4 h-10 rounded-2xl border-solid border-2 text-white bg-orangeMain border-orangeMain hover:text-orangeMain hover:bg-white text-lg font-medium  duration-300 hidden sm:block">Donate</button>
                </div>
        </header>
     );
}
 
export default Header;