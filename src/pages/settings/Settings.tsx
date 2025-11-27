import React, { useState } from 'react';
import { 
  Settings,
  Moon,
  Sun,
  Monitor,
  Bell,
  Mail,
  Smartphone,
  DollarSign,
  Calendar,
  Clock,
  Database,
  Download,
  Upload,
  Lock,
  Eye,
  Shield,
  Zap,
  Globe,
  Palette,
  Layout,
  BarChart3,
  FileText,
  AlertTriangle,
  CheckCircle2,
  RefreshCw,
  Trash2,
  HardDrive
} from 'lucide-react';
import Appearance from './Appearance';

export default function SettingsPage() {
  const [theme, setTheme] = useState('dark');
  const [currency, setCurrency] = useState('USD');
  const [dateFormat, setDateFormat] = useState('MM/DD/YYYY');
  const [autoBackup, setAutoBackup] = useState(true);
  const [dataSync, setDataSync] = useState(true);
  const [analytics, setAnalytics] = useState(true);
  const [compactView, setCompactView] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br rounded-2xl from-gray-900 via-black to-gray-900 p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Settings className="text-blue-400" />
            Settings
          </h1>
          <p className="text-gray-400">Customize your subscription manager experience</p>
        </div>

        {/* Appearance Section */}

        <Appearance theme={theme} setTheme={setTheme} compactView={compactView} setCompactView={setCompactView} />

        {/* Localization Section */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-500/20 border border-blue-500/30 rounded-lg">
              <Globe size={20} className="text-blue-400" />
            </div>
            <h2 className="text-xl font-bold text-white">Localization</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Currency */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Currency</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white appearance-none"
                >
                  <option value="USD">US Dollar (USD)</option>
                  <option value="EUR">Euro (EUR)</option>
                  <option value="GBP">British Pound (GBP)</option>
                  <option value="JPY">Japanese Yen (JPY)</option>
                  <option value="CAD">Canadian Dollar (CAD)</option>
                  <option value="AUD">Australian Dollar (AUD)</option>
                </select>
              </div>
            </div>

            {/* Date Format */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Date Format</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={dateFormat}
                  onChange={(e) => setDateFormat(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white appearance-none"
                >
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>
            </div>

            {/* Time Zone */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Time Zone</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <select className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white appearance-none">
                  <option>Eastern Time (ET)</option>
                  <option>Central Time (CT)</option>
                  <option>Mountain Time (MT)</option>
                  <option>Pacific Time (PT)</option>
                  <option>UTC</option>
                </select>
              </div>
            </div>

            {/* Language */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Language</label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <select className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white appearance-none">
                  <option>English (US)</option>
                  <option>English (UK)</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Japanese</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications Settings */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-500/20 border border-green-500/30 rounded-lg">
              <Bell size={20} className="text-green-400" />
            </div>
            <h2 className="text-xl font-bold text-white">Notifications</h2>
          </div>

          <div className="space-y-4">
            {[
              { icon: <Mail size={20} />, label: 'Email Notifications', desc: 'Receive updates via email', enabled: true },
              { icon: <Smartphone size={20} />, label: 'Push Notifications', desc: 'Get alerts on your device', enabled: true },
              { icon: <Clock size={20} />, label: 'Renewal Reminders', desc: '3 days before subscription renews', enabled: true },
              { icon: <DollarSign size={20} />, label: 'Payment Alerts', desc: 'Notify when payments are processed', enabled: true },
              { icon: <BarChart3 size={20} />, label: 'Weekly Reports', desc: 'Get weekly spending summaries', enabled: false },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="text-gray-400">{item.icon}</div>
                  <div>
                    <p className="text-white font-medium">{item.label}</p>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
                <button
                  className={`relative w-14 h-7 rounded-full transition-all ${
                    item.enabled ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${
                      item.enabled ? 'right-1' : 'left-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Data & Privacy */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-500/20 border border-orange-500/30 rounded-lg">
              <Shield size={20} className="text-orange-400" />
            </div>
            <h2 className="text-xl font-bold text-white">Data & Privacy</h2>
          </div>

          <div className="space-y-4">
            {/* Auto Backup */}
            <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
              <div className="flex items-center gap-3">
                <Database className="text-gray-400" size={20} />
                <div>
                  <p className="text-white font-medium">Automatic Backups</p>
                  <p className="text-gray-400 text-sm">Daily backup of your data</p>
                </div>
              </div>
              <button
                onClick={() => setAutoBackup(!autoBackup)}
                className={`relative w-14 h-7 rounded-full transition-all ${
                  autoBackup ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${
                    autoBackup ? 'right-1' : 'left-1'
                  }`}
                />
              </button>
            </div>

            {/* Data Sync */}
            <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
              <div className="flex items-center gap-3">
                <RefreshCw className="text-gray-400" size={20} />
                <div>
                  <p className="text-white font-medium">Cloud Sync</p>
                  <p className="text-gray-400 text-sm">Sync data across devices</p>
                </div>
              </div>
              <button
                onClick={() => setDataSync(!dataSync)}
                className={`relative w-14 h-7 rounded-full transition-all ${
                  dataSync ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${
                    dataSync ? 'right-1' : 'left-1'
                  }`}
                />
              </button>
            </div>

            {/* Analytics */}
            <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
              <div className="flex items-center gap-3">
                <BarChart3 className="text-gray-400" size={20} />
                <div>
                  <p className="text-white font-medium">Usage Analytics</p>
                  <p className="text-gray-400 text-sm">Help improve the app</p>
                </div>
              </div>
              <button
                onClick={() => setAnalytics(!analytics)}
                className={`relative w-14 h-7 rounded-full transition-all ${
                  analytics ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${
                    analytics ? 'right-1' : 'left-1'
                  }`}
                />
              </button>
            </div>

            {/* Export/Import Buttons */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-medium">
                <Download size={18} />
                Export Data
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-700/50 hover:bg-gray-700 text-white rounded-lg transition-all font-medium">
                <Upload size={18} />
                Import Data
              </button>
            </div>
          </div>
        </div>

        {/* Advanced Settings */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-500/20 border border-red-500/30 rounded-lg">
              <Zap size={20} className="text-red-400" />
            </div>
            <h2 className="text-xl font-bold text-white">Advanced</h2>
          </div>

          <div className="space-y-4">
            {/* Storage Info */}
            <div className="p-4 bg-gray-700/30 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <HardDrive className="text-gray-400" size={20} />
                  <div>
                    <p className="text-white font-medium">Storage Used</p>
                    <p className="text-gray-400 text-sm">2.4 MB of 100 MB</p>
                  </div>
                </div>
                <span className="text-blue-400 font-semibold">2.4%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '2.4%' }} />
              </div>
            </div>

            {/* Cache Management */}
            <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
              <div>
                <p className="text-white font-medium">Clear Cache</p>
                <p className="text-gray-400 text-sm">Free up 45 MB of space</p>
              </div>
              <button className="px-4 py-2 bg-gray-700/50 hover:bg-gray-700 text-white rounded-lg transition-all text-sm font-medium">
                Clear
              </button>
            </div>

            {/* Reset Settings */}
            <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
              <div>
                <p className="text-white font-medium">Reset All Settings</p>
                <p className="text-gray-400 text-sm">Restore default settings</p>
              </div>
              <button className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 rounded-lg transition-all text-sm font-medium">
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* App Info */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gray-500/20 border border-gray-500/30 rounded-lg">
              <FileText size={20} className="text-gray-400" />
            </div>
            <h2 className="text-xl font-bold text-white">About</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
              <span className="text-gray-300">Version</span>
              <span className="text-white font-medium">1.0.0</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
              <span className="text-gray-300">Last Updated</span>
              <span className="text-white font-medium">Nov 27, 2024</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="px-4 py-2 bg-gray-700/50 hover:bg-gray-700 text-white rounded-lg transition-all text-sm">
                Privacy Policy
              </button>
              <button className="px-4 py-2 bg-gray-700/50 hover:bg-gray-700 text-white rounded-lg transition-all text-sm">
                Terms of Service
              </button>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all font-semibold shadow-lg shadow-blue-500/20">
            <CheckCircle2 size={20} />
            Save All Settings
          </button>
        </div>
      </div>
    </div>
  );
}