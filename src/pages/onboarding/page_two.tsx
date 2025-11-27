import { motion } from "framer-motion";
import { CalendarDays, Clock, Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function PageTwo() {
        const navigate = useNavigate();
    const handleSwitch = () => {
    navigate('/pageThree');
  };
  return (
    <div className="min-h-screen w-full bg-linear-to-b from-black via-gray-900 to-gray-950 text-white flex flex-col items-center justify-center px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-linear-to-r from-gray-200 via-gray-400 to-gray-600"
      >
        Smart Renewal Calendar
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-gray-300 max-w-2xl text-center mb-12"
      >
        Visualize your subscriptions like never before. A powerful, metallic calendar system that tracks renewals, predicts upcoming charges, and keeps you in control.
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {
          [
            {
              title: "Renewal Timeline",
              icon: <Clock className="h-10 w-10 mx-auto mb-4" />, 
              desc: "View all monthly or yearly renewals across a unified timeline."
            },
            {
              title: "Metallic Calendar",
              icon: <CalendarDays className="h-10 w-10 mx-auto mb-4" />, 
              desc: "A stylized steel-textured grid showing upcoming subscription dates."
            },
            {
              title: "Smart Alerts",
              icon: <Bell className="h-10 w-10 mx-auto mb-4" />, 
              desc: "Receive forecasted reminders before charges hit your account."
            },
          ].map((item, idx) => (
            <Card
              key={idx}
              className="bg-gradient-to-b from-gray-800/60 to-gray-900 border border-gray-700 shadow-xl rounded-2xl backdrop-blur-sm hover:shadow-gray-500/30 transition-shadow duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="text-gray-200">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))
        }
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16"
      >
        <Button onClick={handleSwitch} className="px-8 py-4 text-lg rounded-2xl bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700 transition-all shadow-xl">
          Continue
        </Button>
      </motion.div>
    </div>
  );
}
