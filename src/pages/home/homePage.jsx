import { Link, Route, Routes } from "react-router-dom";
import Header from "../../components/header";
import { Heading1 } from "lucide-react";

export default function HomePage() {
    return (
        <div className="w-full h-screen overflow-hidden">
            <Header />
          
            <div className="h-[calc(100vh-100px)] w-full ">
                {/* 'path' prop එක ඉවත් කර ඇත */}
                <Routes>
                    <Route path="home" element={<h1>Home</h1>} />
                    <Route path="shop" element={<h1>Shop</h1>} />
                    <Route path="gallery" element={<h1>Gallery</h1>} />
                    <Route path="reviews" element={<h1>Reviews</h1>} />
                    <Route path="contact" element={<h1>Contact</h1>} />
                    
                    {/* කිසිම එකක් match නොවුණොත් පෙන්වන්න */}
                    <Route path="*" element={<h1>Page Not Found</h1>} />
                </Routes>
            </div>
        </div>
    )
}