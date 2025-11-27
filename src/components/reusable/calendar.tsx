// import { Calendar } from "@/components/ui/calendar";
import { motion } from "framer-motion";
import { useState } from 'react';

function CustomCalendar() {
    const [date, setDate] = useState(new Date());
    return (<main className="flex-1 p-10 overflow-auto flex flex-col items-center">
        <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6 text-gray-200"
        >
            Renewal Calendar
        </motion.h2>


        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/50 border border-gray-700 p-6 rounded-3xl shadow-xl backdrop-blur-xl"
        >
            {/* <Calendar selected={date} onSelect={setDate} className="text-white" /> */}
        </motion.div>
    </main>
    )
}

export default CustomCalendar