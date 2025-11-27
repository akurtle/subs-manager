import { topSubscriptions } from '@/data'
import { TrendingUp, TrendingDown } from 'lucide-react'
import React from 'react'

import { type DataProps } from './AnalyticsMain'

function TopSubs(avgMonthly : DataProps) {
  return (
     <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Top Subscriptions</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Service</th>
                  <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">Monthly Cost</th>
                  <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">Annual Cost</th>
                  <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">Trend</th>
                  <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">% of Total</th>
                </tr>
              </thead>
              <tbody>
                {topSubscriptions.map((sub, i) => (
                  <tr key={i} className="border-b border-gray-700/50 hover:bg-gray-700/20 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-2 h-8 rounded-full"
                          style={{ backgroundColor: sub.color }}
                        />
                        <span className="text-white font-medium">{sub.name}</span>
                      </div>
                    </td>
                    <td className="text-right py-4 px-4 text-white font-semibold">
                      ${sub.amount}
                    </td>
                    <td className="text-right py-4 px-4 text-gray-300">
                      ${(sub.amount * 12).toFixed(2)}
                    </td>
                    <td className="text-right py-4 px-4">
                      {sub.trend > 0 ? (
                        <span className="text-red-400 flex items-center justify-end gap-1">
                          <TrendingUp size={16} />
                          +{sub.trend}%
                        </span>
                      ) : sub.trend < 0 ? (
                        <span className="text-green-400 flex items-center justify-end gap-1">
                          <TrendingDown size={16} />
                          {sub.trend}%
                        </span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="text-right py-4 px-4 text-gray-300">
                      {((sub.amount / avgMonthly.avgMonthly!) * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  )
}

export default TopSubs