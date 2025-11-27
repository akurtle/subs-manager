import React, { useState } from 'react';
import { 
  Plus,
  Search,
  Filter,
  Trash2,
  Edit,
  MoreVertical,
  Calendar,
  DollarSign,
  TrendingUp,
  Clock,
  Bell,
  CheckCircle2,
  XCircle,
  AlertCircle,
  CreditCard
} from 'lucide-react';

// Sample subscription data
const initialSubscriptions = [
  { 
    id: 1, 
    name: 'Netflix', 
    amount: 15.99, 
    billingDate: 15, 
    category: 'Entertainment',
    status: 'active',
    nextBilling: '15 days',
    color: '#E50914',
    frequency: 'monthly',
    paymentMethod: 'Visa •••• 4242'
  },
  { 
    id: 2, 
    name: 'Spotify', 
    amount: 9.99, 
    billingDate: 1, 
    category: 'Entertainment',
    status: 'active',
    nextBilling: '1 day',
    color: '#1DB954',
    frequency: 'monthly',
    paymentMethod: 'Mastercard •••• 8888'
  },
  { 
    id: 3, 
    name: 'Adobe Creative Cloud', 
    amount: 54.99, 
    billingDate: 10, 
    category: 'Productivity',
    status: 'active',
    nextBilling: '10 days',
    color: '#FF0000',
    frequency: 'monthly',
    paymentMethod: 'Visa •••• 4242'
  },
  { 
    id: 4, 
    name: 'Amazon Prime', 
    amount: 14.99, 
    billingDate: 5, 
    category: 'Shopping',
    status: 'active',
    nextBilling: '5 days',
    color: '#FF9900',
    frequency: 'monthly',
    paymentMethod: 'Amex •••• 1234'
  },
  { 
    id: 5, 
    name: 'Apple iCloud', 
    amount: 2.99, 
    billingDate: 20, 
    category: 'Storage',
    status: 'active',
    nextBilling: '20 days',
    color: '#147CE5',
    frequency: 'monthly',
    paymentMethod: 'Apple Pay'
  },
  { 
    id: 6, 
    name: 'Disney+', 
    amount: 10.99, 
    billingDate: 8, 
    category: 'Entertainment',
    status: 'active',
    nextBilling: '8 days',
    color: '#113CCF',
    frequency: 'monthly',
    paymentMethod: 'Visa •••• 4242'
  },
  { 
    id: 7, 
    name: 'GitHub Pro', 
    amount: 4.00, 
    billingDate: 12, 
    category: 'Productivity',
    status: 'active',
    nextBilling: '12 days',
    color: '#171515',
    frequency: 'monthly',
    paymentMethod: 'Visa •••• 4242'
  },
  { 
    id: 8, 
    name: 'Notion', 
    amount: 8.00, 
    billingDate: 3, 
    category: 'Productivity',
    status: 'trial',
    nextBilling: '3 days',
    color: '#000000',
    frequency: 'monthly',
    paymentMethod: 'Trial'
  },
];

export default function SubscriptionsPage() {

  const [subscriptions, setSubscriptions] = useState(initialSubscriptions);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedSub, setSelectedSub] = useState(null);

  const categories = ['all', 'Entertainment', 'Productivity', 'Storage', 'Shopping'];

  const filteredSubscriptions = subscriptions.filter(sub => {
    const matchesSearch = sub.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || sub.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const totalMonthly = subscriptions.reduce((sum, sub) => sum + sub.amount, 0);
  const activeCount = subscriptions.filter(sub => sub.status === 'active').length;

  const handleDelete = (id:number) => {
    setSubscriptions(subscriptions.filter(sub => sub.id !== id));
    setSelectedSub(null);
  };

  return (
    <div className="min-h-screen bg-linear-to-br rounded-2xl from-gray-900 via-black to-gray-900 p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Subscriptions</h1>
            <p className="text-gray-400">Manage all your recurring payments</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-semibold shadow-lg shadow-blue-500/20"
          >
            <Plus size={20} />
            Add Subscription
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                <DollarSign className="text-green-400" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Monthly Total</p>
                <p className="text-2xl font-bold text-white">${totalMonthly.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                <CreditCard className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Active</p>
                <p className="text-2xl font-bold text-white">{activeCount}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                <TrendingUp className="text-purple-400" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Yearly Cost</p>
                <p className="text-2xl font-bold text-white">${(totalMonthly * 12).toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
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
                  className={`px-4 py-3 rounded-lg transition-all capitalize ${
                    filterCategory === cat
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

        {/* Subscriptions Grid */}
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
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors text-gray-300 hover:text-white">
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

        {/* List View Alternative */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Quick Overview</h2>
          <div className="space-y-3">
            {filteredSubscriptions.map(sub => (
              <div
                key={sub.id}
                className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: sub.color }}
                  >
                    {sub.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{sub.name}</p>
                    <p className="text-sm text-gray-400">{sub.category} • Next: {sub.nextBilling}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-lg font-bold text-white">${sub.amount}</p>
                    <p className="text-xs text-gray-400">{sub.frequency}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-600/50 rounded-lg transition-colors">
                      <Edit size={18} className="text-gray-400 hover:text-white" />
                    </button>
                    <button
                      onClick={() => handleDelete(sub.id)}
                      className="p-2 hover:bg-red-500/20 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} className="text-red-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Renewals Alert */}
        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-orange-500/30 rounded-lg">
              <AlertCircle className="text-orange-400" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg mb-2">Upcoming Renewals</h3>
              <p className="text-orange-200 text-sm mb-4">
                You have {filteredSubscriptions.filter(s => parseInt(s.nextBilling) <= 7).length} subscriptions renewing in the next 7 days
              </p>
              <div className="flex gap-2">
                {filteredSubscriptions
                  .filter(s => parseInt(s.nextBilling) <= 7)
                  .slice(0, 3)
                  .map(sub => (
                    <div
                      key={sub.id}
                      className="px-3 py-1 bg-gray-800/60 border border-gray-700 rounded-full text-sm text-white"
                    >
                      {sub.name}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}