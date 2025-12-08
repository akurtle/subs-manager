import React from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  Calendar, 
  CreditCard, 
  AlertCircle,
  Clock,
  PieChart,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

import { categoryBreakdown, recentTransactions, upcomingSubscriptions } from '@/data';
import { handlePageChange } from '@/components/reusable/sidebar';
import type { PageType } from '@/pages/pageHandler/index';

export default function OverviewPage({ onSelect }: {onSelect: (page: PageType) => void}) {
  const totalMonthly = 106.95;
  const activeSubscriptions = 8;
  const savingsGoal = 120;
  const percentToGoal:number = parseFloat(((totalMonthly / savingsGoal) * 100).toFixed(0));

  return (
  <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 p-6 lg:p-8 rounded-2xl">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Overview</h1>
          <p className="text-gray-400">Welcome back! Here's your subscription summary.</p>
        </div>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Monthly */}
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                <DollarSign className="text-green-400" size={24} />
              </div>
              <span className="text-green-400 text-sm font-medium flex items-center gap-1">
                <TrendingUp size={16} />
                +12%
              </span>
            </div>
            <h3 className="text-gray-400 text-sm font-medium mb-1">Total Monthly</h3>
            <p className="text-3xl font-bold text-white">${totalMonthly.toFixed(2)}</p>
            <p className="text-xs text-gray-500 mt-2">vs last month</p>
          </div>

          {/* Active Subscriptions */}
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                <CreditCard className="text-blue-400" size={24} />
              </div>
            </div>
            <h3 className="text-gray-400 text-sm font-medium mb-1">Active</h3>
            <p className="text-3xl font-bold text-white">{activeSubscriptions}</p>
            <p className="text-xs text-gray-500 mt-2">subscriptions</p>
          </div>

          {/* Yearly Projection */}
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                <Calendar className="text-purple-400" size={24} />
              </div>
              <span className="text-red-400 text-sm font-medium flex items-center gap-1">
                <ArrowUpRight size={16} />
                High
              </span>
            </div>
            <h3 className="text-gray-400 text-sm font-medium mb-1">Yearly Total</h3>
            <p className="text-3xl font-bold text-white">${(totalMonthly * 12).toFixed(0)}</p>
            <p className="text-xs text-gray-500 mt-2">projected</p>
          </div>

          {/* Savings Goal */}
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-orange-500/20 border border-orange-500/30 rounded-lg">
                <AlertCircle className="text-orange-400" size={24} />
              </div>
            </div>
            <h3 className="text-gray-400 text-sm font-medium mb-1">Budget Status</h3>
            <p className="text-3xl font-bold text-white">{percentToGoal}%</p>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
              <div 
                className="bg-gradient-to-r from-orange-500 to-orange-400 h-2 rounded-full transition-all"
                style={{ width: `${Math.min(percentToGoal, 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Middle Section - 2 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Subscriptions */}
          <div className="lg:col-span-2 bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Clock size={20} className="text-blue-400" />
                Upcoming Renewals
              </h2>
              <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors" onClick={()=>handlePageChange("subscriptions",onSelect,setIsMobileOpen=>{})}>
                View All
              </button>
            </div>
            <div className="space-y-3">
              {upcomingSubscriptions.map(sub => (
                <div 
                  key={sub.id}
                  className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all border-l-4"
                  style={{ borderLeftColor: sub.color }}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: sub.color }}
                    >
                      {sub.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{sub.name}</p>
                      <p className="text-sm text-gray-400">Due in {sub.daysUntil} days</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-white">${sub.amount}</p>
                    <span className="text-xs text-gray-500">monthly</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <PieChart size={20} className="text-purple-400" />
              By Category
            </h2>
            <div className="space-y-4">
              {categoryBreakdown.map((cat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300 font-medium">{cat.name}</span>
                    <span className="text-white font-bold">${cat.amount}</span>
                  </div>
                  <div className="relative w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all"
                      style={{ 
                        width: `${cat.percentage}%`,
                        backgroundColor: cat.color
                      }}
                    />
                  </div>
                  <p className="text-xs text-gray-500">{cat.percentage}% of total</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Transactions */}
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
            <div className="space-y-3">
              {recentTransactions.map(trans => (
                <div 
                  key={trans.id}
                  className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <div>
                      <p className="font-medium text-white">{trans.name}</p>
                      <p className="text-sm text-gray-400">{trans.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-white">-${trans.amount}</p>
                    <span className="text-xs text-green-400 capitalize">{trans.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-all text-left" 
              onClick={()=>{handlePageChange("subscriptions",onSelect,setIsMobileOpen=>{})}}>
                <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center mb-3">
                  <CreditCard className="text-blue-400" size={20} />
                </div>
                <p className="font-semibold text-white text-sm">Add New</p>
                <p className="text-xs text-gray-400 mt-1">Subscription</p>
              </button>
              
              <button className="p-4 bg-purple-500/20 border border-purple-500/30 rounded-lg hover:bg-purple-500/30 transition-all text-left"
              onClick={()=>{handlePageChange("calendar",onSelect,setIsMobileOpen=>{})}}>
                <div className="w-10 h-10 bg-purple-500/30 rounded-lg flex items-center justify-center mb-3">
                  <Calendar className="text-purple-400" size={20} />
                </div>
                <p className="font-semibold text-white text-sm">View</p>
                <p className="text-xs text-gray-400 mt-1">Calendar</p>
              </button>
              
              <button className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg hover:bg-green-500/30 transition-all text-left"
              onClick={()=>{handlePageChange("analytics",onSelect,setIsMobileOpen=>{})}}>
                <div className="w-10 h-10 bg-green-500/30 rounded-lg flex items-center justify-center mb-3">
                  <TrendingUp className="text-green-400" size={20} />
                </div>
                <p className="font-semibold text-white text-sm">View</p>
                <p className="text-xs text-gray-400 mt-1">Analytics</p>
              </button>
              
              <button className="p-4 bg-orange-500/20 border border-orange-500/30 rounded-lg hover:bg-orange-500/30 transition-all text-left"
              onClick={()=>{handlePageChange("subscriptions",onSelect,setIsMobileOpen=>{})}}>
                <div className="w-10 h-10 bg-orange-500/30 rounded-lg flex items-center justify-center mb-3">
                  <AlertCircle className="text-orange-400" size={20} />
                </div>
                <p className="font-semibold text-white text-sm">Set</p>
                <p className="text-xs text-gray-400 mt-1">Budget</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}