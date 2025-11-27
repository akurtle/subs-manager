import React, { useState } from 'react';
import { Home, Wallet, CalendarDays, BarChart3, User, Settings, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { PageType } from '@/pages/pageHandler/index';

interface SidebarProps {
  onSelect: (page: PageType) => void;
}


function Sidebar({ onSelect }: SidebarProps) {

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);


    const handlePageChange = (page: PageType) =>{
        onSelect(page);
        setIsMobileOpen(false);
    }

    const menuItems = [
        { label: "Overview", icon: <Home /> },
        { label: "Subscriptions", icon: <Wallet /> },
        { label: "Calendar", icon: <CalendarDays /> },
        { label: "Analytics", icon: <BarChart3 /> },
        { label: "Account", icon: <User /> },
        { label: "Settings", icon: <Settings /> },
    ];

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-xl bg-gray-800/90 backdrop-blur-lg text-gray-300 hover:bg-gray-700/90 transition"
            >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed lg:sticky top-0 min-h-screen z-40
                    border-r border-gray-800 bg-black/40 backdrop-blur-lg
                    flex flex-col gap-6
                    transition-all duration-300 ease-in-out
                    ${isCollapsed ? 'w-20' : 'w-72'}
                    ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                `}
            >
                {/* Header */}
                <div className={`flex items-center justify-between p-6 ${isCollapsed ? 'px-4' : ''}`}>
                    {!isCollapsed && (
                        <h2 className="text-xl font-bold text-white">Dashboard</h2>
                    )}
                    
                    {/* Desktop Collapse Button */}
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="hidden lg:flex p-2 rounded-lg hover:bg-gray-800/50 text-gray-300 transition"
                    >
                        {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                    </button>
                </div>

                {/* Menu Items */}
                <nav className={`flex-1 space-y-2 ${isCollapsed ? 'px-2' : 'px-6'}`}>
                    {menuItems.map((item, i) => (
                        <button
                            key={i}
                            onClick={() => handlePageChange(item.label.toLowerCase() as PageType)}
                            className={`
                                w-full flex items-center gap-3 
                                px-3 py-3 rounded-xl 
                                hover:bg-gray-800/50 
                                transition-all duration-200
                                group relative
                                ${isCollapsed ? 'justify-center' : 'text-left'}
                            `}
                            title={isCollapsed ? item.label : ''}
                        >
                            <span className="text-gray-300 group-hover:text-white transition-colors shrink-0">
                                {item.icon}
                            </span>
                            <span className={`
                                text-gray-300 group-hover:text-white transition-all
                                ${isCollapsed ? 'hidden' : 'block'}
                            `}>
                                {item.label}
                            </span>

                            {/* Tooltip for collapsed state */}
                            {isCollapsed && (
                                <div className="
                                    absolute left-full ml-2 px-3 py-2 
                                    bg-gray-800 text-white text-sm rounded-lg 
                                    whitespace-nowrap
                                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                    transition-all duration-200
                                    pointer-events-none
                                    z-50
                                ">
                                    {item.label}
                                    <div className="absolute right-full top-1/2 -translate-y-1/2 
                                        border-4 border-transparent border-r-gray-800" />
                                </div>
                            )}
                        </button>
                    ))}
                </nav>

                {/* Footer */}
                <div className={`p-6 border-t border-gray-800 ${isCollapsed ? 'px-2' : ''}`}>
                    <div className={`
                        flex items-center gap-3 p-3 rounded-xl bg-gray-800/30
                        ${isCollapsed ? 'justify-center' : ''}
                    `}>
                        <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-purple-600 shrink-0" />
                        {!isCollapsed && (
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-white truncate">John Doe</p>
                                <p className="text-xs text-gray-400 truncate">john@example.com</p>
                            </div>
                        )}
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Sidebar