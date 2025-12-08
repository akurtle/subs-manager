import { Search } from 'lucide-react'
import React from 'react'


type SearchSubProps = {
    searchTerm:string,
    setSearchTerm:any,
    categories:string[],
    setFilterCategory:any,
    filterCategory:string
}


function SearchSubs({searchTerm,setSearchTerm,categories,setFilterCategory,filterCategory}:SearchSubProps) {
    return (
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search subscriptions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
                    />
                </div>
                <div className="flex gap-2">
                    {categories.map(cat => (

                        <button
                            key={cat}
                            onClick={() => setFilterCategory(cat)}
                            className={`px-4 py-3 rounded-lg transition-all capitalize ${filterCategory === cat
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchSubs