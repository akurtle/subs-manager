import { CreditCard, Trash2, Download } from 'lucide-react'
import React from 'react'


const paymentMethods = [
    { id: 1, type: 'Visa', last4: '4242', expiry: '12/25', isDefault: true },
    { id: 2, type: 'Mastercard', last4: '8888', expiry: '08/26', isDefault: false },
    { id: 3, type: 'Amex', last4: '1234', expiry: '03/27', isDefault: false },
  ];

function BillingTab() {
  return (
    <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Billing & Payments</h2>

              {/* Payment Methods */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold text-lg">Payment Methods</h3>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all text-sm font-semibold">
                    Add Method
                  </button>
                </div>
                <div className="space-y-3">
                  {paymentMethods.map(method => (
                    <div
                      key={method.id}
                      className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg border border-gray-600 hover:border-gray-500 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <CreditCard className="text-white" size={20} />
                        </div>
                        <div>
                          <p className="text-white font-medium">{method.type} •••• {method.last4}</p>
                          <p className="text-gray-400 text-sm">Expires {method.expiry}</p>
                        </div>
                        {method.isDefault && (
                          <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-xs font-medium">
                            Default
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-600/50 rounded-lg transition-colors">
                          <Trash2 size={18} className="text-red-400" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Billing History */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold text-lg">Billing History</h3>
                  <button className="px-4 py-2 bg-gray-700/50 hover:bg-gray-700 text-white rounded-lg transition-all text-sm">
                    <Download size={16} className="inline mr-2" />
                    Export
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Date</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Description</th>
                        <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">Amount</th>
                        <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">Status</th>
                        <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">Invoice</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { date: 'Nov 15, 2024', desc: 'Monthly Subscriptions', amount: '$106.95', status: 'Paid' },
                        { date: 'Oct 15, 2024', desc: 'Monthly Subscriptions', amount: '$106.95', status: 'Paid' },
                        { date: 'Sep 15, 2024', desc: 'Monthly Subscriptions', amount: '$98.97', status: 'Paid' },
                      ].map((item, i) => (
                        <tr key={i} className="border-b border-gray-700/50 hover:bg-gray-700/20">
                          <td className="py-4 px-4 text-gray-300">{item.date}</td>
                          <td className="py-4 px-4 text-white">{item.desc}</td>
                          <td className="py-4 px-4 text-right text-white font-semibold">{item.amount}</td>
                          <td className="py-4 px-4 text-right">
                            <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs font-medium">
                              {item.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <button className="text-blue-400 hover:text-blue-300 text-sm">Download</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
  )
}

export default BillingTab