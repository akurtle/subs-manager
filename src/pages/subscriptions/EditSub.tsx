import React, { useState } from 'react';
import { 
  ArrowLeft,
  Save,
  Trash2,
  Calendar,
  DollarSign,
  CreditCard,
  Tag,
  Type,
  Clock,
  Palette,
  AlertCircle,
  CheckCircle2,
  X
} from 'lucide-react';
import type { Subscription } from './Subscription';
import { handlePageChange } from '@/components/reusable/sidebar';
import type { PageType } from '../pageHandler';




// Sample subscription data


// Change for a database
const sampleSubscription:Subscription = {
  id: 1,
  name: 'Netflix',
  amount: 15.99,
  category: 'Entertainment',
  color: '#E50914',
  frequency: 'monthly',
  nextBilling: '2024-12-15',
  paymentMethod: 'Visa •••• 4242',
  status: 'active'
};

export default function EditSubscriptionPage({onSelect}:{onSelect: (page:PageType) => void}) {
  const [subscription, setSubscription] = useState<Subscription>(sampleSubscription);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const categories = ['Entertainment', 'Productivity', 'Storage', 'Shopping', 'Education', 'Health', 'Other'];
  const frequencies = ['daily', 'weekly', 'monthly', 'quarterly', 'yearly'];
  const statuses = ['active', 'trial', 'paused', 'cancelled'];
  const paymentMethods = [
    'Visa •••• 4242',
    'Mastercard •••• 8888',
    'Amex •••• 1234',
    'Apple Pay',
    'PayPal'
  ];

  const colorOptions = [
    '#E50914', '#1DB954', '#FF0000', '#FF9900', '#147CE5',
    '#8B5CF6', '#EC4899', '#10B981', '#F59E0B', '#EF4444',
    '#06B6D4', '#84CC16', '#F97316', '#A855F7', '#14B8A6'
  ];


  // Field and value should be any as it can be anything here
  const handleChange = (field:any, value:any) => {
    setSubscription({ ...subscription, [field]: value });
  };

  const handleSave = () => {
    // Here you would typically save to backend/state management
    console.log('Saving subscription:', subscription);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleDelete = () => {
    // Here you would typically delete from backend/state management
    console.log('Deleting subscription:', subscription.id);
    setShowDeleteModal(false);
    // Navigate back or show confirmation
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 p-6 lg:p-8 rounded-2xl">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors" onClick={()=>{handlePageChange("subscriptions",onSelect,setIsMobileOpen=>{})}}>
              <ArrowLeft className="text-gray-400 hover:text-white" size={24} />
            </button>
            <div>
              <h1 className="text-4xl font-bold text-white">Edit Subscription</h1>
              <p className="text-gray-400 mt-1">Update your subscription details</p>
            </div>
          </div>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 rounded-lg transition-all"
          >
            <Trash2 size={18} />
            Delete
          </button>
        </div>

        {/* Success Message */}
        {showSuccessMessage && (
          <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 flex items-center gap-3 animate-fade-in">
            <CheckCircle2 className="text-green-400" size={20} />
            <span className="text-green-400 font-medium">Subscription updated successfully!</span>
          </div>
        )}

        {/* Preview Card */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
          <h3 className="text-sm font-medium text-gray-400 mb-4">Preview</h3>
          <div className="flex items-center gap-4 p-6 bg-gray-700/30 rounded-lg border-2" style={{ borderColor: subscription.color }}>
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg"
              style={{ backgroundColor: subscription.color }}
            >
              {subscription.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white">{subscription.name || 'Subscription Name'}</h3>
              <p className="text-sm text-gray-400 capitalize">{subscription.category}</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-white">${subscription.amount || '0.00'}</p>
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
                placeholder="e.g., Netflix, Spotify"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
              />
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
              <div className="grid grid-cols-4 gap-3">
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
                  className="w-full pl-8 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
                />
              </div>
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
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                />
              </div>
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

        {/* Additional Information */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <AlertCircle size={20} className="text-orange-400" />
            Additional Information
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-blue-400 mt-0.5" size={20} />
                <div>
                  <p className="text-blue-400 font-medium mb-1">Cost Breakdown</p>
                  <div className="space-y-1 text-sm text-blue-300">
                    <p>• Monthly: ${subscription.amount?.toFixed(2) || '0.00'}</p>
                    <p>• Yearly: ${((subscription.amount || 0) * 12).toFixed(2)}</p>
                    <p>• Next charge: {new Date(subscription.nextBilling).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleSave}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all font-semibold shadow-lg shadow-blue-500/20"
          >
            <Save size={20} />
            Save Changes
          </button>
          <button className="px-6 py-4 bg-gray-700/50 hover:bg-gray-700 text-white rounded-xl transition-all font-semibold">
            Cancel
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 max-w-md w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                <AlertCircle className="text-red-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Delete Subscription?</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Are you sure you want to delete <span className="text-white font-semibold">{subscription.name}</span>? 
              This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleDelete}
                className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all font-semibold"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-4 py-3 bg-gray-700/50 hover:bg-gray-700 text-white rounded-lg transition-all font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}