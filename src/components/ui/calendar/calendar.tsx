import React, { useState } from 'react';
import { Calendar, X, Plus, DollarSign, CreditCard, Trash2 } from 'lucide-react';

// Sample subscription data
const initialSubscriptions = [
  { id: 1, name: 'Netflix', amount: 15.99, date: 15, color: '#E50914' },
  { id: 2, name: 'Spotify', amount: 9.99, date: 1, color: '#1DB954' },
  { id: 3, name: 'Adobe CC', amount: 54.99, date: 10, color: '#FF0000' },
  { id: 4, name: 'Amazon Prime', amount: 14.99, date: 5, color: '#FF9900' },
  { id: 5, name: 'Apple iCloud', amount: 2.99, date: 20, color: '#147CE5' },
];

export default function CalendarStuff() {
  const [subscriptions, setSubscriptions] = useState(initialSubscriptions);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSub, setNewSub] = useState({ name: '', amount: '', date: '' });

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getSubscriptionsForDate = (day:number) => {
    return subscriptions.filter(sub => sub.date === day);
  };

  const handleDateClick = (day:any) => {
    setSelectedDate(day);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleAddSubscription = () => {
    if (newSub.name && newSub.amount && newSub.date) {
      const sub = {
        id: Date.now(),
        name: newSub.name,
        amount: parseFloat(newSub.amount),
        date: parseInt(newSub.date),
        color: `#${Math.floor(Math.random()*16777215).toString(16)}`
      };
      setSubscriptions([...subscriptions, sub]);
      setNewSub({ name: '', amount: '', date: '' });
      setShowAddForm(false);
    }
  };

  const handleDeleteSubscription = (id:number) => {
    setSubscriptions(subscriptions.filter(sub => sub.id !== id));
  };

  const totalMonthly = subscriptions.reduce((sum, sub) => sum + sub.amount, 0);

  const renderCalendarDays = () => {
    const days = [];
    
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="aspect-square" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const daySubscriptions = getSubscriptionsForDate(day);
      const isSelected = selectedDate === day;
      
      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(day)}
          className={`aspect-square p-2 rounded-lg border-2 transition-all hover:border-blue-400/50 hover:bg-gray-700/50 relative ${
            isSelected ? 'border-blue-500 bg-gray-700/70 shadow-lg shadow-blue-500/20' : 'border-gray-700 bg-gray-800/40'
          }`}
        >
          <div className="text-sm font-semibold text-gray-200">{day}</div>
          {daySubscriptions.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-1 justify-center">
              {daySubscriptions.slice(0, 3).map(sub => (
                <div
                  key={sub.id}
                  className="w-1.5 h-1.5 rounded-full shadow-sm"
                  style={{ backgroundColor: sub.color }}
                />
              ))}
              {daySubscriptions.length > 3 && (
                <div className="text-xs text-gray-400">+{daySubscriptions.length - 3}</div>
              )}
            </div>
          )}
        </button>
      );
    }

    return days;
  };

  return (
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar Section */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={handlePrevMonth}
                    className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white transition-all"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNextMonth}
                    className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white transition-all"
                  >
                    →
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-sm font-semibold text-gray-400 py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {renderCalendarDays()}
              </div>
            </div>

            {/* Summary Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <DollarSign className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Monthly Total</p>
                    <p className="text-2xl font-bold text-white">${totalMonthly.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                    <Calendar className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Active Subscriptions</p>
                    <p className="text-2xl font-bold text-white">{subscriptions.length}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Selected Date Subscriptions */}
            <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                {selectedDate ? `Subscriptions on Day ${selectedDate}` : 'Select a date'}
              </h3>
              
              {selectedDate ? (
                <div className="space-y-3">
                  {getSubscriptionsForDate(selectedDate).length > 0 ? (
                    getSubscriptionsForDate(selectedDate).map(sub => (
                      <div
                        key={sub.id}
                        className="p-4 rounded-lg bg-gray-700/30 border-2 hover:bg-gray-700/50 hover:shadow-lg transition-all"
                        style={{ borderColor: sub.color }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-3 h-3 rounded-full shadow-lg"
                              style={{ backgroundColor: sub.color, boxShadow: `0 0 10px ${sub.color}` }}
                            />
                            <div>
                              <p className="font-semibold text-white">{sub.name}</p>
                              <p className="text-sm text-gray-400">${sub.amount}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleDeleteSubscription(sub.id)}
                            className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-8">No subscriptions on this day</p>
                  )}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">Click a date to view subscriptions</p>
              )}
            </div>

            {/* Add Subscription */}
            <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-xl p-6">
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-semibold shadow-lg shadow-blue-500/20"
              >
                <Plus size={20} />
                Add Subscription
              </button>

              {showAddForm && (
                <div className="mt-4 space-y-3">
                  <input
                    type="text"
                    placeholder="Service name"
                    value={newSub.name}
                    onChange={(e) => setNewSub({ ...newSub, name: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-700/50 border-2 border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
                  />
                  <input
                    type="number"
                    placeholder="Amount"
                    value={newSub.amount}
                    onChange={(e) => setNewSub({ ...newSub, amount: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-700/50 border-2 border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
                  />
                  <input
                    type="number"
                    placeholder="Day of month (1-31)"
                    min="1"
                    max="31"
                    value={newSub.date}
                    onChange={(e) => setNewSub({ ...newSub, date: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-700/50 border-2 border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
                  />
                  <button
                    onClick={handleAddSubscription}
                    className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-semibold shadow-lg shadow-green-500/20"
                  >
                    Save
                  </button>
                </div>
              )}
            </div>

            {/* All Subscriptions List */}
            <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">All Subscriptions</h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {subscriptions.map(sub => (
                  <div
                    key={sub.id}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: sub.color }}
                      />
                      <span className="text-sm font-medium text-gray-200">{sub.name}</span>
                    </div>
                    <span className="text-sm text-gray-400">${sub.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}