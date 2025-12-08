import React from 'react'

import type { NotificationsType } from "./AccountPage"

function AccNotifications({ notifications, setNotifications }: { notifications: NotificationsType; setNotifications: React.Dispatch<React.SetStateAction<NotificationsType>> }) {

    const notifStuff = [{ key: 'email', label: 'Email Notifications', desc: 'Receive email updates about your subscriptions' },
    { key: 'push', label: 'Push Notifications', desc: 'Get push notifications on your devices' },
    { key: 'renewals', label: 'Renewal Reminders', desc: 'Get notified before subscriptions renew' },
    { key: 'reports', label: 'Weekly Reports', desc: 'Receive weekly spending summaries' },
    { key: 'marketing', label: 'Marketing Emails', desc: 'Receive promotional content and offers' },
    ]
    return (<div className="space-y-6">
        <h2 className="text-2xl font-bold text-white mb-6">Notification Preferences</h2>

        <div className="space-y-4">
            {notifStuff.map(notif => (
                <div
                    key={notif.key}
                    className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg border border-gray-600"
                >
                    <div className='flex items-center w-full justify-between'>
                        <div>{notif.label}</div>
                        <button
                            onClick={() =>
                                setNotifications({
                                    ...notifications,
                                    [notif.key as keyof NotificationsType]: !notifications[notif.key as keyof NotificationsType]
                                })
                            }
                            className={`relative w-14 h-7 rounded-full transition-all ${notifications[notif.key as keyof NotificationsType] ? 'bg-blue-600' : 'bg-gray-600'
                                }`}
                        >
                            <div
                                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${notifications[notif.key as keyof NotificationsType] ? 'right-1' : 'left-1'
                                    }`}
                            />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default AccNotifications