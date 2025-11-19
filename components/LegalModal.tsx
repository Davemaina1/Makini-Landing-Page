import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, content }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-makini-navy/80 backdrop-blur-md"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div 
        className="relative bg-white border border-makini-navy/10 w-full max-w-3xl shadow-2xl flex flex-col max-h-[85vh]"
        style={{ animation: 'modalFadeIn 0.3s ease-out forwards' }}
      >
        
        {/* Header */}
        <div className="flex justify-between items-center p-8 border-b border-makini-navy/5 bg-makini-ice">
          <h2 className="font-serif text-2xl md:text-3xl text-makini-navy tracking-wide">{title}</h2>
          <button 
            onClick={onClose}
            className="text-makini-navy/40 hover:text-makini-royal transition-colors p-2"
          >
            <X size={24} strokeWidth={1} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-8 overflow-y-auto custom-scrollbar bg-white">
          <div className="text-makini-navy/80 font-light leading-relaxed space-y-6 text-base md:text-lg">
            {content}
          </div>
        </div>
        
        {/* Footer Gradient Hint */}
        <div className="h-6 bg-gradient-to-t from-white to-transparent pointer-events-none absolute bottom-0 left-0 right-0"></div>
      </div>
    </div>
  );
};