import { LayoutDashboard, Package, ShoppingCart, Star, Users } from "lucide-react";

export default function AdminPage(){
    return(
        <div className='w-full h-screen flex'>
      {/* Sidebar */}
      <div className='w-[400px] h-full bg-slate-900 text-white flex flex-col p-4 gap-4'>
        <h1 className='text-2xl font-bold mb-8 text-center text-pink-500'>Senithi Admin Panel</h1>

        <button className='w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-800 rounded-lg transition-all text-lg font-semibold'>
          <LayoutDashboard size={24} /> Dashboard
        </button>

        <button className='w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-800 rounded-lg transition-all text-lg font-semibold'>
          <ShoppingCart size={24} /> Orders
        </button>

        <button className='w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-800 rounded-lg transition-all text-lg font-semibold'>
          <Package size={24} /> Products
        </button>

        <button className='w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-800 rounded-lg transition-all text-lg font-semibold'>
          <Star size={24} /> Reviews
        </button>

        <button className='w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-800 rounded-lg transition-all text-lg font-semibold'>
          <Users size={24} /> Users
        </button>
      </div>

      
      <div className='w-full bg-slate-50 pl-8'>
        <h2 className='text-3xl font-bold text-slate-800'>Welcome Back!</h2>
        
      </div>
    </div>
    )
}