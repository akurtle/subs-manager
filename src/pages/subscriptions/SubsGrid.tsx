import { handlePageChange } from '@/components/reusable/sidebar'
import { MoreVertical, Calendar, CreditCard, CheckCircle2, Clock, Edit, Trash2 } from 'lucide-react'
import React from 'react'
import type { Subscription } from './Subscription'
import type { PageType } from '../pageHandler'


type SubsGridProps={
    filteredSubscriptions:Subscription[],
    onSelect:(page:PageType)=>void,
    handleDelete:(id:number)=>void
    

}

function SubsGrid({filteredSubscriptions,onSelect,handleDelete}:SubsGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSubscriptions.map(sub => (
                <div
                    key={sub.id}
                    className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all group"
                >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
                                style={{ backgroundColor: sub.color }}
                            >
                                {sub.name.charAt(0)}
                            </div>
                            <div>
                                <h3 className="font-semibold text-white text-lg">{sub.name}</h3>
                                <span className="text-xs text-gray-400 capitalize">{sub.category}</span>
                            </div>
                        </div>
                        <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                            <MoreVertical size={18} className="text-gray-400" />
                        </button>
                    </div>

                    {/* Amount */}
                    <div className="mb-4">
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-white">${sub.amount}</span>
                            <span className="text-sm text-gray-400">/{sub.frequency}</span>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                            <Calendar size={16} className="text-gray-400" />
                            <span className="text-gray-300">Next billing in <span className="text-white font-medium">{sub.nextBilling}</span></span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <CreditCard size={16} className="text-gray-400" />
                            <span className="text-gray-300">{sub.paymentMethod}</span>
                        </div>
                    </div>

                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-4">
                        {sub.status === 'active' ? (
                            <span className="flex items-center gap-1.5 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs font-medium">
                                <CheckCircle2 size={14} />
                                Active
                            </span>
                        ) : (
                            <span className="flex items-center gap-1.5 px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-xs font-medium">
                                <Clock size={14} />
                                Trial
                            </span>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-4 border-t border-gray-700">
                        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors text-gray-300 hover:text-white"
                            onClick={() => handlePageChange("editSubs", onSelect, setIsMobileOpen => { })}
                        >
                            <Edit size={16} />
                            Edit
                        </button>
                        <button
                            onClick={() => handleDelete(sub.id)}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg transition-colors text-red-400 hover:text-red-300"
                        >
                            <Trash2 size={16} />
                            Cancel
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SubsGrid