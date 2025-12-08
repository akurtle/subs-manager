import React, { useState } from 'react';
import { 
  ArrowLeft,
  Plus,
  Calendar,
  DollarSign,
  CreditCard,
  Tag,
  Type,
  Clock,
  Palette,
  AlertCircle,
  CheckCircle2,
  Sparkles
} from 'lucide-react';


import { handlePageChange } from '@/components/reusable/sidebar';
import type { PageType } from '../pageHandler';

import type { Subscription } from './Subscription';

type errors={
name:string,
amount:string | number,
nextBilling:string
}

export default function AddSubscriptionPage({onSelect}:{onSelect: (page:PageType)=>void}) {
  const [subscription, setSubscription] = useState<Subscription>({
    id:1,
    name: '',
    amount: 0,
    category: 'Entertainment',
    color: '#3B82F6',
    frequency: 'monthly',
    nextBilling: '',
    paymentMethod: 'Visa •••• 4242',
    status: 'active'
  });

  const [errors, setErrors] = useState<errors>({
      name: '',
      amount: '',
      nextBilling: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const categories = ['Entertainment', 'Productivity', 'Storage', 'Shopping', 'Education', 'Health', 'Other'];
  const frequencies = ['daily', 'weekly', 'monthly', 'quarterly', 'yearly'];
  const statuses = ['active', 'trial', 'paused'];
  const paymentMethods = [
    'Visa •••• 4242',
    'Mastercard •••• 8888',
    'Amex •••• 1234',
    'Apple Pay',
    'PayPal'
  ];

  const colorOptions = [
    '#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B',
    '#EF4444', '#06B6D4', '#84CC16', '#F97316', '#A855F7',
    '#14B8A6', '#E50914', '#1DB954', '#FF9900', '#147CE5'
  ];

  const popularSubscriptions:Subscription[] = [
    {id:1, name: 'Netflix', category: 'Entertainment',frequency:'monthly',nextBilling:'',paymentMethod:"",status:'', color: '#E50914', amount: 15.99 },
    {id:1, name: 'Spotify', category: 'Entertainment',frequency:'monthly',nextBilling:'',paymentMethod:"",status:'',  color: '#1DB954', amount: 9.99 },
    {id:1, name: 'Adobe Creative Cloud', category: 'Productivity',frequency:'monthly',nextBilling:'',paymentMethod:"",status:'',  color: '#FF0000', amount: 54.99 },
    {id:1, name: 'Amazon Prime', category: 'Shopping',frequency:'monthly',nextBilling:'' ,paymentMethod:"",status:'', color: '#FF9900', amount: 14.99 },
    {id:1, name: 'Disney+', category: 'Entertainment',frequency:'monthly',nextBilling:'',paymentMethod:"",status:'',  color: '#113CCF', amount: 10.99 },
    {id:1, name: 'Apple iCloud', category: 'Storage',frequency:'monthly',nextBilling:'',paymentMethod:"",status:'',  color: '#147CE5', amount: 2.99 },
  ];

  const handleChange = (field:any, value:any) => {
    setSubscription({ ...subscription, [field]: value });
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const validateForm = () => {
    const newErrors:errors = {
        name: '',
        amount: '',
        nextBilling: ''
    };
    
    if (!subscription.name.trim()) {
      newErrors.name = 'Subscription name is required';
    }
    
    if (!subscription.amount || subscription.amount <= 0) {
      newErrors.amount = 'Please enter a valid amount';
    }
    
    if (!subscription.nextBilling) {
      newErrors.nextBilling = 'Next billing date is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Here you would typically save to backend/state management
      console.log('Creating subscription:', subscription);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        // Navigate back to subscriptions page
      }, 2000);
    }


    
  };

  const quickAdd = (preset:Subscription) => {
    setSubscription({
      ...subscription,
      id: preset.id,
      name: preset.name,
      category: preset.category,
      frequency: preset.frequency,
      nextBilling: preset.nextBilling,
      paymentMethod: preset.paymentMethod,
      status: preset.status,
      color: preset.color,
      amount: preset.amount
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors" onClick={()=>handlePageChange('subscriptions',onSelect,setIsMobileOpen=>{})}>
            <ArrowLeft className="text-gray-400 hover:text-white" size={24} />
          </button>
          <div>
            <h1 className="text-4xl font-bold text-white flex items-center gap-3">
              <Plus className="text-blue-400" />
              Add New Subscription
            </h1>
            <p className="text-gray-400 mt-1">Create a new subscription to track</p>
          </div>
        </div>

        {/* Success Message */}
        {showSuccessMessage && (
          <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 flex items-center gap-3 animate-fade-in">
            <CheckCircle2 className="text-green-400" size={20} />
            <span className="text-green-400 font-medium">Subscription created successfully!</span>
          </div>
        )}

        {/* Quick Add Section */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-blue-400" size={20} />
            <h3 className="text-lg font-semibold text-white">Popular Subscriptions</h3>
          </div>
          <p className="text-gray-400 text-sm mb-4">Quick add from popular services</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {popularSubscriptions.map((preset, i) => (
              <button
                key={i}
                onClick={() => quickAdd(preset)}
                className="flex items-center gap-3 p-3 bg-gray-800/60 hover:bg-gray-800 rounded-lg transition-all border border-gray-700 hover:border-gray-600"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: preset.color }}
                >
                  {preset.name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="text-white font-medium text-sm">{preset.name}</p>
                  <p className="text-gray-400 text-xs">${preset.amount}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Preview Card */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
          <h3 className="text-sm font-medium text-gray-400 mb-4">Preview</h3>
          <div className="flex items-center gap-4 p-6 bg-gray-700/30 rounded-lg border-2" style={{ borderColor: subscription.color }}>
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg"
              style={{ backgroundColor: subscription.color }}
            >
              {subscription.name ? subscription.name.charAt(0).toUpperCase() : '?'}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white">
                {subscription.name || 'Subscription Name'}
              </h3>
              <p className="text-sm text-gray-400 capitalize">{subscription.category}</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-white">
                ${subscription.amount || '0.00'}
              </p>
              <p className="text-sm text-gray-400 capitalize">/{subscription.frequency}</p>
            </div>
          </div>
        </div>

        {/* Basic Information */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Type size={20} className="text-blue-400" />
            Basic Information
          </h2>

          <div className="space-y-6">
            {/* Subscription Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Subscription Name *
              </label>
              <input
                type="text"
                value={subscription.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="e.g., Netflix, Spotify, Adobe"
                className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400 ${
                  errors.name ? 'border-red-500' : 'border-gray-600'
                }`}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category *
              </label>
              <div className="relative">
                <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={subscription.category}
                  onChange={(e) => handleChange('category', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white appearance-none"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Color */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Brand Color
              </label>
              <div className="flex gap-3 flex-wrap">
                {colorOptions.map(color => (
                  <button
                    key={color}
                    onClick={() => handleChange('color', color)}
                    className={`w-12 h-12 rounded-lg transition-all hover:scale-110 ${
                      subscription.color === color
                        ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-900'
                        : 'border-2 border-gray-600'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Status
              </label>
              <div className="grid grid-cols-3 gap-3">
                {statuses.map(status => (
                  <button
                    key={status}
                    onClick={() => handleChange('status', status)}
                    className={`px-4 py-3 rounded-lg capitalize transition-all ${
                      subscription.status === status
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700/30 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Billing Information */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <DollarSign size={20} className="text-green-400" />
            Billing Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Amount *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                <input
                  type="number"
                  step="0.01"
                  value={subscription.amount}
                  onChange={(e) => handleChange('amount', parseFloat(e.target.value))}
                  placeholder="0.00"
                  className={`w-full pl-8 pr-4 py-3 bg-gray-700/50 border rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400 ${
                    errors.amount ? 'border-red-500' : 'border-gray-600'
                  }`}
                />
              </div>
              {errors.amount && (
                <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.amount}
                </p>
              )}
            </div>

            {/* Frequency */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Billing Frequency *
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={subscription.frequency}
                  onChange={(e) => handleChange('frequency', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white appearance-none capitalize"
                >
                  {frequencies.map(freq => (
                    <option key={freq} value={freq} className="capitalize">{freq}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Next Billing Date */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Next Billing Date *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="date"
                  value={subscription.nextBilling}
                  onChange={(e) => handleChange('nextBilling', e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 bg-gray-700/50 border rounded-lg focus:border-blue-500 focus:outline-none text-white ${
                    errors.nextBilling ? 'border-red-500' : 'border-gray-600'
                  }`}
                />
              </div>
              {errors.nextBilling && (
                <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.nextBilling}
                </p>
              )}
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Payment Method
              </label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={subscription.paymentMethod}
                  onChange={(e) => handleChange('paymentMethod', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white appearance-none"
                >
                  {paymentMethods.map(method => (
                    <option key={method} value={method}>{method}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Summary */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <AlertCircle size={20} className="text-orange-400" />
            Cost Summary
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-700/30 rounded-lg">
              <p className="text-gray-400 text-sm mb-1">Per Month</p>
              <p className="text-2xl font-bold text-white">
                ${subscription.amount ? subscription.amount.toFixed(2) : '0.00'}
              </p>
            </div>
            <div className="p-4 bg-gray-700/30 rounded-lg">
              <p className="text-gray-400 text-sm mb-1">Per Year</p>
              <p className="text-2xl font-bold text-white">
                ${subscription.amount ? (subscription.amount * 12).toFixed(2) : '0.00'}
              </p>
            </div>
            <div className="p-4 bg-gray-700/30 rounded-lg">
              <p className="text-gray-400 text-sm mb-1">First Charge</p>
              <p className="text-lg font-bold text-white">
                {subscription.nextBilling 
                  ? new Date(subscription.nextBilling).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                  : 'Not set'}
              </p>
            </div>
            <div className="p-4 bg-gray-700/30 rounded-lg">
              <p className="text-gray-400 text-sm mb-1">Frequency</p>
              <p className="text-lg font-bold text-white capitalize">
                {subscription.frequency}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all font-semibold shadow-lg shadow-blue-500/20"
          >
            <Plus size={20} />
            Add Subscription
          </button>
          <button className="px-6 py-4 bg-gray-700/50 hover:bg-gray-700 text-white rounded-xl transition-all font-semibold" onClick={()=>handlePageChange('subscriptions',onSelect,setIsMobileOpen=>{})}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}