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
    // VIOLATION: Using a fixed background color that might not adapt to system dark mode preferences correctly
    <div className="min-h-screen bg-[#FFFBFE] text-[#1C1B1F] font-sans selection:bg-[#E8DEF8] pb-24">
      
      {/* --- TOP APP BAR --- */}
      {/* VIOLATION: Fixed height (h-[64px]) combined with 'flex items-center' might cut off text if user scales font size */}
      {/* VIOLATION: Z-index war waiting to happen (z-50) without a stacking context strategy */}
      <header className="fixed top-0 left-0 right-0 h-[64px] bg-[#FFFBFE]/90 backdrop-blur-sm z-50 flex items-center justify-between px-4 transition-all duration-300">
        
        {/* Leading Icon */}
        {/* VIOLATION: Interactive element is a div, no role, no tabIndex, no aria-label. Keyboard users cannot access menu. */}
        <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full hover:bg-[#F4EFF4] active:bg-[#E8DEF8] cursor-pointer ripple-effect">
          <Menu className="text-[#1C1B1F]" size={24} />
        </div>

        {/* Headline */}
        {/* VIOLATION: Semantic HTML failure. Logo/Title should be H1, but is span. Font size is hardcoded px. */}
        <span className="text-[22px] text-[#1C1B1F] tracking-normal font-normal">
          Jpetstore
        </span>

        {/* Trailing Icons */}
        <div className="flex gap-1">
          {/* VIOLATION: Touch targets are visually 40x40 but click area might be strictly on the SVG path depending on implementation quirks in some browsers if not careful */}
          <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#F4EFF4] cursor-pointer">
            <User size={24} className="text-[#49454F]" />
          </div>
          {/* VIOLATION: Profile image as button, missing alt text, missing button semantics */}
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" 
            className="w-10 h-10 rounded-full border border-[#E7E0EC] ml-1 object-cover"
          />
        </div>
      </header>

      {/* Main Content Container - Simulating a single column layout common in mobile apps */}
      <main className="pt-[88px] px-4 max-w-lg mx-auto md:max-w-3xl lg:max-w-5xl">
        
        {/* --- SEARCH --- */}
        {/* VIOLATION: Floating search bar looks nice but placeholders have low contrast (#79747E on #ECE6F0) - Ratio: ~3.5:1 (Fail AAA) */}
        <div className="relative mb-8 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="text-[#49454F]" size={24} />
          </div>
          <input
            type="text"
            className="block w-full p-4 pl-14 text-base text-[#1C1B1F] bg-[#ECE6F0] rounded-[28px] border-none focus:ring-2 focus:ring-[#D0BCFF] focus:bg-[#E8DEF8] transition-colors placeholder-[#79747E]"
            placeholder="Search pets, food..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* VIOLATION: Interactive icon inside input container but placed visually. Tab order might be confusing. */}
          <div className="absolute inset-y-0 right-4 flex items-center">
             <div className="bg-[#1D192B] rounded-full p-1.5 cursor-pointer shadow-sm">
                {/* VIOLATION: Icon meaning is ambiguous (Filter? Scan? Go?). No tooltip. */}
                <ArrowRight size={16} className="text-white" />
             </div>
          </div>
        </div>

        {/* --- HERO CARD (Material 3 Style) --- */}
        {/* VIOLATION: Text Contrast Hell. White text on a light image or gradient. "Find your new" is very hard to read depending on image load. */}
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-[28px] overflow-hidden mb-10 shadow-sm transition-all hover:shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* VIOLATION: Gradient overlay is too subtle (black/30), not providing enough protection for text accessibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent p-6 flex flex-col justify-end items-start">
            {/* VIOLATION: Semantic Headings: Started with H3 again. */}
            <h3 className="text-white text-[32px] leading-[40px] font-normal mb-1">
              Find your new
            </h3>
            <h2 className="text-[#D0BCFF] text-[32px] leading-[40px] font-medium mb-4">
              Best Friend
            </h2>
            {/* VIOLATION: Button container color (Surface Tint) might blend with image. 
                "Adopt" text is all caps (not standard M3). */}
            <button className="bg-[#E8DEF8] text-[#1D192B] px-6 py-3 rounded-full text-sm font-medium tracking-wide shadow-sm hover:bg-[#D0BCFF] active:scale-95 transition-transform">
              ADOPT NOW
            </button>
          </div>
        </div>

        {/* --- CATEGORIES (Horizontal Scroll) --- */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4 px-1">
            <h4 className="text-[22px] text-[#1C1B1F] font-normal">Categories</h4>
            {/* VIOLATION: Interactive text looks like body text, user might not know it's clickable. Small hit area. */}
            <div className="w-8 h-8 rounded-full bg-[#F4EFF4] flex items-center justify-center">
                <ArrowRight size={16} />
            </div>
          </div>
          
          {/* VIOLATION: Horizontal scrollbar is hidden (scrollbar-hide), making it harder for desktop users to know they can scroll. 
              Dependency on touch gestures or mouse wheel. */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
            {categories.map((cat, idx) => (
              // VIOLATION: "Button" implemented as Div. Keyboard users get stuck here.
              <div key={idx} className="flex flex-col items-center gap-2 snap-center shrink-0 cursor-pointer group">
                {/* VIOLATION: Large shape but icon is text-based. Inconsistent visual weight. */}
                <div className={`${cat.color} w-[80px] h-[80px] rounded-[24px] flex items-center justify-center transition-all group-hover:rounded-[32px] group-hover:scale-105`}>
                  <span className="text-2xl font-medium opacity-80">{cat.name.charAt(0)}</span>
                </div>
                <span className="text-sm font-medium text-[#49454F] tracking-wide">{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- FEATURED LIST (Cards) --- */}
        <section>
          <h4 className="text-[22px] text-[#1C1B1F] font-normal mb-4 px-1">Adopt Me</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredPets.map((pet) => (
              // VIOLATION: Nested Interactive Controls. 
              // The outer div is clickable (cursor-pointer), but contains buttons inside (Heart, Add).
              // This confuses screen readers and creates "dead zones" or accidental clicks.
              <div key={pet.id} className="bg-[#F3EDF7] p-0 rounded-[24px] overflow-hidden cursor-pointer group relative transition-colors hover:bg-[#ECE6F0]">
                <div className="flex h-32">
                  {/* VIOLATION: Image compression/stretching. 'w-[120px]' is fixed, might not look good on all responsive steps. */}
                  <div className="w-[120px] h-full shrink-0">
                    <img src={pet.image} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="text-lg text-[#1C1B1F] font-medium leading-tight">{pet.name}</h5>
                        <p className="text-sm text-[#49454F] mt-1">{pet.sub}</p>
                      </div>
                      {/* VIOLATION: Icon button inside card. Small touch target. No aria-label. */}
                      <button className="text-[#49454F] hover:text-[#B3261E]">
                        <Heart size={20} />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-end">
                        {/* VIOLATION: Price color contrast. #9CA3AF on #F3EDF7 is approx 2.8:1 (Fail). */}
                      <span className="text-[16px] font-bold text-gray-400">{pet.price}</span>
                      
                      {/* VIOLATION: "Fake" FAB inside a card. 
                          Plus, using a tonal button color that looks disabled to some users. */}
                      <div className="bg-[#E8DEF8] w-10 h-10 rounded-[12px] flex items-center justify-center group-hover:bg-[#D0BCFF] transition-colors shadow-sm">
                        <ShoppingBag size={18} className="text-[#1D192B]" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* VIOLATION: Absolute positioned overlay for rating that might cover content on small screens */}
                <div className="absolute bottom-4 left-[130px] flex items-center gap-1 bg-white/60 px-2 py-0.5 rounded-md backdrop-blur-sm">
                    <Star size={10} className="fill-[#FFD8E4] text-[#FFD8E4]" /> 
                    {/* VIOLATION: Text size 10px is below recommended 12px minimum for readability */}
                    <span className="text-[10px] text-[#49454F] font-bold">{pet.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- FAB (Floating Action Button) --- */}
      {/* VIOLATION: FAB obscures content at the bottom right. 
          It has no label, just an icon. Users might not know what it does (Add pet? Chat? Cart?). */}
      <button className="fixed bottom-24 right-4 w-[56px] h-[56px] bg-[#D0BCFF] rounded-[16px] shadow-lg flex items-center justify-center z-40 text-[#381E72] hover:shadow-xl active:rounded-[20px] transition-all">
        <span className="text-2xl leading-none mb-1">+</span> 
      </button>

      {/* --- NAVIGATION BAR --- */}
      {/* VIOLATION: Using 'md:hidden'. Desktop users literally lose the main navigation. 
          Visual Design: The active indicator is pill-shaped (good M3), but the icons are not filled/outlined variants (bad implementation). */}
      <nav className="fixed bottom-0 w-full bg-[#F3EDF7] h-[80px] flex justify-around items-center z-50 md:hidden pb-2">
        {/* Active Item */}
        <div className="flex flex-col items-center gap-1">
          {/* VIOLATION: Pill indicator uses hardcoded width, might not fit translated text if label was inside. */}
          <div className="bg-[#E8DEF8] w-[64px] h-[32px] rounded-full flex items-center justify-center">
            <Search size={20} className="text-[#1D192B]" />
          </div>
          {/* VIOLATION: Label font size 11px is borderline readable. */}
          <span className="text-[11px] font-bold text-[#1D192B]">Explore</span>
        </div>

        {/* Inactive Item */}
        <div className="flex flex-col items-center gap-1 opacity-60">
           {/* VIOLATION: Inconsistent spacing logic compared to active item. No pill container for inactive state (M3 allows this, but alignment feels off). */}
           <div className="h-[32px] flex items-center">
             <Heart size={24} className="text-[#49454F]" />
           </div>
           <span className="text-[11px] font-medium text-[#49454F]">Favorites</span>
        </div>

        {/* Inactive Item */}
        <div className="flex flex-col items-center gap-1 opacity-60">
           <div className="h-[32px] flex items-center relative">
             <Bell size={24} className="text-[#49454F]" />
             {/* VIOLATION: Badge is just a red dot without count, not accessible to screen readers who just hear "Bell". */}
             <div className="absolute top-0 right-0 w-2 h-2 bg-[#B3261E] rounded-full"></div>
           </div>
           <span className="text-[11px] font-medium text-[#49454F]">Alerts</span>
        </div>
      </nav>
    </div>
  );
}