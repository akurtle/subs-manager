import { Bell, Mail, Smartphone, Clock, DollarSign, BarChart3 } from 'lucide-react'
import React, { useState } from 'react'

function Notifications() {

    const toggleNotification = (index: number) => {
        setSettings(prev =>
            prev.map((item, i) =>
                i === index ? { ...item, enabled: !item.enabled } : item
            )
        );
    };

    // Can be converted to a type 
    const [settings, setSettings] = useState([
        { icon: <Mail size={20} />, label: 'Email Notifications', desc: 'Receive updates via email', enabled: true },
        { icon: <Smartphone size={20} />, label: 'Push Notifications', desc: 'Get alerts on your device', enabled: true },
        { icon: <Clock size={20} />, label: 'Renewal Reminders', desc: '3 days before subscription renews', enabled: true },
        { icon: <DollarSign size={20} />, label: 'Payment Alerts', desc: 'Notify when payments are processed', enabled: true },
        { icon: <BarChart3 size={20} />, label: 'Weekly Reports', desc: 'Get weekly spending summaries', enabled: false },
    ])
    return (
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <Bell size={20} className="text-green-400" />
                </div>
                <h2 className="text-xl font-bold text-white">Notifications</h2>
            </div>

            <div className="space-y-4">
                {settings.map((item, i) => (
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
                            onClick={()=>toggleNotification(i)}
                            className={`relative w-14 h-7 rounded-full transition-all ${item.enabled ? 'bg-blue-600' : 'bg-gray-600'
                                }`}
                        >
                            <div
                                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${item.enabled ? 'right-1' : 'left-1'
                                    }`}
                            />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notifications