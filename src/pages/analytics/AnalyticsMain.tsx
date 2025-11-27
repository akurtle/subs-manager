import React, { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  PieChart,
  BarChart3,
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart as RPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { categoryData, monthlyData, topSubscriptions, yearlyComparison } from '@/data';
import Metrics from './Metrics';
import Insights from './Insights';
import TopSubs from './TopSubs';
import RowOne from './RowOne';
import RowTwo from './RowTwo';


export interface DataProps {
  avgMonthly?: number;
  totalYearly?: number;
  highestMonth?: number;
  lowestMonth?: number;
}

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('12M');

  const avgMonthly = monthlyData.reduce((acc, m) => acc + m.spending, 0) / monthlyData.length;
  const totalYearly = monthlyData.reduce((acc, m) => acc + m.spending, 0);
  const highestMonth = Math.max(...monthlyData.map(m => m.spending));
  const lowestMonth = Math.min(...monthlyData.map(m => m.spending));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6 lg:p-8 rounded-2xl">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Analytics</h1>
            <p className="text-gray-400">Deep insights into your spending patterns</p>
          </div>
          <div className="flex gap-2">
            {['1M', '3M', '6M', '12M'].map(range => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg transition-all ${timeRange === range
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800/40 text-gray-400 hover:bg-gray-800/60'
                  }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        <Metrics avgMonthly={avgMonthly}
          totalYearly={totalYearly}
          highestMonth={highestMonth}
          lowestMonth={lowestMonth} />



        {/* Charts Row 1 */}
       <RowOne/>

        {/* Charts Row 2 */}
        <RowTwo/>

        {/* Top Subscriptions Table */}
       <TopSubs avgMonthly={avgMonthly} />

        {/* Insights */}

        <Insights/>
        
      </div>
    </div>
  );
}