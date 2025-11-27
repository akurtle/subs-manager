import { monthlyData, categoryData } from '@/data'
import { Activity, PieChart, } from 'lucide-react'
import React from 'react'
import { PieChart as RPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

function RowOne() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Monthly Spending Trend */}
            <div className="lg:col-span-2 bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
                <div className="flex items-center justify-between mb-24">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <Activity size={20} className="text-blue-400" />
                        Monthly Spending Trend
                    </h2>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={monthlyData}>
                        <defs>
                            <linearGradient id="colorSpending" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="month" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#1F2937',
                                border: '1px solid #374151',
                                borderRadius: '8px',
                                color: '#fff'
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="spending"
                            stroke="#3B82F6"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorSpending)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* Category Distribution */}
            <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                    <PieChart size={20} className="text-purple-400" />
                    By Category
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                    <RPieChart>
                        <Pie
                            data={categoryData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={90}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {categoryData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            labelStyle={{ color: "#ffffff" }}  
                            itemStyle={{ color: "#ffffff" }}    
                            wrapperStyle={{ color: "#ffffff" }}
                            contentStyle={{
                                backgroundColor: "#1F2937",
                                border: "1px solid #374151",
                                borderRadius: "8px",
                            }}
                        />
                    </RPieChart>
                </ResponsiveContainer>
                <div className="space-y-2 mt-4">
                    {categoryData.map((cat, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                                <span className="text-gray-300">{cat.name}</span>
                            </div>
                            <span className="text-white font-semibold">{cat.value}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RowOne