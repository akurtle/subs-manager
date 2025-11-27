import Navbar from '@/components/reusable/navbar'
import CustomCalendar from '@/components/reusable/calendar'
import React, { useState } from 'react'
import Sidebar from '@/components/reusable/sidebar'
import { AnimatePresence, motion } from "framer-motion";
import CalendarStuff from '@/components/ui/calendar/calendar';
import Settings from '../settings/Settings';
import Home from '../home/home';
import OverviewPage from '../overview/Overview';
import AnalyticsPage from '../analytics/AnalyticsMain';
import SubscriptionsPage from '../subscriptions/Subscription';
import AccountPage from '../account/AccountPage';
import SettingsPage from '../settings/Settings';

export type PageType =   "calendar" | "settings" | "overview" | "analytics" | "subscriptions";

function PageHandler() {

  const [page, setPage] = useState<PageType>("overview");

  const pages = {
    calendar: <CalendarStuff />,
    settings: <SettingsPage />,
    overview: <OverviewPage/>,
    analytics: <AnalyticsPage/>,
    subscriptions: <SubscriptionsPage/>,
    account: <AccountPage/>
  };
  const [date, setDate] = useState(new Date());
  return (
    <div className="min-h-screen w-full bg-linear-to-b from-black via-gray-900 to-black text-white flex flex-col">

      <Navbar />
      <div className="flex flex-1 overflow-hidden">

        <Sidebar onSelect={setPage} />

        <main className="flex-1 w-full  p-4 overflow-auto flex flex-col bg-black items-center">
          <div className=" w-full min-h-screen  relative overflow-hidden bg-neutral">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute inset-0 overflow-auto no-scrollbar"
              >
                {pages[page]}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  )
}

export default PageHandler