import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header className="w-full h-[100px] shadow-xl flex justify-center items-center relative">
            <img src="/logo.jpeg  " alt="logo" className="w-[100px] h--[100px] object-cover absolute left-2" />
            
                <Link to="/home" className="text-[25px] font-bold  m-3 ">Home</Link>
                <Link to="/Shop" className="text-[25px] font-bold m-3">Shop</Link>
                <Link to="/gallery" className="text-[25px] font-bold m-3">Gallery</Link>
                <Link to="/reviews" className="text-[25px] font-bold m-3">Reviews</Link>
                <Link to="/contact" className="text-[25px] font-bold m-3">Contact</Link>
            

        </header>
        
    )
}