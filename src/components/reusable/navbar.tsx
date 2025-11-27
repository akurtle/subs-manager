import React from 'react'

function Navbar() {
    return (
        <nav className="w-full border-b border-gray-800 bg-black/60 backdrop-blur-md py-4 px-8 flex lg:justify-between justify-end items-center shadow-md">
            <div className="lg:flex gap-6 text-gray-300 hidden ">
                <button className="hover:text-white transition">About us</button>
            </div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-200 via-gray-400 to-gray-600">
                MetalSub
            </h1>
        </nav>
    )
}

export default Navbar