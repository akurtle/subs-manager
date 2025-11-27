// Sample subscription data
export const initialSubscriptions = [
  { id: 1, name: 'Netflix', amount: 15.99, date: 15, color: '#E50914' },
  { id: 2, name: 'Spotify', amount: 9.99, date: 1, color: '#1DB954' },
  { id: 3, name: 'Adobe CC', amount: 54.99, date: 10, color: '#FF0000' },
  { id: 4, name: 'Amazon Prime', amount: 14.99, date: 5, color: '#FF9900' },
  { id: 5, name: 'Apple iCloud', amount: 2.99, date: 20, color: '#147CE5' },
];

export const upcomingSubscriptions = [
  { id: 1, name: 'Netflix', amount: 15.99, daysUntil: 3, color: '#E50914' },
  { id: 2, name: 'Spotify', amount: 9.99, daysUntil: 5, color: '#1DB954' },
  { id: 3, name: 'Adobe CC', amount: 54.99, daysUntil: 8, color: '#FF0000' },
];

export const recentTransactions = [
  { id: 1, name: 'Amazon Prime', amount: 14.99, date: '2 days ago', status: 'paid' },
  { id: 2, name: 'Apple iCloud', amount: 2.99, date: '5 days ago', status: 'paid' },
  { id: 3, name: 'Disney+', amount: 10.99, date: '1 week ago', status: 'paid' },
];

export const categoryBreakdown = [
  { name: 'Entertainment', amount: 36.97, percentage: 35, color: '#E50914' },
  { name: 'Productivity', amount: 54.99, percentage: 52, color: '#FF0000' },
  { name: 'Storage', amount: 14.99, percentage: 13, color: '#147CE5' },
];

export const monthlyData = [
  { month: 'Jan', spending: 95, subscriptions: 6 },
  { month: 'Feb', spending: 102, subscriptions: 7 },
  { month: 'Mar', spending: 98, subscriptions: 7 },
  { month: 'Apr', spending: 110, subscriptions: 8 },
  { month: 'May', spending: 106, subscriptions: 8 },
  { month: 'Jun', spending: 115, subscriptions: 9 },
  { month: 'Jul', spending: 108, subscriptions: 8 },
  { month: 'Aug', spending: 112, subscriptions: 8 },
  { month: 'Sep', spending: 107, subscriptions: 8 },
  { month: 'Oct', spending: 120, subscriptions: 9 },
  { month: 'Nov', spending: 106, subscriptions: 8 },
  { month: 'Dec', spending: 118, subscriptions: 9 },
];

export const categoryData = [
  { name: 'Entertainment', value: 45, color: '#E50914' },
  { name: 'Productivity', value: 30, color: '#FF6B6B' },
  { name: 'Storage', value: 15, color: '#4ECDC4' },
  { name: 'Education', value: 10, color: '#95E1D3' },
];

export const topSubscriptions = [
  { name: 'Adobe CC', amount: 54.99, trend: 0, color: '#FF0000' },
  { name: 'Netflix', amount: 15.99, trend: 2, color: '#E50914' },
  { name: 'Amazon Prime', amount: 14.99, trend: 0, color: '#FF9900' },
  { name: 'Spotify', amount: 9.99, trend: -1, color: '#1DB954' },
  { name: 'Disney+', amount: 10.99, trend: 3, color: '#113CCF' },
];

export const yearlyComparison = [
  { year: '2022', total: 1150 },
  { year: '2023', total: 1280 },
  { year: '2024', total: 1320 },
];