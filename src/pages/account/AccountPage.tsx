import React, { useState } from 'react';
import { 
  User,
  Mail,
  Lock,
  Bell,
  CreditCard,
  Shield,
  Smartphone,
  Globe,
  Eye,
  EyeOff,
  Camera,
  Save,
  LogOut,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Download,
  Upload
} from 'lucide-react';
import ProfileTab from './ProfiteTab';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  type NotificationKey = 'email' | 'push' | 'renewals' | 'reports' | 'marketing';
  type Notifications = Record<NotificationKey, boolean>;

  const [notifications, setNotifications] = useState<Notifications>({
    email: true,
    push: true,
    renewals: true,
    reports: false,
    marketing: false
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User size={18} /> },
    { id: 'security', label: 'Security', icon: <Shield size={18} /> },
    { id: 'billing', label: 'Billing', icon: <CreditCard size={18} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
    { id: 'preferences', label: 'Preferences', icon: <Globe size={18} /> },
  ];

  const paymentMethods = [
    { id: 1, type: 'Visa', last4: '4242', expiry: '12/25', isDefault: true },
    { id: 2, type: 'Mastercard', last4: '8888', expiry: '08/26', isDefault: false },
    { id: 3, type: 'Amex', last4: '1234', expiry: '03/27', isDefault: false },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br rounded-2xl from-gray-900 via-black to-gray-900 p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Account Settings</h1>
          <p className="text-gray-400">Manage your account preferences and settings</p>
        </div>

        {/* Tabs */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-2">
          <div className="flex flex-wrap gap-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-transparent text-gray-400 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {tab.icon}
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6 lg:p-8">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <ProfileTab/>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Security Settings</h2>

              {/* Change Password */}
              <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600">
                <h3 className="text-white font-semibold text-lg mb-4">Change Password</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Current Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white pr-12"
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Confirm New Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                    />
                  </div>
                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-semibold">
                    Update Password
                  </button>
                </div>
              </div>

              {/* Two-Factor Authentication */}
              <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Two-Factor Authentication</h3>
                    <p className="text-gray-400 text-sm mt-1">Add an extra layer of security to your account</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <CheckCircle2 size={18} className="text-green-400" />
                    <span className="text-green-400 font-medium">Enabled</span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-gray-700/50 hover:bg-gray-700 text-white rounded-lg transition-all">
                  Manage 2FA
                </button>
              </div>

              {/* Sessions */}
              <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600">
                <h3 className="text-white font-semibold text-lg mb-4">Active Sessions</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Smartphone className="text-blue-400" size={20} />
                      <div>
                        <p className="text-white font-medium">iPhone 14 Pro</p>
                        <p className="text-gray-400 text-sm">New York, USA • Active now</p>
                      </div>
                    </div>
                    <span className="text-green-400 text-sm font-medium">Current</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Globe className="text-purple-400" size={20} />
                      <div>
                        <p className="text-white font-medium">Chrome on MacBook</p>
                        <p className="text-gray-400 text-sm">New York, USA • 2 hours ago</p>
                      </div>
                    </div>
                    <button className="text-red-400 hover:text-red-300 text-sm font-medium">
                      Revoke
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Billing Tab */}
          {activeTab === 'billing' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Billing & Payments</h2>

              {/* Payment Methods */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold text-lg">Payment Methods</h3>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all text-sm font-semibold">
                    Add Method
                  </button>
                </div>
                <div className="space-y-3">
                  {paymentMethods.map(method => (
                    <div
                      key={method.id}
                      className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg border border-gray-600 hover:border-gray-500 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <CreditCard className="text-white" size={20} />
                        </div>
                        <div>
                          <p className="text-white font-medium">{method.type} •••• {method.last4}</p>
                          <p className="text-gray-400 text-sm">Expires {method.expiry}</p>
                        </div>
                        {method.isDefault && (
                          <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-xs font-medium">
                            Default
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-600/50 rounded-lg transition-colors">
                          <Trash2 size={18} className="text-red-400" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Billing History */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold text-lg">Billing History</h3>
                  <button className="px-4 py-2 bg-gray-700/50 hover:bg-gray-700 text-white rounded-lg transition-all text-sm">
                    <Download size={16} className="inline mr-2" />
                    Export
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Date</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Description</th>
                        <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">Amount</th>
                        <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">Status</th>
                        <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">Invoice</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { date: 'Nov 15, 2024', desc: 'Monthly Subscriptions', amount: '$106.95', status: 'Paid' },
                        { date: 'Oct 15, 2024', desc: 'Monthly Subscriptions', amount: '$106.95', status: 'Paid' },
                        { date: 'Sep 15, 2024', desc: 'Monthly Subscriptions', amount: '$98.97', status: 'Paid' },
                      ].map((item, i) => (
                        <tr key={i} className="border-b border-gray-700/50 hover:bg-gray-700/20">
                          <td className="py-4 px-4 text-gray-300">{item.date}</td>
                          <td className="py-4 px-4 text-white">{item.desc}</td>
                          <td className="py-4 px-4 text-right text-white font-semibold">{item.amount}</td>
                          <td className="py-4 px-4 text-right">
                            <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs font-medium">
                              {item.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <button className="text-blue-400 hover:text-blue-300 text-sm">Download</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Notification Preferences</h2>

              <div className="space-y-4">
                {[
                  { key: 'email', label: 'Email Notifications', desc: 'Receive email updates about your subscriptions' },
                  { key: 'push', label: 'Push Notifications', desc: 'Get push notifications on your devices' },
                  { key: 'renewals', label: 'Renewal Reminders', desc: 'Get notified before subscriptions renew' },
                  { key: 'reports', label: 'Weekly Reports', desc: 'Receive weekly spending summaries' },
                  { key: 'marketing', label: 'Marketing Emails', desc: 'Receive promotional content and offers' },
                ].map(notif => (
                  <div
                    key={notif.key}
                    className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg border border-gray-600"
                  >
                    <div>
                    <button
                      onClick={() =>
                        setNotifications({
                          ...notifications,
                          [notif.key as keyof Notifications]: !notifications[notif.key as keyof Notifications]
                        })
                      }
                      className={`relative w-14 h-7 rounded-full transition-all ${
                        notifications[notif.key as keyof Notifications] ? 'bg-blue-600' : 'bg-gray-600'
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${
                          notifications[notif.key as keyof Notifications] ? 'right-1' : 'left-1'
                        }`}
                      />
                    </button>
                  </div>
              </div>
                ))}
              </div>
            </div>
          )}
          {/* Preferences Tab */}
          {activeTab === 'preferences' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">App Preferences</h2>

              <div className="space-y-6">
                {/* Language */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Language</label>
                  <select className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white">
                    <option>English (US)</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>

                {/* Currency */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Currency</label>
                  <select className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white">
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                    <option>GBP (£)</option>
                    <option>JPY (¥)</option>
                  </select>
                </div>

                {/* Time Zone */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Time Zone</label>
                  <select className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white">
                    <option>Eastern Time (ET)</option>
                    <option>Central Time (CT)</option>
                    <option>Mountain Time (MT)</option>
                    <option>Pacific Time (PT)</option>
                  </select>
                </div>

                <div className="flex justify-end pt-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-semibold">
                    <Save size={18} />
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Danger Zone */}
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
          <h3 className="text-red-400 font-semibold text-lg mb-4 flex items-center gap-2">
            <AlertCircle size={20} />
            Danger Zone
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Log out from all devices</p>
                <p className="text-gray-400 text-sm">This will end all active sessions</p>
              </div>
              <button className="px-4 py-2 bg-gray-700/50 hover:bg-gray-700 text-white rounded-lg transition-all text-sm">
                <LogOut size={16} className="inline mr-2" />
                Log Out All
              </button>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-red-500/20">
              <div>
                <p className="text-white font-medium">Delete Account</p>
                <p className="text-gray-400 text-sm">Permanently delete your account and all data</p>
              </div>
              <button className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 rounded-lg transition-all text-sm">
                <Trash2 size={16} className="inline mr-2" />
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}