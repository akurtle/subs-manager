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
import SecurityTab from './SecurityTab';
import BillingTab from './BillingTab';
import PrefTab from './PrefTab';
import { useSupabase } from '@/context/useSupabase';


  type NotificationKey = 'email' | 'push' | 'renewals' | 'reports' | 'marketing';
  export type NotificationsType = Record<NotificationKey, boolean>;

export default function AccountPage() {

  const supabase = useSupabase()

  const user = supabase.user

  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);

  const [notifications, setNotifications] = useState<NotificationsType>({
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
    { id: 'preferences', label: 'Preferences', icon: <Globe size={18} /> },
  ];

  // const handleLogin = async (event: any) => {
  //       event.preventDefault();
  //       setLoading(true);
  //       const { error } = await supabase.auth.signInWithOAuth({
  //           provider: 'google',
  //           options: {
  //               redirectTo: 'http://localhost:5173/pageHandler'
  //           }
  //       });
  //       if (error) {
  //           alert(error.code || error.message);
  //       }
  //       setLoading(false);
  //   };

  const handleLogOut=async(event:any)=>{
        // event.preventDefault();

        console.log("Logging out")
        const { error } = await supabase.supabase.auth.signOut();
        if (error) {
            alert(error.code || error.message);
            
        console.log("Logging out Failed")
        }
  }


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
            <ProfileTab user={user}/>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
           <SecurityTab showPassword={showPassword} setShowPassword={setShowPassword}/>
          )}

          {/* Billing Tab */}
          {activeTab === 'billing' && (
            <BillingTab/>
          )}

          {/* Preferences Tab */}
          {activeTab === 'preferences' && (
          <PrefTab/>
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
              <button className="px-4 py-2 bg-gray-700/50 hover:bg-gray-700 text-white rounded-lg transition-all text-sm" onClick={handleLogOut}>
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