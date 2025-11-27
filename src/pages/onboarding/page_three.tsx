import { motion } from "framer-motion";
import { BarChart3, TrendingUp, PiggyBank } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function PageThree() {
       const navigate = useNavigate();
        const handleSwitch = () => {
        navigate('/pageHandler');
      };
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white flex flex-col items-center justify-center px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600"
      >
        AI-Powered Insights
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-gray-300 max-w-2xl text-center mb-12"
      >
        Understand your spending, identify waste, and optimize your subscriptions with intelligent analytics.
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
              title: "Cost Breakdown",
              icon: <BarChart3 className="h-10 w-10 mx-auto mb-4" />, 
              desc: "See where your money goes each month with category-level visualization."
            },
            {
              title: "AI Suggestions",
              icon: <TrendingUp className="h-10 w-10 mx-auto mb-4" />, 
              desc: "Machine learning highlights patterns and recommends actionable savings."
            },
            {
              title: "Smart Savings",
              icon: <PiggyBank className="h-10 w-10 mx-auto mb-4" />, 
              desc: "Identify duplicate, unused, and overpriced subscriptions instantly."
            },
          ].map((item, idx) => (
            <Card
              key={idx}
              className="bg-linear-to-b from-gray-800/60 to-gray-900 border border-gray-700 shadow-xl rounded-2xl backdrop-blur-sm hover:shadow-gray-500/30 transition-shadow duration-300"
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
          Finish Onboarding
        </Button>
      </motion.div>
    </div>
  );
}
