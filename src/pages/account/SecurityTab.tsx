import { EyeOff, Eye, CheckCircle2, Smartphone, Globe } from 'lucide-react'
import React from 'react'

type SecurityTabProps = {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

function SecurityTab({ showPassword, setShowPassword }: SecurityTabProps) {
    return (
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
    )
}

export default SecurityTab