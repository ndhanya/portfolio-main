// src/components/Popup.jsx
import React from "react";
import "./Popup.css";

function Popup({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  // Close when clicking overlay
  const handleOverlayClick = (e) => {
    // if user clicked on overlay (not the modal content), close
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="popup-overlay" onClick={handleOverlayClick} role="dialog" aria-modal="true">
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button
          className="popup-close"
          onClick={onClose}
          aria-label="Close popup"
          type="button"
        >
          ×
        </button>

        <div className="popup-body">{children}</div>
      </div>
    </div>
  );
}

export default Popup;
