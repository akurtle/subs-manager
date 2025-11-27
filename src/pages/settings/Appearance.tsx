import { useTheme } from '@/context/ThemeContext';
import { Palette, Sun, Moon, Monitor, Layout } from 'lucide-react'
import React from 'react'

interface AppearanceProps{
    theme: string;
    setTheme: (theme: string) => void;
    compactView: boolean;
    setCompactView: (value: boolean) => void;
}

function Appearance(props: AppearanceProps) {

  const {theme,setTheme,compactView, setCompactView} = props;

  const { toggleTheme } = useTheme();
  
  const switchingTheme = (option:string
  ) => {
    setTheme(option);
    toggleTheme();
  }

  return (
       <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/20 border border-purple-500/30 rounded-lg">
              <Palette size={20} className="text-purple-400" />
            </div>
            <h2 className="text-xl font-bold text-white">Appearance</h2>
          </div>

          <div className="space-y-6">
            {/* Theme Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">Theme</label>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 'light', label: 'Light', icon: <Sun size={20} /> },
                  { value: 'dark', label: 'Dark', icon: <Moon size={20} /> },
                  { value: 'system', label: 'System', icon: <Monitor size={20} /> },
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => switchingTheme(option.value)}
                    className={`flex flex-col items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                      theme === option.value
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-gray-600 bg-gray-700/30 hover:border-gray-500'
                    }`}
                  >
                    <div className={theme === option.value ? 'text-blue-400' : 'text-gray-400'}>
                      {option.icon}
                    </div>
                    <span className="text-white font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Accent Color */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">Accent Color</label>
              <div className="flex gap-3">
                {['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B', '#EF4444'].map(color => (
                  <button
                    key={color}
                    className="w-12 h-12 rounded-lg border-2 border-gray-600 hover:border-gray-400 transition-all hover:scale-110"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Compact View */}
            <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
              <div className="flex items-center gap-3">
                <Layout className="text-gray-400" size={20} />
                <div>
                  <p className="text-white font-medium">Compact View</p>
                  <p className="text-gray-400 text-sm">Display more items on screen</p>
                </div>
              </div>
              <button
                onClick={() => setCompactView(!compactView)}
                className={`relative w-14 h-7 rounded-full transition-all ${
                  compactView ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${
                    compactView ? 'right-1' : 'left-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
  )
}

export default Appearance