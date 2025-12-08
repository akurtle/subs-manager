import { Globe, DollarSign, Calendar, Clock } from 'lucide-react'
import React from 'react'

interface LocalizationProps {
    currency: string;
    setCurrency: (value: string) => void;
    dateFormat: string;
    setDateFormat: (value: string) => void;
}

function Localization(props: LocalizationProps) {

    const { currency, setCurrency, dateFormat, setDateFormat } = props;
    return (
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
                    <div className="relative">  qaaa
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
    )
}

export default Localization