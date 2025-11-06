import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleWhatsAppClick = (country: "france" | "suisse") => {
    const numbers = {
      france: "33774598627",
      suisse: "41778083270",
    };
    window.open(`https://wa.me/${numbers[country]}`, "_blank");
    setShowOptions(false);
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.button
          onClick={() => setShowOptions(!showOptions)}
          className="relative w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pulse animation */}
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute inset-0 bg-[#25D366] rounded-full"
          />
          
          {/* Icon */}
          <motion.div
            animate={{ rotate: showOptions ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {showOptions ? (
              <X className="w-8 h-8 text-white relative z-10" />
            ) : (
              <MessageCircle className="w-8 h-8 text-white relative z-10" />
            )}
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Options Menu */}
      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-8 z-50 bg-card rounded-2xl shadow-2xl border-2 border-border/50 overflow-hidden"
          >
            <div className="p-4 space-y-3 min-w-[250px]">
              <p className="text-sm font-semibold text-center mb-2">
                Choisissez votre pays
              </p>
              
              <Button
                onClick={() => handleWhatsAppClick("france")}
                className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90 text-white rounded-xl py-6 text-base"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                France
              </Button>
              
              <Button
                onClick={() => handleWhatsAppClick("suisse")}
                className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90 text-white rounded-xl py-6 text-base"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Suisse
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppFloat;
