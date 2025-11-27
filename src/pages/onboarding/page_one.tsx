import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function PageOne() {
    const navigate = useNavigate();
    const handleSwitch = () => {
    navigate('/pageTwo');
  };
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 drop-shadow-lg"
      >
        MetalSub
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-gray-300 max-w-xl text-center mb-10"
      >
        A sleek, metallic dashboard to track, manage, and optimize all your subscriptions in one place.
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          { title: "Track", desc: "Monitor renewals & activity in real-time" },
          { title: "Organize", desc: "Sort subscriptions with tags & filters" },
          { title: "Optimize", desc: "Find savings & avoid unwanted charges" },
        ].map((item, idx) => (
          <Card
            key={idx}
            className="bg-linear-to-b from-gray-800 to-gray-900 border border-gray-700 shadow-xl rounded-2xl hover:shadow-gray-600/30 transition-shadow duration-300"
          >
            <CardContent className="p-6 text-center">
              <Sparkles className="mx-auto h-8 w-8 mb-4 text-gray-300" />
              <h3 className="text-xl font-semibold text-gray-200 mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12"
      >
        <Button onClick={handleSwitch} className="px-8 py-4 text-lg rounded-2xl bg-linear-to-r from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700 transition-all shadow-xl">
          Get Started
        </Button>
      </motion.div>
    </div>
  );
}
