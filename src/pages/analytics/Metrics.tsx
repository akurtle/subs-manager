import { DollarSign, ArrowUpRight, TrendingUp, ArrowDownRight } from 'lucide-react'
import React from 'react'

import  {type DataProps}  from './AnalyticsMain';

function Metrics({
  avgMonthly,
  totalYearly,
  highestMonth,
  lowestMonth
}: DataProps ) {
  return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                <DollarSign className="text-blue-400" size={20} />
              </div>
              <span className="text-green-400 text-xs font-medium flex items-center gap-1">
                <ArrowUpRight size={14} />
                8.3%
              </span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Avg Monthly</h3>
            <p className="text-2xl font-bold text-white">${avgMonthly!.toFixed(2)}</p>
          </div>

          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-green-500/20 border border-green-500/30 rounded-lg">
                <TrendingUp className="text-green-400" size={20} />
              </div>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Yearly Total</h3>
            <p className="text-2xl font-bold text-white">${totalYearly!.toFixed(2)}</p>
          </div>

          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-red-500/20 border border-red-500/30 rounded-lg">
                <ArrowUpRight className="text-red-400" size={20} />
              </div>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Highest Month</h3>
            <p className="text-2xl font-bold text-white">${highestMonth}</p>
          </div>

          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                <ArrowDownRight className="text-purple-400" size={20} />
              </div>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Lowest Month</h3>
            <p className="text-2xl font-bold text-white">${lowestMonth}</p>
          </div>
        </div>
  )
}

export default Metrics