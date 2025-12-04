"use client"; // <--- 必须加在第一行

import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, Heart, Star, ArrowRight, User, Bell } from 'lucide-react';

// 模拟数据：Material You 风格的配色
const categories = [
  { name: 'Dogs', color: 'bg-[#E8DEF8] text-[#1D192B]' }, // M3 Surface Variant
  { name: 'Cats', color: 'bg-[#FFD8E4] text-[#31111D]' },
  { name: 'Birds', color: 'bg-[#F2F0DF] text-[#1C1D00]' }, // Yellow/Greenish
  { name: 'Fish', color: 'bg-[#C4E7FF] text-[#001E2F]' },
  { name: 'Reptiles', color: 'bg-[#E6E0E9] text-[#49454F]' }, 
];

const featuredPets = [
  { id: 1, name: 'Golden Retriever', sub: 'Sunny', price: '$250', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80', rating: 4.8 },
  { id: 2, name: 'Siamese Cat', sub: 'Luna', price: '$120', image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=600&q=80', rating: 5.0 },
  { id: 3, name: 'Parrot', sub: 'Rio', price: '$80', image: 'https://i.pinimg.com/736x/e1/60/d0/e160d0cf0df920a9da2fecd8319330c0.jpg', rating: 4.2 },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-[#FFFBFE] text-[#1C1B1F] font-sans selection:bg-[#E8DEF8]">
      
      {/* --- TOP APP BAR --- */}
      <header className="fixed top-0 left-0 right-0 h-[64px] bg-[#FFFBFE]/90 backdrop-blur-sm z-50 flex items-center justify-between px-4 transition-all duration-300 border-b border-[#E7E0EC]">
        
        {/* Leading Icon */}
        <button 
          className="w-[48px] h-[48px] flex items-center justify-center rounded-full hover:bg-[#E8DEF8] active:bg-[#D0BCFF] cursor-pointer transition-colors"
          aria-label="Open menu"
        >
          <Menu className="text-[#1C1B1F]" size={24} />
        </button>

        {/* Headline */}
        <h1 className="text-[22px] text-[#1C1B1F] tracking-normal font-normal">
          JPetStore
        </h1>

        {/* Trailing Icons */}
        <div className="flex gap-2">
          <button 
            className="w-[48px] h-[48px] flex items-center justify-center rounded-full hover:bg-[#E8DEF8] active:bg-[#D0BCFF] cursor-pointer transition-colors"
            aria-label="User profile"
          >
            <User size={24} className="text-[#49454F]" />
          </button>
          <button 
            className="w-[48px] h-[48px] rounded-full border border-[#E7E0EC] overflow-hidden transition-transform hover:scale-105"
            aria-label="User avatar"
          >
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" 
              alt="User profile picture"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="pt-[88px] px-4 max-w-lg mx-auto md:max-w-3xl lg:max-w-5xl pb-[100px]">
        
        {/* --- SEARCH --- */}
        <div className="relative mb-8 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="text-[#49454F]" size={24} />
          </div>
          <input
            type="text"
            className="block w-full p-4 pl-14 text-base text-[#1C1B1F] bg-[#ECE6F0] rounded-[28px] border-none focus:ring-2 focus:ring-[#D0BCFF] focus:bg-[#E8DEF8] transition-colors placeholder-[#49454F]"
            placeholder="Search pets, food..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            className="absolute inset-y-0 right-4 flex items-center bg-[#1D192B] rounded-full p-3 shadow-sm hover:bg-[#2D1B3D] transition-colors"
            aria-label="Search"
          >
            <ArrowRight size={20} className="text-white" />
          </button>
        </div>

        {/* --- HERO CARD (Material 3 Style) --- */}
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-[28px] overflow-hidden mb-10 shadow-md transition-all hover:shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80"
            alt="Happy pets - Find your new best friend"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-6 flex flex-col justify-end items-start">
            <h2 className="text-white text-[32px] leading-[40px] font-normal mb-1">
              Find your new
            </h2>
            <h3 className="text-white text-[32px] leading-[40px] font-medium mb-4">
              Best Friend
            </h3>
            <button className="bg-[#6750A4] text-white px-6 py-3 rounded-full text-sm font-medium tracking-wide shadow-lg hover:bg-[#7C3AED] active:scale-95 transition-transform" aria-label="Adopt a pet now">
              Adopt now
            </button>
          </div>
        </div>

        {/* --- CATEGORIES (Horizontal Scroll) --- */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4 px-1">
            <h4 className="text-[22px] text-[#1C1B1F] font-normal">Categories</h4>
            <button 
              className="w-[48px] h-[48px] rounded-full bg-[#E8DEF8] hover:bg-[#D0BCFF] flex items-center justify-center transition-colors shadow-sm"
              aria-label="View all categories"
            >
              <ArrowRight size={20} className="text-[#1D192B]" />
            </button>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x">
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                className="flex flex-col items-center gap-1.5 snap-center shrink-0 cursor-pointer group transition-all"
                aria-label={`View ${cat.name} pets`}
              >
                <div className={`${cat.color} w-[64px] h-[64px] rounded-[20px] flex items-center justify-center transition-all group-hover:rounded-[28px] group-hover:scale-105 group-hover:shadow-md`}>
                  <span className="text-xl font-medium opacity-80">{cat.name.charAt(0)}</span>
                </div>
                <span className="text-xs font-medium text-[#49454F] tracking-wide">{cat.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* --- FEATURED LIST (Cards) --- */}
        <section>
          <h4 className="text-[22px] text-[#1C1B1F] font-normal mb-4 px-1">Adopt Me</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredPets.map((pet) => (
              <div key={pet.id} className="bg-[#F3EDF7] p-0 rounded-[24px] overflow-hidden cursor-pointer group relative transition-colors hover:bg-[#ECE6F0] hover:shadow-md">
                <div className="flex h-32">
                  <div className="w-[120px] h-full shrink-0">
                    <img 
                      src={pet.image} 
                      alt={`${pet.name} - ${pet.sub}`}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="text-lg text-[#1C1B1F] font-medium leading-tight">{pet.name}</h5>
                        <p className="text-sm text-[#49454F] mt-1">{pet.sub}</p>
                      </div>
                      <button 
                        className="w-[48px] h-[48px] flex items-center justify-center rounded-full hover:bg-[#FFE0E6] text-[#49454F] hover:text-[#B3261E] transition-colors"
                        aria-label="Add to favorites"
                      >
                        <Heart size={20} />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <span className="text-[16px] font-bold text-[#1C1B1F]">{pet.price}</span>
                      
                      <button 
                        className="bg-[#6750A4] w-[48px] h-[48px] rounded-[12px] flex items-center justify-center hover:bg-[#7C3AED] active:bg-[#5A4A8A] transition-colors shadow-md text-white"
                        aria-label="Add to cart"
                      >
                        <ShoppingBag size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-3 left-[130px] flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md shadow-sm">
                  <Star size={12} className="fill-[#FFD8E4] text-[#FFD8E4]" /> 
                  <span className="text-[12px] text-[#1C1B1F] font-bold">{pet.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- FAB (Floating Action Button) --- */}
      <button 
        className="fixed bottom-24 right-4 w-[56px] h-[56px] bg-[#6750A4] rounded-[16px] shadow-lg flex items-center justify-center z-40 text-white hover:shadow-xl active:bg-[#5A4A8A] transition-all"
        aria-label="Add a new pet"
      >
        <span className="text-3xl leading-none">+</span> 
      </button>

      {/* --- NAVIGATION BAR --- */}
      <nav className="fixed bottom-0 w-full bg-[#F3EDF7] h-[88px] flex justify-around items-center z-50 pb-2 border-t border-[#E7E0EC]">
        {/* Active Item */}
        <button 
          className="flex flex-col items-center gap-1 transition-all"
          aria-label="Explore"
        >
          <div className="bg-[#D0BCFF] w-[56px] h-[48px] rounded-full flex items-center justify-center shadow-sm">
            <Search size={24} className="text-[#1D192B]" />
          </div>
          <span className="text-[12px] font-bold text-[#1D192B]">Explore</span>
        </button>

        {/* Inactive Item */}
        <button 
          className="flex flex-col items-center gap-1 hover:opacity-100 transition-opacity cursor-pointer"
          aria-label="Favorites"
        >
          <div className="h-[48px] w-[56px] flex items-center justify-center rounded-full hover:bg-[#ECE6F0] transition-colors">
            <Heart size={24} className="text-[#79747E]" />
          </div>
          <span className="text-[12px] font-medium text-[#79747E]">Favorites</span>
        </button>

        {/* Inactive Item */}
        <button 
          className="flex flex-col items-center gap-1 hover:opacity-100 transition-opacity cursor-pointer"
          aria-label="Alerts with notification"
        >
          <div className="h-[48px] w-[56px] flex items-center justify-center rounded-full hover:bg-[#ECE6F0] transition-colors relative">
            <Bell size={24} className="text-[#79747E]" />
            <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#B3261E] rounded-full" aria-hidden="true"></div>
          </div>
          <span className="text-[12px] font-medium text-[#79747E]">Alerts</span>
        </button>
      </nav>
    </div>
  );
}