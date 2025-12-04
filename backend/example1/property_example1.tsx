/**
 * 这个组件已根据 Material Design 3 的设计规范进行了修复。
 * 改进了间距、颜色对比度、触控目标大小、排版和可访问性。
 */
import React from 'react';

// 简单的 SVG 图标组件
function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
  )
}

function MoreIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="12" r="2.5"/><circle cx="12" cy="5" r="2.5"/><circle cx="12" cy="19" r="2.5"/></svg>
  )
}

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* 改进的 Top App Bar
        - 标题字号增加到 text-2xl，符合 MD3 Headline 规范
        - 阴影改为 shadow-md，符合 MD3 Surface Tones
        - 按钮间距增加，符合 MD3 规范
        - 颜色对比度改善
        - 添加了 aria-label 用于可访问性
      */}
      <header className="bg-white shadow-md flex items-center justify-between px-6 py-4 mb-8 rounded-lg">
        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center" aria-label="Open menu">
            <MenuIcon />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Task Manager</h1>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-blue-700 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center" aria-label="Open profile">Profile</button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto space-y-6">
        
        {/* 改进的 Card 组件
          - 圆角增加到 rounded-xl (12dp)
          - 内部边距增加到 p-6 (16dp)
          - 颜色对比度改善 (text-gray-900 和 text-gray-600)
          - 图标按钮添加了 aria-label 和适当的触控目标大小
          - 添加了 shadow-sm 用于卡片深度
        */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900">Project Alpha Launch</h2>
              <p className="text-sm text-gray-600 mt-2">Due date: Tomorrow</p>
            </div>
            <button className="text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center flex-shrink-0" aria-label="More options">
              <MoreIcon />
            </button>
          </div>

          <div className="mt-6">
            <p className="text-base text-gray-700 leading-relaxed">
              We need to finalize the marketing assets and push the code to production environment by 5 PM.
            </p>
          </div>

          {/* 改进的按钮
            - 高度增加到 h-12 (48px)，符合 MD3 触控目标要求
            - 间距增加到 gap-3
            - 按钮有适当的圆角 (rounded-lg)
            - 颜色对比度改善
            - 添加了 hover 状态和过渡效果
          */}
          <div className="flex justify-end gap-3 mt-6">
            <button className="h-12 px-6 bg-gray-200 text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors">
              Ignore
            </button>
            <button className="h-12 px-6 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              Complete task
            </button>
          </div>
        </div>

        {/* 改进的列表项
          - 分割线颜色增加到 border-gray-200
          - 文字和图标对齐改善
          - 最小高度设置为 56px，符合 MD3 触控目标要求
          - 颜色对比度改善 (text-gray-900)
          - 图标使用更大的尺寸 (w-5 h-5)
          - 间距改善 (gap-4)
        */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-4 min-h-[56px]">
            <div className="w-5 h-5 bg-red-500 rounded-full flex-shrink-0"></div>
            <span className="text-gray-900 text-base font-medium">High Priority</span>
          </div>
          <div className="px-6 py-4 flex items-center gap-4 min-h-[56px]">
            <div className="w-5 h-5 bg-green-500 rounded-full flex-shrink-0"></div>
            <span className="text-gray-900 text-base font-medium">Low Priority</span>
          </div>
        </div>

        {/* 改进的 FAB (Floating Action Button)
          - 位置改为 fixed，放在屏幕右下角
          - 尺寸增加到 w-14 h-14 (56px)，符合 MD3 标准 FAB 尺寸
          - 使用 rounded-full 符合 MD3 风格
          - 添加了 aria-label 用于可访问性
          - 添加了 hover 状态和过渡效果
        */}
        <button className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 text-white flex items-center justify-center rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all" aria-label="Add new task">
          <PlusIcon />
        </button>

      </main>
    </div>
  );
}