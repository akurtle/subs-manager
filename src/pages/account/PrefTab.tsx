import { Save } from 'lucide-react'
import React from 'react'

function PrefTab() {
  return (
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
  )
}

export default PrefTab