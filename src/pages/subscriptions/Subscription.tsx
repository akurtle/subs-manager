import React, { useContext, useEffect, useState } from 'react';
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
import { handlePageChange } from '@/components/reusable/sidebar';
import type { PageType } from '../pageHandler';
import SubsGrid from './SubsGrid';
import SearchSubs from './SearchSubs';
import { deleteSubscription } from '@/client/supabaseServices';
import { supabase } from '@/client/supabaseClient';
import type { User } from '@supabase/supabase-js';
import { supabaseContext } from '@/context/supabaseContext';

export type Subscription = {
  id: number;
  name: string;
  amount: number;
  category: string;
  color: string;
  frequency: 'monthly' | 'yearly' | 'weekly' | string; 
  nextBilling: string; // or Date 
  paymentMethod: string;
  status: 'active' | 'paused' | 'canceled' | string;
};

const categories = ['all', 'Entertainment', 'Productivity', 'Storage', 'Shopping'];

export default function SubscriptionsPage({ onSelect }: { onSelect: (page: PageType) => void }) {

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState('grid');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedSub, setSelectedSub] = useState<Subscription | null>(null);
  
  const { subscriptions,setSubscriptions } = useContext(supabaseContext);
  
  // const [subscriptionsData, setSubscriptions] = useState<Subscription[]>([]);
  
  if(subscriptions == null) {
    return <div></div>
  }



  const filteredSubscriptions = subscriptions.filter(sub => {
    const matchesSearch = sub.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || sub.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const totalMonthly = subscriptions.reduce((sum, sub) => sum + sub.amount, 0);
  const activeCount = subscriptions.filter(sub => sub.status === 'active').length;

  const handleDelete = async (id: number) => {
    console.log("here");
    setSubscriptions(subscriptions.filter(sub => sub.id !== id));
    
    
    console.log(selectedSub);
    
    
    deleteSubscription(id)
    
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
            // onClick={() => setShowAddModal(true)}
            onClick={() => handlePageChange('addSubs', onSelect, setIsMobileOpen => { })}
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
        <SearchSubs searchTerm={searchTerm} setSearchTerm={setSearchTerm} categories={categories} setFilterCategory={setFilterCategory} filterCategory={filterCategory} />

        {/* Subscriptions Grid */}
        <SubsGrid filteredSubscriptions={filteredSubscriptions} onSelect={onSelect} handleDelete={()=>handleDelete(selectedSub!.id)} />

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
        <div className="bg-linear-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-6">
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