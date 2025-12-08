import type { User } from '@supabase/supabase-js'
import { Camera, Upload, Save } from 'lucide-react'
import React from 'react'


type ProfileTabProps={
  user:User | null
}

export default function ProfileTab({user}:ProfileTabProps) {

  return (
    <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Profile Information</h2>
              
              {/* Profile Picture */}
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
                    JD
                  </div>
                  <button className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                    <Camera size={16} className="text-white" />
                  </button>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{user?.user_metadata.full_name}</h3>
                  {/* <p className="text-gray-400 text-sm mb-3">JPG, PNG or GIF. Max size 2MB</p> */}
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-gray-700/50 hover:bg-gray-700 rounded-lg text-white text-sm transition-colors">
                      <Upload size={16} className="inline mr-2" />
                      Upload
                    </button>
                    <button className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg text-red-400 text-sm transition-colors">
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-semibold">
                  <Save size={18} />
                  Save Changes
                </button>
              </div>
            </div>
  )
}
