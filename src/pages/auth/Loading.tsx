import { motion } from "framer-motion";

export default function LoadingBox() {

    const sentenceVariants = {
        hidden: {},
        
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const letterVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { opacity: { duration: 0 } } }
        
    };

    const Typewriter = ({ text, ...rest }: { text: string; [key: string]: unknown }) => (
        <motion.p
            key={text}
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
            {...rest}
        >
            {text.split("").map((char:any, i:any) => (
                <motion.span key={`${char}-${i}`} variants={letterVariants}>
                    {char}
                </motion.span>
            ))}
        </motion.p>
    );
    return (
        <div className="min-h-screen w-full bg-linear-to-b from-black via-gray-900 to-black text-white flex flex-col justify-center items-center">

            <div className="flex flex-col gap-3 items-center justify-center w-full h-full">
                <div className="relative flex gap-3">
                    <motion.div
                        className="w-6 h-6 bg-blue-500 rounded-full"
                        animate={{
                            rotate: [0, 180, 360],
                            y: [0, -20, 0]
                        }}
                        transition={{

                            duration: 1,
                            repeat: Infinity,
                            ease: "easeIn",
                            repeatDelay: 2,
                        }}
                    />
                    <motion.div
                        className="w-6 h-6 bg-blue-500 rounded-full"
                        animate={{
                            rotate: [0, 180, 360],
                            y: [0, -20, 0]
                        }}
                        transition={{
                            delay: 1,
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 2,
                            ease: "easeIn",
                        }}
                    />
                    <motion.div
                        className="w-6 h-6 bg-blue-500 rounded-full"
                        animate={{
                            rotate: [0, 180, 360],
                            y: [0, -20, 0]
                        }}
                        transition={{
                            delay: 2,
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 2,
                            ease: "easeIn",
                        }}
                    />
                </div>
                <Typewriter text="Signing in" className="text-2xl"/>
            </div>

        </div>
    );
}
