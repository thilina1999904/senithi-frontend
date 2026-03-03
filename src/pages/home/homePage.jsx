import { Link, Route, Routes } from "react-router-dom";
import Header from "../../components/header";
import { Heading1 } from "lucide-react";
import Home from "./home";
import Shop from "./shop";
import Reviews from "./reviews";
import Contact from "./contact";
import Gallery from "./gallery";
import Error from "./error";

export default function HomePage() {
    return (
        <div className="w-full h-screen overflow-hidden">
            <Header />

            <div className="h-[calc(100vh-100px)] w-full ">

                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/*" element={<Error />} />
                </Routes>

            </div>
        </div>
    )
}