import { LayoutDashboard, Package, ShoppingCart, Star, Users } from "lucide-react";
import { Route, Routes, Link } from "react-router-dom";

export default function AdminPage() {
  return (
    <div className='w-full h-screen flex'>
      {/* Sidebar */}
      <div className='w-[400px] h-full bg-slate-900 text-white flex flex-col p-4 gap-4'>
        <h1 className='text-2xl font-bold mb-8 text-center text-pink-500'>Senithi Admin Panel</h1>

    
        <Link to="/admin" className='w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-800 rounded-lg transition-all text-lg font-semibold'>
          <LayoutDashboard size={24} /> Dashboard
        </Link>

        <Link to="/admin/orders" className='w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-800 rounded-lg transition-all text-lg font-semibold'>
          <ShoppingCart size={24} /> Orders
        </Link>

        <Link to="/admin/products" className='w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-800 rounded-lg transition-all text-lg font-semibold'>
          <Package size={24} /> Products
        </Link>

        <Link to="/admin/reviews" className='w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-800 rounded-lg transition-all text-lg font-semibold'>
          <Star size={24} /> Reviews
        </Link>

        <Link to="/admin/users" className='w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-800 rounded-lg transition-all text-lg font-semibold'>
          <Users size={24} /> Users
        </Link>
      </div>

      {/* Main Content Area */}
      <div className='w-full bg-slate-50 p-8 overflow-y-auto'>
        <Routes>
          <Route path="/" element={<div><h2 className='text-3xl font-bold text-slate-800'>Welcome Back!</h2></div>}/>
          <Route path="/orders" element={<h1 className="text-2xl font-bold">Manage Orders</h1>} />
          <Route path="/products" element={<h1 className="text-2xl font-bold">Manage Products</h1>} />
          <Route path="/reviews" element={<h1 className="text-2xl font-bold">Manage Reviews</h1>} />
          <Route path="/users" element={<h1 className="text-2xl font-bold">Manage Users</h1>} />
        </Routes>
      </div>
    </div>
  )
}