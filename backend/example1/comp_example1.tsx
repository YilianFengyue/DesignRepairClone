/**
 * 这个组件已根据 Material Design 3 规范进行了修复。
 * 改进了设计一致性、可访问性和用户体验。
 */
import React from 'react';

// 简单的 SVG 图标组件
function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
  )
}

function MoreIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
  )
}

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans">
      {/* 修复后的 Top App Bar */}
      <header className="bg-white shadow-sm flex items-center justify-between px-4 py-4 mb-8 rounded-lg">
        <div className="flex items-center gap-3">
          <button 
            className="text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-colors" 
            aria-label="Open menu"
            title="Open menu"
          >
            <MenuIcon />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Task Manager</h1>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium">
            Profile
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto space-y-6">
        
        {/* 修复后的 Card 组件 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900">Project Alpha Launch</h2>
              <p className="text-sm text-gray-600 mt-2">Due date: Tomorrow</p>
            </div>
            <button 
              className="text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-colors flex-shrink-0 ml-2" 
              aria-label="More options"
              title="More options"
            >
              <MoreIcon />
            </button>
          </div>

          <div className="mt-4">
            <p className="text-base text-gray-700 leading-relaxed">
              We need to finalize the marketing assets and push the code to production environment by 5 PM.
            </p>
          </div>

          {/* 修复后的 Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button className="h-10 px-6 bg-gray-200 text-gray-900 text-sm font-medium rounded-full hover:bg-gray-300 transition-colors">
              Ignore
            </button>
            <button className="h-10 px-6 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors shadow-md">
              Complete task
            </button>
          </div>
        </div>

        {/* 修复后的 List 组件 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="p-4 border-b border-gray-300 flex items-center gap-4">
            <div className="w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
            <span className="text-gray-900 text-base font-medium">High Priority</span>
          </div>
          <div className="p-4 border-b border-gray-300 flex items-center gap-4">
            <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
            <span className="text-gray-900 text-base font-medium">In Progress</span>
          </div>
          <div className="p-4 flex items-center gap-4">
            <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0"></div>
            <span className="text-gray-900 text-base font-medium">Low Priority</span>
          </div>
        </div>

      </main>

      {/* 修复后的 FAB (Floating Action Button) */}
      <button 
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white flex items-center justify-center rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all" 
        aria-label="Add new task"
        title="Add new task"
      >
        <PlusIcon />
      </button>
    </div>
  );
}