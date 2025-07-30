// ./src/components/Modal.jsx
import React from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (typeof document === "undefined") return null; // SSR safeguard

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal box */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg w-full max-w-lg p-6 relative text-white">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-300 hover:text-white"
                onClick={onClose}
              >
                <FaTimes size={20} />
              </button>

              {/* Title */}
              {title && (
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
              )}

              {/* Modal Content */}
              <div>{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body // ⬅ Always renders at top of DOM
  );
};

export default Modal;
