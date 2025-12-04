"use client";

import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, Heart, Star, ArrowRight, User, Bell } from 'lucide-react';

const categories = [
  { name: 'Dogs', color: 'bg-[#E8DEF8] text-[#1D192B]' },
  { name: 'Cats', color: 'bg-[#FFD8E4] text-[#31111D]' },
  { name: 'Birds', color: 'bg-[#F2F0DF] text-[#1C1D00]' },
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
  const [activeNav, setActiveNav] = useState('explore');

  return (
    <div className="min-h-screen bg-[#FFFBFE] text-[#1C1B1F] font-sans selection:bg-[#E8DEF8] pb-24">
      
      {/* TOP APP BAR */}
      <header className="fixed top-0 left-0 right-0 bg-[#FFFBFE]/95 backdrop-blur-md z-50 flex items-center justify-between px-4 py-3 border-b border-[#E7E0EC] shadow-sm">
        
        {/* Leading Icon */}
        <button 
          className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#F4EFF4] active:bg-[#E8DEF8] cursor-pointer transition-colors"
          aria-label="Menu"
          type="button"
        >
          <Menu className="text-[#1C1B1F]" size={24} />
        </button>

        {/* Headline */}
        <h1 className="text-xl font-semibold text-[#1C1B1F] tracking-tight">
          Jpetstore
        </h1>

        {/* Trailing Icons */}
        <div className="flex gap-2 items-center">
          <button 
            className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#F4EFF4] active:bg-[#E8DEF8] cursor-pointer transition-colors"
            aria-label="User profile"
            type="button"
          >
            <User size={24} className="text-[#49454F]" />
          </button>
          <button 
            className="w-12 h-12 rounded-full border-2 border-[#E7E0EC] overflow-hidden hover:border-[#D0BCFF] transition-colors"
            aria-label="Profile picture"
            type="button"
          >
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" 
              alt="User profile"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="pt-24 px-4 max-w-lg mx-auto md:max-w-3xl lg:max-w-5xl">
        
        {/* SEARCH */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="text-[#49454F]" size={24} />
          </div>
          <input
            type="text"
            className="block w-full px-4 py-3 pl-14 text-base text-[#1C1B1F] bg-[#ECE6F0] rounded-full border-2 border-transparent focus:border-[#D0BCFF] focus:bg-white focus:outline-none transition-all placeholder-[#9CA3AF]"
            placeholder="Search pets, food..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search pets"
          />
          <button 
            className="absolute inset-y-0 right-3 flex items-center justify-center"
            aria-label="Search"
            type="button"
          >
            <div className="bg-[#1D192B] rounded-full p-2 cursor-pointer shadow-sm hover:bg-[#2D2230] transition-colors">
              <ArrowRight size={16} className="text-white" />
            </div>
          </button>
        </div>

        {/* HERO CARD */}
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden mb-10 shadow-md hover:shadow-lg transition-shadow">
          <img 
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80"
            alt="Featured pets"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6 flex flex-col justify-end items-start">
            <h2 className="text-white text-3xl md:text-4xl leading-tight font-semibold mb-2">
              Find your new
            </h2>
            <h3 className="text-[#D0BCFF] text-3xl md:text-4xl leading-tight font-bold mb-6">
              Best Friend
            </h3>
            <button 
              className="bg-[#D0BCFF] text-[#1D192B] px-8 py-3 rounded-full text-sm font-semibold tracking-wide shadow-md hover:bg-[#E8DEF8] active:scale-95 transition-all"
              type="button"
            >
              Adopt Now
            </button>
          </div>
        </div>

        {/* CATEGORIES */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-6 px-1">
            <h2 className="text-2xl text-[#1C1B1F] font-semibold">Categories</h2>
            <button 
              className="w-10 h-10 rounded-full bg-[#F4EFF4] flex items-center justify-center hover:bg-[#E8DEF8] transition-colors"
              aria-label="View all categories"
              type="button"
            >
              <ArrowRight size={20} className="text-[#1C1B1F]" />
            </button>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className="flex flex-col items-center gap-3 snap-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D0BCFF] rounded-2xl p-2"
                type="button"
                aria-label={`${cat.name} category`}
              >
                <div className={`${cat.color} w-20 h-20 rounded-3xl flex items-center justify-center transition-all hover:scale-110 active:scale-95`}>
                  <span className="text-3xl font-bold opacity-90">{cat.name.charAt(0)}</span>
                </div>
                <span className="text-sm font-medium text-[#49454F] tracking-wide">{cat.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* FEATURED LIST */}
        <section className="mb-8">
          <h2 className="text-2xl text-[#1C1B1F] font-semibold mb-6 px-1">Adopt Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPets.map((pet) => (
              <div key={pet.id} className="bg-[#F3EDF7] rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
                <div className="flex h-40">
                  <div className="w-32 h-full shrink-0 overflow-hidden">
                    <img 
                      src={pet.image} 
                      alt={`${pet.name} - ${pet.sub}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex-1">
                        <h3 className="text-lg text-[#1C1B1F] font-semibold leading-tight">{pet.name}</h3>
                        <p className="text-sm text-[#49454F] mt-1 font-medium">{pet.sub}</p>
                      </div>
                      <button 
                        className="text-[#49454F] hover:text-[#B3261E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D0BCFF] rounded p-1 transition-colors"
                        aria-label={`Add ${pet.name} to favorites`}
                        type="button"
                      >
                        <Heart size={22} />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-end gap-2">
                      <span className="text-lg font-bold text-[#1D192B]">{pet.price}</span>
                      
                      <button 
                        className="bg-[#D0BCFF] w-11 h-11 rounded-lg flex items-center justify-center hover:bg-[#E8DEF8] active:scale-95 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9CA3AF]"
                        aria-label={`Add ${pet.name} to cart`}
                        type="button"
                      >
                        <ShoppingBag size={20} className="text-[#1D192B]" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="px-4 py-3 bg-[#F4EFF4] flex items-center gap-2">
                  <Star size={14} className="fill-[#FFD8E4] text-[#FFD8E4]" />
                  <span className="text-sm font-semibold text-[#1C1B1F]">{pet.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FAB */}
      <button 
        className="fixed bottom-28 right-4 w-16 h-16 bg-[#D0BCFF] rounded-2xl shadow-lg flex items-center justify-center z-40 text-[#1D192B] hover:bg-[#E8DEF8] active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9CA3AF]"
        aria-label="Add new pet"
        type="button"
      >
        <span className="text-3xl font-bold">+</span>
      </button>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-0 w-full bg-[#F3EDF7] border-t border-[#E7E0EC] flex justify-around items-center z-50 h-20 md:hidden">
        <button
          onClick={() => setActiveNav('explore')}
          className={`flex flex-col items-center gap-1 py-2 px-4 rounded-2xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D0BCFF] ${
            activeNav === 'explore' 
              ? 'bg-[#E8DEF8]' 
              : 'opacity-60 hover:opacity-100'
          }`}
          aria-label="Explore"
          type="button"
        >
          <Search size={24} className={activeNav === 'explore' ? 'text-[#1D192B]' : 'text-[#49454F]'} />
          <span className={`text-xs font-semibold ${activeNav === 'explore' ? 'text-[#1D192B]' : 'text-[#49454F]'}`}>Explore</span>
        </button>

        <button
          onClick={() => setActiveNav('favorites')}
          className={`flex flex-col items-center gap-1 py-2 px-4 rounded-2xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D0BCFF] ${
            activeNav === 'favorites' 
              ? 'bg-[#E8DEF8]' 
              : 'opacity-60 hover:opacity-100'
          }`}
          aria-label="Favorites"
          type="button"
        >
          <Heart size={24} className={activeNav === 'favorites' ? 'text-[#1D192B]' : 'text-[#49454F]'} />
          <span className={`text-xs font-semibold ${activeNav === 'favorites' ? 'text-[#1D192B]' : 'text-[#49454F]'}`}>Favorites</span>
        </button>

        <button
          onClick={() => setActiveNav('alerts')}
          className={`flex flex-col items-center gap-1 py-2 px-4 rounded-2xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D0BCFF] relative ${
            activeNav === 'alerts' 
              ? 'bg-[#E8DEF8]' 
              : 'opacity-60 hover:opacity-100'
          }`}
          aria-label="Alerts"
          type="button"
        >
          <div className="relative">
            <Bell size={24} className={activeNav === 'alerts' ? 'text-[#1D192B]' : 'text-[#49454F]'} />