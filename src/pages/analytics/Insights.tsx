import {  Activity ,TrendingUp, DollarSign } from 'lucide-react'
import React from 'react'

function Insights() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-500/30 rounded-lg">
                <TrendingUp className="text-blue-400" size={20} />
              </div>
              <h3 className="text-white font-semibold">Growth Rate</h3>
            </div>
            <p className="text-2xl font-bold text-white mb-2">+8.3%</p>
            <p className="text-sm text-blue-200">Your spending has increased compared to last year</p>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-500/30 rounded-lg">
                <DollarSign className="text-green-400" size={20} />
              </div>
              <h3 className="text-white font-semibold">Savings Potential</h3>
            </div>
            <p className="text-2xl font-bold text-white mb-2">$32/mo</p>
            <p className="text-sm text-green-200">Cancel unused services to save money</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-500/30 rounded-lg">
                <Activity className="text-purple-400" size={20} />
              </div>
              <h3 className="text-white font-semibold">Most Active</h3>
            </div>
            <p className="text-2xl font-bold text-white mb-2">Entertainment</p>
            <p className="text-sm text-purple-200">Your top spending category this year</p>
          </div>
        </div>
  )
}

export default Insights